import { motion } from "motion/react";
import { Download, Monitor, Smartphone, Globe } from "lucide-react";

export function DownloadSection() {
  const platforms = [
    { name: "Chrome", icon: <Globe className="w-8 h-8" />, href: "#" },
    { name: "Firefox", icon: <Globe className="w-8 h-8" />, href: "#" },
    { name: "Brave", icon: <Globe className="w-8 h-8" />, href: "#" },
    { name: "Edge", icon: <Monitor className="w-8 h-8" />, href: "#" },
    { name: "iPhone", icon: <Smartphone className="w-8 h-8" />, href: "#" },
    { name: "Android", icon: <Smartphone className="w-8 h-8" />, href: "#" },
  ];

  return (
    <section className="py-24 bg-black text-white" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to get more done?
          </h2>
          <p className="text-lg text-gray-400">
            Download the app for free and see how it can transform your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
            >
              <div className="text-gray-400 group-hover:text-white transition-colors mb-4">
                {platform.icon}
              </div>
              <span className="font-medium text-sm">{platform.name}</span>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Download className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
