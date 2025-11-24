import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-hero-bg">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Building professional experience while continuing my academic journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover shadow-[var(--shadow-card)] border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-2">
                      Telecaller
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-2">
                      Mom Digital Agency
                    </h4>
                    <div className="flex flex-col space-y-2 text-text-muted">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Current Position</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-text-primary">
                  Key Responsibilities:
                </h5>
                <ul className="space-y-3 text-text-muted">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Conducting outbound calls to potential clients and maintaining professional communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Managing client relationships and providing information about digital services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Documenting client interactions and maintaining accurate records</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Supporting the digital marketing team with lead generation activities</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-accent-light rounded-lg">
                <p className="text-text-muted italic">
                  "This role has enhanced my communication skills and given me valuable insights into 
                  the digital marketing industry while I continue my academic pursuits."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-text-muted">
              Looking for internship and full-time opportunities in web development and software engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;