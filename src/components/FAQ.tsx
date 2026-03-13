import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Can I use the app without an internet connection?",
      answer: "The app has limited offline functionality. You can view and edit existing tasks without internet. However, syncing and accessing cloud-based features require an internet connection."
    },
    {
      question: "Does the app work on both Android and iOS?",
      answer: "Yes, the app is available for both Android and iOS devices. You can download it from the Google Play Store or Apple App Store respectively."
    },
    {
      question: "How do I set up team collaboration?",
      answer: "To set up team collaboration, go to Settings and select \"Team\". Invite team members via email. Once they accept, you can assign tasks, share projects, and communicate within the app."
    },
    {
      question: "How do I sync my tasks across multiple devices?",
      answer: "Task syncing happens automatically when you're connected to the internet. Simply log in to your account on each device. Your tasks will update in real-time across all your devices."
    },
    {
      question: "Can I set recurring tasks?",
      answer: "Yes, you can set recurring tasks. When creating a task, select \"Repeat\" and choose your preferred frequency - daily, weekly, monthly, or custom. The app will automatically create new instances of the task."
    },
    {
      question: "Is there a dark mode available?",
      answer: "Yes, the app offers a dark mode option. To enable it, go to Settings, select \"Appearance\", and choose \"Dark Mode\". This can help reduce eye strain in low-light conditions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Questions? We've got answers
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about using our app on your mobile device.
            <br />
            <a href="mailto:hello@deserve.studio" className="text-black font-semibold hover:underline mt-2 inline-block">
              Reach us at @deserve_studio
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-gray-400">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
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
  );
}
