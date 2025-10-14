import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Фото */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
              <img src="" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-2xl -z-10" />
          </motion.div> */}

          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 mb-6"
            >
              <span className="text-bold text-black underline underline-offset-2">
                Toyirjonov Shohruhmirzo
              </span>{" "}
              - Frontend разработчик
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              Создаю адаптивные, современные и быстрые сайты с вниманием к
              деталям и пользовательскому опыту. Мне нравится превращать идеи в
              удобные интерфейсы и следить, чтобы каждый элемент выглядел
              гармонично.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-black italic mb-8"
            >
              Люблю, когда дизайн и код работают в гармонии
            </motion.p>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
              >
                Связаться со мной
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-200"
              >
                Посмотреть проекты
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
