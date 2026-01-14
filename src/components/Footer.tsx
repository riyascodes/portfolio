import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, Instagram, Code2, FileCode } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/riyascodes' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mohamed-riyas-dev/' },
  // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  // { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/riyaz_smiley_22/' },
];

const codingProfiles = [
  // { name: 'LeetCode', icon: Code2, url: 'https://leetcode.com' },
  // { name: 'HackerRank', icon: FileCode, url: 'https://hackerrank.com' },
  { name: 'GeeksforGeeks', icon: Code2, url: 'https://www.geeksforgeeks.org/profile/mdriyas2ynb6' },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-heading font-bold gradient-text inline-block mb-4">
              &lt;Dev /&gt;
            </a>
            <p className="text-muted-foreground text-sm">
              Building scalable web applications with Python and React. 
              Open to exciting opportunities and collaborations.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold mb-4">Connect With</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold mb-4">Coding Profiles</h3>
            <div className="flex flex-wrap gap-3">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all text-sm"
                >
                  <profile.icon size={16} />
                  {profile.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Riyas. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React & Django  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
