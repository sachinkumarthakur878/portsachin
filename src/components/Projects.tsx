import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Eye } from 'lucide-react';
import { link } from 'fs';


const Projects = () => {
  const projects = [
    {
      title: 'College 91 Website',
      description: 'Contributed to the development and design of a comprehensive college-focused website, providing students with essential resources and information.',
      role: 'Frontend Developer & Designer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      features: [
        'Student resource portal',
        'Event management system',
        'Responsive design for mobile compatibility',
        'User-friendly navigation and interface'
      ],
      status: 'Completed',
      type: 'Web Development',
      link: 'https://college91.com/'
    },
    {
      title: 'Econave',
      description: 'A specialized project designed to assist visually impaired individuals with innovative accessibility solutions, focusing on improving digital experiences.',
      role: 'Full Stack Developer',
      technologies: ['Python', 'Accessibility APIs', 'Voice Integration', 'UI/UX'],
      features: [
        'Voice-guided navigation system',
        'Screen reader optimization',
        'High contrast visual elements',
        'Keyboard-only navigation support'
      ],
      status: 'In Development',
      type: 'Accessibility Solution'
    }
  ];

  return (
    <section id="projects" className="bg-section-bg">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Latest Projects
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Showcasing my journey in web development and accessibility solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover shadow-[var(--shadow-card)] h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${project.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <p className="text-text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Role: {project.role}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-accent-light text-text-primary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-text-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 mt-auto">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button> */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-text-muted text-text-muted hover:bg-text-muted hover:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-text-muted mb-6">
              I'm continuously working on new projects and expanding my portfolio.
              Stay tuned for more exciting developments in web development and accessibility solutions.
            </p>
            {/* <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              
            >
              <Github  className="mr-2 h-4 w-4" />
              Follow My GitHub
              
              

            </Button> */}
            <a
              href="https://github.com/sachinkumarthakur878"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="mr-2 h-4 w-4" />
                Follow My GitHub
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;