import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'Backend' },
  { name: 'Django', level: 90, category: 'Backend' },
  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'React', level: 88, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'PostgreSQL', level: 85, category: 'Database' },
  { name: 'MySQL', level: 82, category: 'Database' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'AWS', level: 75, category: 'DevOps' },
  { name: 'Redis', level: 78, category: 'Backend' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'REST APIs', level: 92, category: 'Backend' },
];

const categories = [
  { name: 'Backend', icon: '⚙️', color: 'from-primary to-accent' },
  { name: 'Frontend', icon: '🎨', color: 'from-blue-400 to-cyan-400' },
  { name: 'Database', icon: '🗄️', color: 'from-green-400 to-emerald-400' },
  { name: 'DevOps', icon: '🚀', color: 'from-orange-400 to-amber-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">My Expertise</span>
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning backend development, frontend engineering, 
            database management, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-heading font-bold">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {skills.filter(s => s.category === category.name).length} skills
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card p-4 group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'Celery', 'RabbitMQ', 'Nginx', 'Linux', 'CI/CD', 'Jest', 'Pytest', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
