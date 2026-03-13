import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      text: "The easiest to-do app I've ever used! It's incredibly intuitive, and I was able to get started without any learning curve. Now, I can organize my tasks in seconds and never feel overwhelmed by my schedule.",
      author: "Anna S.",
      role: "Product Manager",
      avatar: "https://picsum.photos/seed/anna/64/64"
    },
    {
      text: "Perfect for managing both work and personal tasks on the go. I can seamlessly switch between my to-do lists for work projects and personal errands, all from my phone. It has truly streamlined my day-to-day life.",
      author: "David K.",
      role: "Freelancer",
      avatar: "https://picsum.photos/seed/david/64/64"
    },
    {
      text: "I can't imagine getting through my day without it this app. The reminders and recurring task features are lifesavers! I've tried other apps, but none of them match the simplicity and power of this one.",
      author: "Rachel L.",
      role: "Student",
      avatar: "https://picsum.photos/seed/rachel/64/64"
    },
    {
      text: "This app has transformed how I manage my time. From planning daily tasks to setting long-term goals, it's the one tool I rely on to stay organized and productive. Plus, the mobile app makes it easy to stay on track.",
      author: "Michael P.",
      role: "Entrepreneur",
      avatar: "https://picsum.photos/seed/michael/64/64"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Productivity Anytime, Anywhere
          </h2>
          <p className="text-lg text-gray-600">
            Stay on top of your tasks whether you're at your desk or on the move. Our app is designed to work seamlessly across mobile devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-6">
                {"★★★★★"}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
