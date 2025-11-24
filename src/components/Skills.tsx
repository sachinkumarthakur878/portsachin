import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, FileText, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'C Programming', level: 85, icon: Code },
    { name: 'C++', level: 80, icon: Code },
    { name: 'Python', level: 75, icon: Code },
    { name: 'Data Structures', level: 70, icon: Database },
    { name: 'MERN Stack', level: 50, icon: Globe },
    { name: 'MS Office', level: 90, icon: FileText },
  ];

  const additionalSkills = [
    {
      title: 'Teaching & Mentoring',
      description: 'Mentoring friends in UI/UX and programming languages',
      icon: Users,
    },
    {
      title: 'Problem Solving',
      description: 'Strong analytical thinking and algorithmic problem-solving abilities',
      icon: Lightbulb,
    },
    {
      title: 'Communication',
      description: 'Excellent verbal and written communication skills developed through telecalling experience',
      icon: Users,
    },
  ];

  return (
    <section id="skills" className="bg-section-bg">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            A comprehensive skill set spanning programming languages, development tools, and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="card-hover shadow-[var(--shadow-card)]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-text-primary">{skill.name}</span>
                        </div>
                        <span className="text-sm text-text-muted font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-accent-light p-6 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">Currently Learning</h4>
              <p className="text-text-muted">
                Actively expanding my skills in the MERN stack (MongoDB, Express.js, React, Node.js) 
                to become a full-stack web developer.
              </p>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Additional Skills
            </h3>
            
            <div className="space-y-6">
              {additionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="card-hover shadow-[var(--shadow-card)]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-2">
                            {skill.title}
                          </h4>
                          <p className="text-text-muted">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-2">6+</div>
                <div className="text-sm text-text-muted">Programming Languages</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-text-muted">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;