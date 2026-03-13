import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FAQ } from "../components/FAQ";
import { DownloadSection } from "../components/DownloadSection";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "Task creation and categorization",
      "Basic reminders and dates",
      "Limited collaboration features",
      "Max task limit 500",
      "Available on mobile and web",
      "Money-Back Guarantee",
      "Regular customer support"
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$19.99",
    features: [
      "Task creation and categorization",
      "Advanced reminders and dates",
      "Limitless collaboration features",
      "Max task limit 2500",
      "Available on mobile and web",
      "Money-Back Guarantee",
      "Priority customer support"
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49.99",
    features: [
      "Task creation and categorization",
      "Advanced reminders and dates",
      "Limitless collaboration features",
      "Limitless task",
      "Available on mobile and web",
      "Money-Back Guarantee",
      "Priority customer support"
    ],
    buttonText: "Get Started",
    popular: false,
  }
];

export function PricingPage() {
  return (
    <main className="flex-1 pt-32">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-wider uppercase bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-6 inline-block">
            PRICING
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Plans designed to your productivity
          </h1>
        </motion.div>
      </section>

      {/* Pricing Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] ${
                plan.popular 
                  ? "bg-gray-900 text-white shadow-2xl scale-105 z-10" 
                  : "bg-gray-50 text-gray-900 border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-blue-400" : "text-blue-500"}`} />
                    <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
