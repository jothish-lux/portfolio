import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NextStep Consultancy Website',
    category: 'Web Development',
    image: 'https://static.readdy.ai/image/e388132ef9f5fd635098124b371fd5db/9d4bb36141719a0b4d6253cb3f040fa6.jpeg',
    description: 'Educational consultancy platform for European university admissions',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://nextstep-eu.pl/',
    details: 'Developed a comprehensive website for NextStep Consultancy, a European education consultancy service. The platform features service showcases, student testimonials, consultation booking system, and detailed information about studying in Europe. Built with modern web technologies focusing on performance, SEO optimization, and user-friendly navigation to help students achieve their European education dreams.',
  },
  {
    id: 5,
    title: 'Instagram Video Editing',
    category: 'Content Creation',
    image: 'https://readdy.ai/api/search-image?query=Dynamic%20video%20editing%20workspace%20showing%20colorful%20timeline%20with%20multiple%20video%20clips%20and%20transitions%2C%20professional%20editing%20software%20interface%20with%20vibrant%20thumbnails%2C%20creative%20content%20creation%20setup%20with%20modern%20aesthetic%2C%20instagram%20reels%20style%20vertical%20video%20frames%20displayed%2C%20energetic%20and%20creative%20atmosphere%20with%20motion%20graphics%20elements%2C%20bright%20studio%20lighting%2C%20contemporary%20digital%20content%20creation%20environment&width=800&height=600&seq=instagram-video-edit-new-2024&orientation=landscape',
    description: 'Creative video editing and content creation for social media',
    technologies: ['Premiere Pro', 'After Effects', 'Instagram'],
    link: 'https://www.instagram.com/j0thish/',
    details: 'Created and edited engaging video content for Instagram, focusing on storytelling, visual effects, and audience engagement. Developed a consistent visual style and editing rhythm that resonates with followers. Skilled in color grading, transitions, motion graphics, and audio synchronization to create professional-quality social media content.',
  },
  {
    id: 7,
    title: 'WhatsApp AI Bot',
    category: 'AI/ML',
    image: 'https://readdy.ai/api/search-image?query=modern%20artificial%20intelligence%20chatbot%20interface%20with%20whatsapp%20green%20theme%20showing%20message%20bubbles%20and%20ai%20neural%20network%20connections%20on%20clean%20minimalist%20background%20with%20tech%20elements%20and%20digital%20communication%20symbols&width=800&height=600&seq=whatsapp-ai-bot-001&orientation=landscape',
    description: 'Intelligent WhatsApp chatbot powered by AI, connected to linked devices for automated conversations and smart responses.',
    technologies: ['Node.js', 'AI/ML', 'WhatsApp API', 'Automation'],
    link: 'https://github.com/jothish-lux/lux',
    details: 'Built a chatbot using Node.js and AI/ML to automate responses on WhatsApp. The bot can handle common queries, provide information, and even perform actions like booking appointments. It\'s connected to a server for real-time responses.',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-dark to-dark/95 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Featured <span className="text-[#FF6B35]">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing design thinking and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl mt-2 mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-dark border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#FF6B35] rounded-full transition-all z-10 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="p-8">
              <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-sm rounded-full mb-4">
                {selectedProject.category}
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-white/80 text-lg mb-6">{selectedProject.description}</p>
              <p className="text-white/60 leading-relaxed mb-8">{selectedProject.details}</p>
              
              <div className="mb-8">
                <h3 className="font-display font-semibold text-xl mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full font-medium hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  View Live Project
                  <i className="ri-external-link-line"></i>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
