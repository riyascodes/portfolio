import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Mohamed Riyas</span>
            <br />
            Python Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I build scalable web applications with Python, Django, and React. 
            Passionate about clean code, system design, and delivering impactful solutions 
            that drive business growth.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            id="download-resume"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(45, 212, 191, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Hire Me
            </motion.a>
            <motion.a
              href="/Mohamed-Riyas-Resume.pdf"
              // Place your actual resume file as public/resume.pdf so this triggers a download
              download="Mohamed-Riyas-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-xl mx-auto"
          >
            {[
              // { value: '5+', label: 'Years Experience' },
              // { value: '30+', label: 'Projects Completed' },
              // { value: '15+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator – positioned at absolute bottom of About section */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#projects') as HTMLElement | null;
          if (!target) return;

          const nav = document.querySelector('nav') as HTMLElement | null;
          const navHeight = nav?.offsetHeight ?? 80;
          const offset = target.offsetTop - navHeight;

          window.scrollTo({
            top: Math.max(0, offset),
            behavior: 'smooth',
          });
        }}
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
