import React, { useState } from 'react';
import EducationCard from '../UI/EducationCard';
import Modal from '../UI/Modal';
import CourseDetails from '../UI/CourseDetails';
interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  courses: {
    title: string;
    details: React.ReactNode;
  }[];
}
const EducationSection: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const educations: Education[] = [
    {
      id: 1,
      degree: 'Master of Information Technology and Systems',
      institution: 'University of Tasmania',
      duration: 'Feb 2023 – Nov 2024',
      gpa: '6.88/7',
      courses: [
        {
          title: 'Web Development',
          details: (
            <div className='space-y-4'>
              <div>
                <h5 className='font-semibold mb-2'>Technologies Learned:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>HTML: Structured web content and layouts.</li>
                  <li>
                    CSS: Styled web pages for responsive and visually appealing
                    designs.
                  </li>
                  <li>
                    Bootstrap: Utilized for rapid development of responsive
                    front-end interfaces.
                  </li>
                  <li>
                    JavaScript: Implemented interactive front-end features and
                    dynamic content.
                  </li>
                  <li>
                    PHP: Developed server-side logic for web applications.
                  </li>
                  <li>MySQL: Designed and managed relational databases.</li>
                  <li>
                    Laravel: Built robust web applications using the Laravel
                    framework and Eloquent ORM.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Major Project:</h5>
                <p className='mb-2 text-blue-900 dark:text-blue-100'>
                  Developed a fully functional website through two submissions:
                </p>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>
                    <strong>First Submission:</strong> Focused on UI/UX design
                    and database schema creation, ensuring an intuitive user
                    interface and a well-structured MySQL database.
                  </li>
                  <li>
                    <strong>Final Submission:</strong> Delivered a complete web
                    application with advanced features:
                    <ul className='list-circle pl-5 mt-1 space-y-1'>
                      <li>
                        Authentication and Authorization for secure user access.
                      </li>
                      <li>CRUD operations for seamless data management.</li>
                      <li>
                        Integrated Laravel framework with Eloquent ORM for
                        efficient backend development.
                      </li>
                      <li>Dynamic front-end interactions using JavaScript.</li>
                      <li>
                        Admin panel with charts and statistics dashboard for
                        data visualization.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Key Skills Gained:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Building responsive and secure web applications.</li>
                  <li>
                    Database design and management with MySQL and Eloquent ORM.
                  </li>
                  <li>
                    Implementing client-side and server-side scripting with
                    JavaScript and PHP.
                  </li>
                  <li>
                    Secure coding practices, including secure database access
                    and data communication.
                  </li>
                  <li>
                    Utilizing frameworks like Laravel and Bootstrap for
                    efficient development.
                  </li>
                </ul>
              </div>
            </div>
          )
        },
        {
          title: 'Mobile Application Development',
          details: (
            <div className='space-y-4'>
              <div>
                <h5 className='font-semibold mb-2'>Technologies Learned:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>
                    Android (Kotlin): Developed native Android applications
                    using Kotlin.
                  </li>
                  <li>
                    iOS (Swift): Built native iOS applications with Swift.
                  </li>
                  <li>
                    Flutter: Created cross-platform apps for both Android and
                    iOS using Flutter.
                  </li>
                  <li>
                    Firestore: Managed cloud-based NoSQL databases for real-time
                    data storage and synchronization.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Projects:</h5>
                <p className='mb-2 text-blue-900 dark:text-blue-100'>
                  Developed three mobile applications with the same
                  functionality across different platforms, all integrated with
                  a shared Firestore database:
                </p>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>
                    Android App (Kotlin): Built a fully functional native
                    Android app with seamless Firestore integration.
                  </li>
                  <li>
                    iOS App (Swift): Created a native iOS app with consistent
                    functionality and Firestore connectivity.
                  </li>
                  <li>
                    Cross-Platform App (Flutter): Developed a single codebase
                    app for both Android and iOS, leveraging Flutter's framework
                    and Firestore.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Key Skills Gained:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>
                    Designing user-centric mobile interfaces with HCI
                    principles.
                  </li>
                  <li>
                    Developing native and cross-platform mobile applications.
                  </li>
                  <li>
                    Integrating and managing cloud-based Firestore databases.
                  </li>
                  <li>
                    Applying software development processes and testing for
                    mobile environments.
                  </li>
                  <li>
                    Adapting applications to device capabilities and network
                    constraints.
                  </li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 2,
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'Shahjalal University of Science and Technology',
      duration: 'Feb 2016 – Nov 2020',
      gpa: '3.45/4',
      courses: [
        {
          title: 'Data Structures',
          details: (
            <div className='space-y-4'>
              <div>
                <h5 className='font-semibold mb-2'>Course Overview:</h5>
                <p className='text-blue-900 dark:text-blue-100'>
                  Comprehensive study of fundamental data structures, their
                  implementations, and applications in solving complex
                  computational problems.
                </p>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Topics Covered:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Arrays and Linked Lists</li>
                  <li>Stacks and Queues</li>
                  <li>Trees (Binary, AVL, Red-Black)</li>
                  <li>Heaps and Priority Queues</li>
                  <li>Hash Tables</li>
                  <li>Graphs and Graph Algorithms</li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Key Skills Gained:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Implementing efficient data structures in C++</li>
                  <li>Analyzing algorithmic complexity (time and space)</li>
                  <li>
                    Selecting appropriate data structures for different problem
                    domains
                  </li>
                  <li>Optimizing code for performance</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          title: 'Algorithm Development',
          details: (
            <div className='space-y-4'>
              <div>
                <h5 className='font-semibold mb-2'>Course Overview:</h5>
                <p className='text-blue-900 dark:text-blue-100'>
                  In-depth exploration of algorithm design paradigms, analysis
                  techniques, and implementation strategies for solving
                  computational problems efficiently.
                </p>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Topics Covered:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Divide and Conquer Algorithms</li>
                  <li>Dynamic Programming</li>
                  <li>Greedy Algorithms</li>
                  <li>Graph Algorithms (Shortest Path, MST)</li>
                  <li>String Matching Algorithms</li>
                  <li>NP-Completeness and Approximation Algorithms</li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Projects:</h5>
                <p className='text-blue-900 dark:text-blue-100'>
                  Implemented various algorithms to solve real-world problems,
                  including:
                </p>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Pathfinding algorithms for navigation systems</li>
                  <li>Optimization algorithms for resource allocation</li>
                  <li>Pattern matching algorithms for text processing</li>
                </ul>
              </div>
              <div>
                <h5 className='font-semibold mb-2'>Key Skills Gained:</h5>
                <ul className='list-disc pl-5 space-y-1 text-blue-900 dark:text-blue-100'>
                  <li>Algorithm design and analysis</li>
                  <li>Problem-solving strategies</li>
                  <li>Complexity theory and performance optimization</li>
                  <li>Implementation of efficient algorithms</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    }
  ];
  const handleViewCourses = (education: Education) => {
    setSelectedEducation(education);
    setIsModalOpen(true);
  };
  return (
    <section id='education' className='py-16'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-blue-900 dark:text-white mb-12'>
          My Academic History
        </h2>
        {educations.map((education) => (
          <EducationCard
            key={education.id}
            degree={education.degree}
            institution={education.institution}
            duration={education.duration}
            gpa={education.gpa}
            onViewCourses={() => handleViewCourses(education)}
          />
        ))}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title='Education Details'
        >
          {selectedEducation && (
            <CourseDetails
              degree={selectedEducation.degree}
              courses={selectedEducation.courses}
            />
          )}
        </Modal>
      </div>
    </section>
  );
};
export default EducationSection;
