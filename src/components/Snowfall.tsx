import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';
const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const snowflakes: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }[] = [];
    const snowflakeCount = Math.min(60, Math.floor(window.innerWidth / 2)); // Adjust snowflake density
    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
      });
    }
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const snowColor =
        theme === 'light' ? 'rgba(255, 255, 255, ' : 'rgba(200, 210, 255, ';
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.fillStyle = `${snowColor}${flake.opacity})`;
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
        // Update position for next frame
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y / 50) * 0.5;
        // Reset snowflake when it reaches bottom
        if (flake.y > canvas.height) {
          flake.y = -5;
          flake.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'
    />
  );
};
export default Snowfall;
