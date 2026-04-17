import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Школа №47, Москва",
      project: "Переход на электронные заказы",
      metric: "Очереди сократились на 80%",
      description: "1 200 учеников перешли на предзаказ еды. Столовая успевает приготовить точное количество порций.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Гимназия №3, Казань",
      project: "Контроль питания для родителей",
      metric: "95% родителей подключились",
      description: "Родители видят ежедневное меню и историю заказов ребёнка в режиме реального времени.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Школа №15, Новосибирск",
      project: "Оптимизация закупок столовой",
      metric: "Экономия 15% на продуктах",
      description: "Администрация получила точные данные о спросе и смогла сократить закупки и списания.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Лицей №1, Екатеринбург",
      project: "Заказы для учителей",
      metric: "100+ учителей используют",
      description: "Учителя заказывают обед во время урока — к перемене еда уже готова и ждёт на стойке.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Истории успеха
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Реальные результаты школ, которые уже перешли на умную столовую.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}