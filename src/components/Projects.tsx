import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

type ProjectCategory = 'All' | 'Frontend' | 'Backend' | 'Full Stack';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  problem: string;
  solution: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online marketplace with payment integration and real-time inventory.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    problem: 'Client needed a scalable e-commerce solution to handle 10,000+ products with real-time inventory sync across multiple warehouses.',
    solution: 'Built a Django REST API with React frontend, implementing Redis caching for inventory, Stripe for payments, and Celery for async order processing.',
    impact: 'Increased sales by 40%, reduced page load time by 60%, and handled 500% traffic spike during Black Friday.',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'ML-powered content creation tool with natural language processing capabilities.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Redis', 'Docker'],
    github: 'https://github.com',
    problem: 'Marketing team spent 20+ hours weekly creating social media content and blog posts.',
    solution: 'Developed a FastAPI backend integrating GPT-4 with custom prompts, content templates, and a scheduling queue.',
    impact: 'Reduced content creation time by 75%, generating 100+ pieces of content weekly with consistent brand voice.',
  },
  {
    id: 3,
    title: 'Real-Time Dashboard',
    description: 'Analytics dashboard with live data visualization and interactive charts.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    problem: 'Stakeholders lacked real-time visibility into key business metrics, relying on weekly reports.',
    solution: 'Created a React dashboard with WebSocket connections for live updates, D3.js for custom visualizations, and responsive design.',
    impact: 'Enabled data-driven decisions with real-time insights, reducing report generation time from days to seconds.',
  },
  {
    id: 4,
    title: 'Task Management API',
    description: 'RESTful API for project management with team collaboration features.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tech: ['Python', 'Django REST', 'MySQL', 'JWT', 'Swagger'],
    github: 'https://github.com',
    problem: 'Team used multiple disconnected tools for project tracking, leading to missed deadlines and poor communication.',
    solution: 'Built a comprehensive REST API with role-based access, real-time notifications, and integration capabilities.',
    impact: 'Improved team productivity by 35% and reduced missed deadlines by 50%.',
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and medical records.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'HIPAA'],
    live: 'https://example.com',
    problem: 'Healthcare provider used paper records and phone-based scheduling, causing delays and errors.',
    solution: 'Developed a HIPAA-compliant portal with secure patient data storage, online booking, and automated reminders.',
    impact: 'Reduced no-shows by 40%, digitized 10,000+ patient records, and saved 15 staff hours weekly.',
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop website builder for creative professionals.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Firebase'],
    github: 'https://github.com',
    live: 'https://example.com',
    problem: 'Designers and artists struggled to create online portfolios without coding knowledge.',
    solution: 'Built an intuitive drag-and-drop builder with customizable templates, animations, and one-click publishing.',
    impact: 'Enabled 500+ creatives to launch portfolios, with average build time under 30 minutes.',
  },
];

const filters: ProjectCategory[] = ['All', 'Frontend', 'Backend', 'Full Stack'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">My Work</span>
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building scalable, 
            user-friendly applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card-hover cursor-pointer overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="tech-tag">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tech-tag">{selectedProject.category}</span>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">The Problem</h4>
                    <p className="text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">The Solution</h4>
                    <p className="text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">The Impact</h4>
                    <p className="text-muted-foreground">{selectedProject.impact}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
