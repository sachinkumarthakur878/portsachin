import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Code2, Coffee, Sparkles } from 'lucide-react';
import profileImage from '@/assets/sachin-profile-new.avif';
import cvFile from '@/assets/sachin resume nov 2025.pdf';


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: Code2, label: '5+', desc: 'Semesters', delay: 'delay-100' },
    { icon: Coffee, label: '10+', desc: 'Projects', delay: 'delay-200' },
    { icon: Sparkles, label: '3+', desc: 'Technologies', delay: 'delay-300' }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Animated Background Mesh */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl floating-animation" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/8 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }} />

      <div className="container-custom section-padding pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">

            {/* Status Badge */}
            <div className="glass-card inline-flex items-center px-4 py-2 text-sm font-medium text-primary mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hey There,
                <br />
                <span className="text-gradient-modern">I'm Sachin</span>
              </h1>
              <p className="text-xl text-text-muted max-w-lg leading-relaxed">
                BCA Student & Passionate Developer | Building tomorrow's solutions with today's technology
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden"
                style={{
                  background: 'var(--gradient-button)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-button-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-button)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                Explore My Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button> */}
              <a
                href={cvFile}
                download="sachin resume nov 2025.pdf"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>


            </div>

            {/* Achievement Cards */}
            <div className="flex items-center gap-4 pt-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-4 text-center group hover:scale-105 transition-all duration-300 ${item.delay} animate-fade-in`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-primary mr-1" />
                    <div className="text-2xl font-bold text-gradient-modern">{item.label}</div>
                  </div>
                  <div className="text-xs text-text-muted font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">

              {/* Animated Background Ring */}
              <div className="absolute -inset-8 rounded-full pulse-glow opacity-20" style={{ background: 'var(--gradient-button)' }} />

              {/* Secondary Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-sm" />

              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Sachin Kumar Thakur"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white group-hover:scale-105 transition-transform duration-500"
                  style={{ boxShadow: 'var(--shadow-floating)' }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 glass-card p-3 floating-animation">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card p-3 floating-animation" style={{ animationDelay: '1s' }}>
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;