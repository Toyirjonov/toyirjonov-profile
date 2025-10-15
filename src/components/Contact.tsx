import { motion } from "motion/react";
import { Send, MessageCircle, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4">Связаться со мной</h2>
          <p className="text-gray-600 mb-12">
            Готов к новым проектам и сотрудничеству!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* Telegram */}
            <motion.a
              href="https://t.me/toyirjonov_dev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Send size={28} />
              </div>
              <div className="text-center">
                <h3 className="mb-2">Telegram</h3>
                <p className="text-gray-600 text-sm">Напишите мне в Telegram</p>
              </div>
            </motion.a>

            {/* Github */}
            <motion.a
              href="https://github.com/Toyirjonov"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github size={28} />
              </div>
              <div className="text-center">
                <h3 className="mb-2">Github</h3>
                <p className="text-gray-600 text-sm">
                  Посетите мой профиль на Github
                </p>
              </div>
            </motion.a>

            {/* Kwork */}
            <motion.a
              href="https://kwork.ru/user/toyirjonov_dev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={28} />
              </div>
              <div className="text-center">
                <h3 className="mb-2">Kwork</h3>
                <p className="text-gray-600 text-sm">
                  Посетите мой профиль на Kwork
                </p>
              </div>
            </motion.a>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-gray-200"
          >
            <p className="text-gray-600">
              Открыт к интересным проектам и предложениям о сотрудничестве.
              <br />
              Ответ обычно в течение 4 часов.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
