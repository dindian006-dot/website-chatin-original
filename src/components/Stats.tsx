import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { value: "45 Million", label: "Download" },
    { value: "1.2 Million", label: "Review" },
    { value: "4.8", label: "Rating" },
  ];

  const quotes = [
    { text: "Intuitive, effective, and incredibly powerful for any task.", author: "The Verge" },
    { text: "An absolute pleasure to use from start to finish.", author: "Techcrunch" },
    { text: "Hands down the most comprehensive to-do list app.", author: "Wired" },
    { text: "An exceptional tool that goes above and beyond expectations.", author: "Geek Wire" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-gray-900 font-medium mb-4 leading-relaxed">"{quote.text}"</p>
              <p className="text-gray-500 text-sm font-semibold">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
