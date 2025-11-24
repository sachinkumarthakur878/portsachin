import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-section-bg">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            I am Sachin Kumar Thakur, a passionate student and developer, currently pursuing BCA (5th Semester). 
            With a strong foundation in C, C++, Data Structures, and Python, I am expanding my skills in web development 
            using the MERN stack. I enjoy solving problems through technology and creating user-friendly applications. 
            Beyond academics, I find inspiration in music.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                My Journey
              </h3>
              <p className="text-text-muted leading-relaxed">
                As a dedicated BCA student in my 5th semester, I've been building a strong foundation in computer science 
                fundamentals while actively exploring modern web development technologies. My passion for problem-solving 
                and creating meaningful applications drives my continuous learning journey.
              </p>
              <p className="text-text-muted leading-relaxed">
                I believe in the power of technology to solve real-world problems and am committed to developing 
                user-centric solutions. When I'm not coding, I enjoy mentoring friends in programming and UI/UX design, 
                sharing knowledge that helps others grow in their tech journey.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Education
            </h3>
            
            <Card className="card-hover shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <div className="flex items-center text-text-muted mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      Currently in 5th Semester
                    </div>
                    <div className="flex items-start space-x-2">
                      <BookOpen className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-text-muted text-sm">
                        Focused on programming (C, C++, Python, Data Structures) and web technologies. 
                        Building a comprehensive understanding of software development principles and modern tech stack.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-accent-light rounded-lg">
                <div className="text-2xl font-bold gradient-text">5th</div>
                <div className="text-sm text-text-muted">Current Semester</div>
              </div>
              <div className="text-center p-4 bg-accent-light rounded-lg">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-text-muted">Languages Learned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;