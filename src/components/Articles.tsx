import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

const articles: Article[] = [
  {
    title: 'Building Scalable APIs with Django REST Framework',
    excerpt: 'Best practices for designing RESTful APIs that can handle millions of requests while maintaining clean architecture.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    link: '#',
    tags: ['Django', 'API', 'Backend'],
  },
  {
    title: 'Optimizing React Performance: A Deep Dive',
    excerpt: 'Techniques for improving React application performance including memoization, code splitting, and virtual scrolling.',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    link: '#',
    tags: ['React', 'Performance', 'Frontend'],
  },
  {
    title: 'Database Design Patterns for Modern Applications',
    excerpt: 'Exploring indexing strategies, query optimization, and schema design for high-performance databases.',
    date: 'Oct 10, 2024',
    readTime: '10 min read',
    link: '#',
    tags: ['PostgreSQL', 'Database', 'Architecture'],
  },
];

const Articles = () => {
  return (
    <section id="articles" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Knowledge Sharing</span>
          <h2 className="section-heading mb-4">Featured Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on web development, system design, and best practices 
            from my experience building production applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group block"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors flex items-start gap-2">
                {article.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View all articles
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
