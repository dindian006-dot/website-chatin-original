import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IphoneMockup } from "./IphoneMockup";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Transform how you work, collaborate and live.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Streamline your day for you and your team with the most efficient task management and to-do list app available.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/download-app"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Download App
          </Link>
          <p className="text-sm text-gray-500 font-medium">
            Available on Android, iOS, Chrome, Firefox and more!
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/user${i}/32/32`}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="flex flex-col items-start ml-2">
            <div className="flex text-yellow-400">
              {"★★★★★"}
            </div>
            <span className="text-xs">Featured by Apple App Store</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 md:mt-24 relative mx-auto max-w-5xl flex justify-center"
      >
        <IphoneMockup src="https://picsum.photos/seed/dashboard/400/800" alt="App Dashboard" className="w-[220px] h-[460px]" />
      </motion.div>
    </section>
  );
}
