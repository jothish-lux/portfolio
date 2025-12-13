import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design & Creative',
      icon: 'ri-palette-line',
      skills: [
        { name: 'Graphic Design', level: 90 },
        { name: 'Photo Editing', level: 85 },
        { name: 'Video Editing', level: 95 },
        { name: 'Brand Design', level: 88 },
      ],
    },
    {
      title: 'Development',
      icon: 'ri-code-line',
      skills: [
        { name: 'Web Design', level: 85 },
        { name: 'Front-end Development', level: 80 },
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      title: 'Business & Finance',
      icon: 'ri-line-chart-line',
      skills: [
        { name: 'Financial Coordination', level: 92 },
        { name: 'Budget Management', level: 88 },
        { name: 'Strategic Planning', level: 85 },
        { name: 'Client Relations', level: 90 },
      ],
    },
    {
      title: 'Tools & Software',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Adobe Creative Suite', level: 90 },
        { name: 'DaVinci Resolve', level: 85 },
        { name: 'MS Office', level: 95 },
        { name: 'CRM Tools', level: 80 },
      ],
    },
  ];

  const languages = [
    { name: 'English', level: 'C1', flag: '🇬🇧' },
    { name: 'Polish', level: 'A1', flag: '🇵🇱' },
    { name: 'Malayalam', level: 'Native', flag: '🇮🇳' },
    { name: 'Hindi', level: 'Fluent', flag: '🇮🇳' },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-dark to-dark/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF6B35] font-display text-sm font-semibold tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">Skills & Languages</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FF6B35]/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E]">
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <h3 className="font-display font-bold text-2xl">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF6B35]/20 to-[#F7931E]/20 rounded-2xl p-8 border border-[#FF6B35]/30"
        >
          <h3 className="font-display font-bold text-2xl mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h4 className="font-display font-semibold text-lg mb-1">{lang.name}</h4>
                <p className="text-[#FF6B35] text-sm font-medium">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
