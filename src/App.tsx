import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout/Layout';
import AboutSection from './components/Sections/AboutSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import EducationSection from './components/Sections/EducationSection';
import Footer from './components/Layout/Footer';
import Snowfall from './components/Snowfall';

export function App() {
  return (
    <ThemeProvider>
      <div className='relative min-h-screen w-full bg-sky-200 dark:bg-blue-950 transition-colors duration-300 overflow-x-hidden'>
        <Snowfall />
        <Layout>
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <Footer />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
