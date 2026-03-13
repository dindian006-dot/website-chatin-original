import { motion } from "motion/react";
import { CheckCircle2, Users, Settings, Bell, Layers, Repeat, LayoutTemplate, Calendar, MessageCircle, Share2 } from "lucide-react";
import { IphoneMockup } from "./IphoneMockup";

export function Features() {
  const features = [
    {
      title: "Stay organized, stay productive",
      description: "Keep all your tasks in one place and effortlessly manage your daily schedule. Our task manager helps you stay on top of what's important.",
      points: [
        { icon: <CheckCircle2 className="w-5 h-5" />, text: "Categorize tasks into lists for easy access." },
        { icon: <Calendar className="w-5 h-5" />, text: "Set deadlines and priorities to keep focused." },
        { icon: <LayoutTemplate className="w-5 h-5" />, text: "Quickly add, edit, and mark tasks as complete." }
      ],
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100",
      image: "https://picsum.photos/seed/feature1/400/800"
    },
    {
      title: "Collaborate with your team",
      description: "Boost productivity by collaborating with your team. Share tasks, assign responsibilities, and track progress. All in one place.",
      points: [
        { icon: <Share2 className="w-5 h-5" />, text: "Share lists and tasks with teammates." },
        { icon: <Users className="w-5 h-5" />, text: "Real-time updates and task tracking." },
        { icon: <MessageCircle className="w-5 h-5" />, text: "Seamless communication with comments." }
      ],
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100",
      image: "https://picsum.photos/seed/feature2/400/800"
    },
    {
      title: "Customizable for your workflow",
      description: "Tailor the app to your specific needs. Whether for work, home, or personal projects, customize lists and workflows to suit how you organize.",
      points: [
        { icon: <Layers className="w-5 h-5" />, text: "Custom labels, tags, and task filters." },
        { icon: <Repeat className="w-5 h-5" />, text: "Create recurring tasks and reminders." },
        { icon: <LayoutTemplate className="w-5 h-5" />, text: "Personalized themes and layouts." }
      ],
      bgClass: "bg-gradient-to-br from-fuchsia-50 to-pink-100",
      image: "https://picsum.photos/seed/feature3/400/800"
    },
    {
      title: "Stay on track with smart reminders",
      description: "Never miss a deadline or task with smart, location-based, and recurring reminders. Stay on top of everything, no matter where you are.",
      points: [
        { icon: <Bell className="w-5 h-5" />, text: "Set time-based and location-based reminders." },
        { icon: <Repeat className="w-5 h-5" />, text: "Choose recurring reminders for daily, weekly tasks." },
        { icon: <CheckCircle2 className="w-5 h-5" />, text: "Notifications that ensure you never miss a task." }
      ],
      bgClass: "bg-gradient-to-br from-amber-50 to-orange-100",
      image: "https://picsum.photos/seed/feature4/400/800"
    }
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          {/* Left Column - Sticky Header */}
          <div className="lg:w-5/12 lg:pr-8">
            <div className="sticky top-32">
              <span className="text-xs font-bold tracking-wider uppercase bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-6 inline-block">FEATURES</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Features that help you get more done.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our app is packed with powerful yet simple tools designed to streamline your workflow.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                From organizing tasks to collaborating with your team, these features ensure you stay productive, focused, and always on track.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                Explore what makes our to-do app perfect.
              </p>
              <a href="#download" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                Download App
              </a>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:w-7/12 space-y-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 ${feature.bgClass}`}
              >
                <div className="relative z-10 md:w-3/5 lg:w-2/3 xl:w-3/5">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-5 mb-10">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-0.5 text-gray-800 flex-shrink-0">
                          {point.icon}
                        </div>
                        <span className="text-gray-800 font-medium">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow">
                    Learn More
                  </button>
                </div>
                
                {/* Phone Mockup */}
                <div className="mt-12 md:mt-0 md:absolute md:top-16 md:-right-8 lg:top-24 lg:-right-12 w-[180px] md:w-[220px] lg:w-[260px] transform -rotate-[12deg] transition-transform hover:-rotate-[8deg] duration-500 mx-auto">
                   <IphoneMockup src={feature.image} alt={feature.title} className="w-full h-[380px] md:h-[460px] lg:h-[540px] shadow-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
