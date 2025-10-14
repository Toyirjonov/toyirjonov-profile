import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link: string;
  status?: "completed" | "in-progress";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Healthy Recipe Finder",
    shortDescription:
      "Современное веб-приложение для поиска и подбора полезных рецептов с интуитивным интерфейсом.",
    fullDescription:
      "Интерактивная платформа, позволяющая находить и сохранять полезные рецепты на каждый день. Пользователи могут искать блюда по ингредиентам, категориям и калорийности. Интерфейс выполнен в современном минималистичном стиле с акцентом на удобство и адаптивность под все устройства.",
    image: "/images/healthy-recipe.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    link: "https://healthy-recipe-website-smoky.vercel.app/",
  },
  {
    id: 2,
    title: "Music Player | Macan playlist",
    shortDescription:
      "Музыкальный плеер, вдохновлённый треками MACAN — стиль, ритм и атмосфера в одном интерфейсе.",
    fullDescription:
      "Интерактивный музыкальный плеер, посвящённый плейлисту MACAN. Реализовано воспроизведение треков, анимации при смене песен и современный минималистичный дизайн. Интерфейс создан с акцентом на атмосферу исполнителя: плавные переходы, динамика и стиль. Использованы HTML, CSS и JavaScript для достижения реалистичных эффектов и отзывчивого UX.",
    image: "/images/music-player.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://music-player-phi-liart.vercel.app/",
  },

  {
    id: 3,
    title: "GitHub Dev Finder",
    shortDescription:
      "Интерактивное приложение для поиска пользователей GitHub с современным и адаптивным интерфейсом.",
    fullDescription:
      "Веб-приложение, которое позволяет искать пользователей GitHub по имени и просматривать их профили, репозитории и статистику активности. Реализован быстрый поиск через GitHub API, отзывчивый дизайн и чистый UI. Проект разработан на React + TypeScript с использованием современного CSS и акцентом на удобство пользователя.",
    image: "/images/dev-finder.png",
    technologies: ["React", "TypeScript", "CSS", "GitHub API"],
    link: "https://user-search-seven.vercel.app/",
  },

  {
    id: 4,
    title: "Todo App",
    shortDescription:
      "Минималистичное приложение для планирования задач и повышения продуктивности.",
    fullDescription:
      "Удобное веб-приложение для организации личных и рабочих задач. Реализованы функции добавления, редактирования и фильтрации задач, а также отметки выполненных дел. Интерфейс выполнен в современном минималистичном стиле с адаптивной версткой и поддержкой тёмной темы. Проект разработан на React + TypeScript с использованием чистого CSS.",
    image: "/images/todo-light.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://todo-app-alpha-ten-34.vercel.app/",
  },

  {
    id: 5,
    title: "Loot X",
    shortDescription:
      "Маркет цифрового лута с атмосферой киберпанка и плавными анимациями.",
    fullDescription:
      "Loot X — площадка, где стиль встречается с технологией. Покупай игровые ключи, аккаунты и цифровые товары в одном месте. Минимализм, неоновая эстетика и скорость работы — всё ради комфортного и стильного опыта. Интерфейс создан на React + JavaScript с адаптивным дизайном и плавной анимацией.",
    image: "/images/loot.png",
    technologies: ["React", "JavaScript", "CSS"],
    link: "#",
    status: "in-progress",
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Портфолио</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Избранные проекты, над которыми я работал
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {project.status && (
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md backdrop-blur-sm ${
                      project.status === "in-progress"
                        ? "bg-red-700 text-white"
                        : "bg-green-700 text-white"
                    }`}
                  >
                    {project.status === "in-progress"
                      ? "В процессе"
                      : "Завершён"}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <button className="text-sm text-black hover:underline">
                  Подробнее →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 ml-auto flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-0">
                {/* Image Gallery */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-[450px] object-cover rounded-xl"
                  />
                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>

                  {selectedProject.status && (
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full shadow-sm ${
                        selectedProject.status === "in-progress"
                          ? "bg-red-700 text-white"
                          : "bg-green-700 text-white"
                      }`}
                    >
                      {selectedProject.status === "in-progress"
                        ? "В процессе"
                        : "Завершён"}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="mb-3">Технологии</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Button */}
                {selectedProject.status !== "in-progress" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Перейти на проект
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
