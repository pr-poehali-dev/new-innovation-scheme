import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-accent">Экономим время</span> школьников и учителей,{" "}
          <span className="text-accent">успокаиваем родителей</span>. Здоровое питание — просто и прозрачно.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">500</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Школ подключено</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Более 500 школ уже перешли на электронные заказы и забыли про очереди в столовой.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">92</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">%</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Родителей довольны</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              92% родителей отмечают, что стали спокойнее за питание ребёнка после подключения приложения.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">3</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">мин</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Время на заказ</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Ученик или учитель оформляет заказ на завтра за 3 минуты — прямо с телефона или компьютера.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}