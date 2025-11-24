import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Palette, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Programming Tutoring',
      description: 'Comprehensive tutoring in C, C++, and Python programming languages. From basic syntax to advanced concepts like data structures and algorithms.',
      icon: GraduationCap,
      features: [
        'One-on-one tutoring sessions',
        'Practical coding exercises',
        'Exam preparation assistance',
        'Project guidance and mentoring'
      ],
      highlight: 'Perfect for beginners and intermediate learners'
    },
    {
      title: 'UI/UX Basics Guidance',
      description: 'Introduction to user interface and user experience design principles. Learn the fundamentals of creating user-friendly and visually appealing applications.',
      icon: Palette,
      features: [
        'Design thinking principles',
        'Wireframing and prototyping',
        'Color theory and typography',
        'User research basics'
      ],
      highlight: 'Great for aspiring designers and developers'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-hero-bg">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Sharing knowledge and helping others grow in their tech journey through personalized guidance and mentoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover shadow-[var(--shadow-card)] h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6 flex-grow">
                    <h4 className="font-semibold text-text-primary">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-text-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent-light p-4 rounded-lg mb-6">
                    <p className="text-primary font-medium text-sm">
                      💡 {service.highlight}
                    </p>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary smooth-transition group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Why Choose My Tutoring?
            </h3>
            <p className="text-text-muted mb-4">
              As a current BCA student, I understand the challenges of learning programming and design. 
              My approach combines academic knowledge with practical experience, making complex concepts 
              easy to understand and apply.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;