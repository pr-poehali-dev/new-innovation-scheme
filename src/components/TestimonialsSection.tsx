import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Дети перестали толпиться у раздачи. Каждый знает, что его заказ уже готов — просто подходишь и берёшь. Учителя тоже оценили: обед заказываю прямо с телефона между уроками.",
    name: "Марина Сергеевна",
    role: "Завуч, Школа №47, Москва",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Раньше сын говорил «я не ел», а я не знала, правда ли это. Теперь вижу каждый заказ и сумму в приложении. Спокойно на душе — ребёнок точно поел нормально.",
    name: "Ольга Викторовна",
    role: "Мама ученика 7-го класса",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Внедрили за один день. Персонал столовой быстро разобрался, дети — тем более. Списания продуктов сократились почти вдвое, потому что теперь мы знаем, сколько порций нужно заранее.",
    name: "Дмитрий Александрович",
    role: "Директор, Гимназия №3, Казань",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят в школах</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Директора, учителя и родители — о жизни до и после СтоловаяПро.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}