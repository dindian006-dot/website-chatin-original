import { motion, AnimatePresence } from "motion/react";
import { 
  Folder, Calendar, PlusCircle, 
  Users, Clock, MessageCircle, 
  Tag, Repeat, LayoutTemplate, 
  Bell, CalendarCheck,
  Plus, Minus,
  Chrome, Smartphone, Monitor, QrCode, Globe, Shield,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { IphoneMockup } from "../components/IphoneMockup";
import { ThingsAppUI } from "../components/ThingsAppUI";

const featureBlocks = [
  {
    title: "Stay organized, stay productive",
    description: "Keep all your tasks in one place and effortlessly manage your daily schedule. Our task manager helps you stay on top of what's important.",
    points: [
      { icon: <Folder className="w-5 h-5" />, title: "Categorize tasks", desc: "Get notified at the right moment, wherever you are, so you never miss important tasks." },
      { icon: <Calendar className="w-5 h-5" />, title: "Set deadlines and priorities", desc: "Focus on what matters by setting clear priorities and deadlines for each task." },
      { icon: <PlusCircle className="w-5 h-5" />, title: "Quick updates", desc: "Edit, add, and complete tasks swiftly, helping you stay on top of everything." }
    ],
    customUI: <ThingsAppUI />,
    imageBg: "bg-gradient-to-br from-blue-50 to-indigo-100",
    align: "left"
  },
  {
    title: "Collaborate with your team",
    description: "Boost productivity by collaborating with your team. Share tasks, assign responsibilities, and track progress. All in one place.",
    points: [
      { icon: <Users className="w-5 h-5" />, title: "Share tasks", desc: "Collaborate by sharing tasks and lists with team members effortlessly." },
      { icon: <Clock className="w-5 h-5" />, title: "Track Progress", desc: "Get real-time updates to monitor task progress and keep everyone aligned." },
      { icon: <MessageCircle className="w-5 h-5" />, title: "Stay Connected", desc: "Communicate seamlessly with team members directly through comments." }
    ],
    image: "https://picsum.photos/seed/phone2/400/800",
    imageBg: "bg-gradient-to-br from-emerald-50 to-teal-100",
    align: "right"
  },
  {
    title: "Customizable for your workflow",
    description: "Tailor the app to your specific needs. Whether for work, home, or personal projects, customize lists and workflows to suit how you organize.",
    points: [
      { icon: <Tag className="w-5 h-5" />, title: "Custom Labels", desc: "Personalize with custom tags and labels to fit your workflow preferences." },
      { icon: <Repeat className="w-5 h-5" />, title: "Recurring Tasks", desc: "Set tasks to repeat on your preferred schedule, ensuring consistency." },
      { icon: <LayoutTemplate className="w-5 h-5" />, title: "Themed Layouts", desc: "Enjoy a personalized experience with themes and layouts that suit your style." }
    ],
    image: "https://picsum.photos/seed/phone3/400/800",
    imageBg: "bg-gradient-to-br from-fuchsia-50 to-pink-100",
    align: "left"
  },
  {
    title: "Stay on track with smart reminders",
    description: "Never miss a deadline or task with smart, location-based, and recurring reminders. Stay on top of everything, no matter where you are.",
    points: [
      { icon: <Bell className="w-5 h-5" />, title: "Smart Reminders", desc: "Get reminders based on time or location so you're always prepared." },
      { icon: <Repeat className="w-5 h-5" />, title: "Daily Alerts", desc: "Set up daily or weekly reminders to keep recurring tasks in check." },
      { icon: <CalendarCheck className="w-5 h-5" />, title: "Never Miss", desc: "Receive reminders exactly when you need them, keeping you on track effortlessly." }
    ],
    image: "https://picsum.photos/seed/phone4/400/800",
    imageBg: "bg-gradient-to-br from-amber-50 to-orange-100",
    align: "right"
  }
];

const testimonials = [
  {
    text: "The easiest to-do app I've ever used! It's incredibly intuitive, and I was able to get started without any learning curve. Now, I can organize my tasks in seconds and never feel overwhelmed by my schedule.",
    author: "Anna S.",
    avatar: "https://picsum.photos/seed/anna/64/64"
  },
  {
    text: "I can't imagine getting through my day without it this app. The reminders and recurring task features are lifesavers! I've tried other apps, but none of them match the simplicity and power of this one.",
    author: "Rachel L.",
    avatar: "https://picsum.photos/seed/rachel/64/64"
  },
  {
    text: "Perfect for managing both work and personal tasks on the go. I can seamlessly switch between my to-do lists for work projects and personal errands, all from my phone. It has truly streamlined my day-to-day life.",
    author: "David K.",
    avatar: "https://picsum.photos/seed/david/64/64"
  },
  {
    text: "This app has transformed how I manage my time. From planning daily tasks to setting long-term goals, it's the one tool I rely on to stay organized and productive. Plus, the mobile app makes it easy to stay on track.",
    author: "Michael P.",
    avatar: "https://picsum.photos/seed/michael/64/64"
  }
];

const downloads = [
  { name: "Chrome", icon: <Chrome className="w-8 h-8 text-yellow-500" /> },
  { name: "Firefox", icon: <Globe className="w-8 h-8 text-orange-500" /> },
  { name: "Brave", icon: <Shield className="w-8 h-8 text-red-500" /> },
  { name: "Edge", icon: <Monitor className="w-8 h-8 text-blue-500" /> },
  { name: "iPhone", icon: <Smartphone className="w-8 h-8 text-blue-400" /> },
  { name: "Android", icon: <Smartphone className="w-8 h-8 text-green-500" /> },
];

const faqs = [
  { question: "Can I use the app without an internet connection?", answer: "The app has limited offline functionality. You can view and edit existing tasks without internet. However, syncing and accessing cloud-based features require an internet connection." },
  { question: "How do I sync my tasks across multiple devices?", answer: "Task syncing happens automatically when you're connected to the internet. Simply log in to your account on each device. Your tasks will update in real-time across all your devices." },
  { question: "Does the app work on both Android and iOS?", answer: "Yes, the app is available for both Android and iOS devices. You can download it from the Google Play Store or Apple App Store respectively." },
  { question: "Can I set recurring tasks?", answer: "Yes, you can set recurring tasks. When creating a task, select \"Repeat\" and choose your preferred frequency - daily, weekly, monthly, or custom. The app will automatically create new instances of the task." },
  { question: "How do I set up team collaboration?", answer: "To set up team collaboration, go to Settings and select \"Team\". Invite team members via email. Once they accept, you can assign tasks, share projects, and communicate within the app." },
  { question: "Is there a dark mode available?", answer: "Yes, the app offers a dark mode option. To enable it, go to Settings, select \"Appearance\", and choose \"Dark Mode\". This can help reduce eye strain in low-light conditions." }
];

export function FeaturesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-100 via-blue-50 to-white -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Organize, collaborate, and achieve more with ease
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Effortlessly stay organized, collaborate with team, and accomplish more with tools designed for seamless productivity.
          </p>
        </motion.div>
      </section>
      
      {/* Feature Blocks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        {featureBlocks.map((block, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch w-full ${block.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 flex flex-col justify-center py-8 lg:py-16 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{block.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{block.description}</p>
              
              <div className="space-y-8">
                {block.points.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-gray-900">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-10">
                <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg">
                  Learn More
                </button>
                <button className="px-6 py-3 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  Download App
                </button>
              </div>
            </div>

            <div className={`flex-1 w-full relative rounded-[3rem] overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-end justify-center ${block.imageBg}`}>
              <div className="w-[260px] md:w-[300px] lg:w-[320px] translate-y-16 hover:translate-y-12 transition-transform duration-500">
                <IphoneMockup src={block.image} alt={block.title} className="w-full h-[540px] md:h-[620px] lg:h-[660px] shadow-2xl">
                  {block.customUI}
                </IphoneMockup>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials with Phone */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Testimonials */}
            <div className="space-y-8 order-2 lg:order-1">
              {[testimonials[0], testimonials[2]].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
                >
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mx-auto mb-4" referrerPolicy="no-referrer" />
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>

            {/* Center Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center order-1 lg:order-2"
            >
              <div className="mb-8">
                <IphoneMockup src="https://picsum.photos/seed/phonecenter/400/800" alt="App Interface" className="w-[220px] h-[460px]" />
              </div>
              <p className="text-gray-500 text-sm font-medium text-center">Available on Android, iOS, Chrome, Firefox and more!</p>
            </motion.div>

            {/* Right Testimonials */}
            <div className="space-y-8 order-3 lg:order-3">
              {[testimonials[1], testimonials[3]].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
                >
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mx-auto mb-4" referrerPolicy="no-referrer" />
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-gray-100 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white shadow-sm">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download app</h2>
            <p className="text-lg text-gray-600">
              Ready to get more done? Download the app for free and see how it can transform your daily routine.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-auto">
            {downloads.map((item, i) => (
              <a key={i} href="#" className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group">
                <div className="mb-3 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">{item.name}</span>
              </a>
            ))}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <QrCode className="w-12 h-12 text-gray-900" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions? We've got answers</h2>
            <p className="text-lg text-gray-600 mb-6">Find answers to the most common questions about using our app on your mobile device.</p>
            <a href="mailto:hello@deserve.studio" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Reach us at @deserve_studio
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-fit">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-gray-400">
                    {openFaqIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
