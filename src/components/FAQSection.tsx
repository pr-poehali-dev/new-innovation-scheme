import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Как быстро можно подключить школу?",
      answer:
        "Регистрация и настройка занимают от 30 минут до 1 часа. Администратор создаёт аккаунт, добавляет классы и загружает меню. Уже на следующий день ученики могут делать заказы.",
    },
    {
      question: "Нужно ли устанавливать что-то на школьные компьютеры?",
      answer:
        "Нет. Приложение работает в браузере на любом устройстве — телефоне, планшете или компьютере. Ничего устанавливать не нужно.",
    },
    {
      question: "Как родители видят питание ребёнка?",
      answer:
        "Родитель скачивает приложение и вводит специальный код ребёнка. После этого он видит историю заказов, текущее меню и может получать уведомления о каждом приёме пищи.",
    },
    {
      question: "Что если ребёнок забыл сделать заказ?",
      answer:
        "Администратор столовой может добавить заказ вручную через панель управления. Также родитель может сделать заказ за ребёнка из своего приложения.",
    },
    {
      question: "Есть ли интеграция с 1С и системами питания?",
      answer:
        "Да, в тарифе «Школа» и «Сеть школ» доступна интеграция с 1С:Общепит и другими популярными системами учёта. Настройку проводит наш специалист бесплатно.",
    },
    {
      question: "Безопасны ли данные учеников?",
      answer:
        "Данные хранятся на серверах в России, соответствуют требованиям 152-ФЗ о персональных данных. Доступ строго разграничен: родитель видит только своего ребёнка.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Частые вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Всё, что спрашивают директора, учителя и родители перед подключением.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}