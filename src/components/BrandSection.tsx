import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '20', suffix: '+', label: 'лет в науке\nо здоровье' },
  { number: '4', suffix: '', label: 'направления\nэкспертизы' },
  { number: '1000', suffix: '+', label: 'консультаций\nпроведено' },
  { number: '1', suffix: '', label: 'авторский чай\nна основе фейхоа' },
];

const expertise = [
  {
    icon: '🧬',
    title: 'Биотехнолог',
    text: 'Глубокое понимание биохимии организма — основа каждой рекомендации. Наука на службе вашего здоровья.',
  },
  {
    icon: '🥗',
    title: 'Нутрициолог',
    text: 'Питание как инструмент трансформации. Индивидуальные программы, которые работают с первой недели.',
  },
  {
    icon: '✨',
    title: 'Косметолог',
    text: 'Красота снаружи начинается изнутри. Интегративный подход к уходу за кожей и телом.',
  },
  {
    icon: '📚',
    title: 'Преподаватель',
    text: 'Передаю знания, которые меняют жизнь. Обучаю специалистов и всех, кто хочет понять своё тело.',
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function BrandSection() {
  const hero2 = useInView(0.15);
  const statsSection = useInView(0.2);
  const expertiseSection = useInView(0.1);
  const teaSection = useInView(0.15);

  return (
    <>
      {/* — Блок «Обо мне» — */}
      <section
        ref={hero2.ref}
        className="relative overflow-hidden py-24 px-8 md:px-16"
        style={{ background: '#0e1a0a' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Фото лаборатория */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                opacity: hero2.inView ? 1 : 0,
                transform: hero2.inView ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.9s ease',
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/1dd7a136-7089-46e4-87f4-410c386ed0dd.jpg"
                alt="Анна Ясникова в лаборатории"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(to top, #0e1a0a 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#DADFB4' }}>слоган</p>
                <p className="text-xl font-light text-white italic">«Бесконечная сила природы»</p>
              </div>
            </div>

            {/* Текст */}
            <div
              className="flex flex-col gap-8"
              style={{
                opacity: hero2.inView ? 1 : 0,
                transform: hero2.inView ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.9s ease 0.2s',
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#517326' }}>об Анне</p>
                <h2 className="text-3xl font-light leading-snug md:text-4xl text-white mb-6">
                  20 лет — это не стаж.<br />Это путь.
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#DADFB4' }}>
                  Анна начинала как биотехнолог — изучала, как природа создаёт целебные соединения на молекулярном уровне. Со временем это переросло в нечто большее: понимание человека как целостной системы.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#DADFB4' }}>
                  Сегодня она объединяет науку, косметологию и нутрициологию в одном подходе — чтобы вы чувствовали себя хорошо не снаружи, а по-настоящему.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {['Биотехнолог с научной базой', 'Нутрициолог-практик', 'Косметолог-эстет', 'Преподаватель и наставник'].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{
                      opacity: hero2.inView ? 1 : 0,
                      transform: hero2.inView ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.6s ease ${0.4 + i * 0.1}s`,
                    }}
                  >
                    <div className="h-px w-8 flex-shrink-0" style={{ background: '#517326' }} />
                    <span className="text-sm" style={{ color: '#DADFB4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* — Цифры — */}
      <section
        ref={statsSection.ref}
        className="py-20 px-8"
        style={{ background: '#517326' }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                style={{
                  opacity: statsSection.inView ? 1 : 0,
                  transform: statsSection.inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                <p className="text-5xl font-light text-white md:text-6xl">
                  {s.number}<span style={{ color: '#DADFB4' }}>{s.suffix}</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider whitespace-pre-line" style={{ color: '#DADFB4' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* — Экспертиза — */}
      <section
        ref={expertiseSection.ref}
        className="py-24 px-8 md:px-16"
        style={{ background: '#F5F5E7' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div
            className="mb-14"
            style={{
              opacity: expertiseSection.inView ? 1 : 0,
              transform: expertiseSection.inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease',
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#517326' }}>экспертиза</p>
            <h2 className="text-3xl font-light md:text-4xl" style={{ color: '#2D4A1E' }}>
              Четыре роли.<br />Один результат — ваше здоровье.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
                style={{
                  background: '#fff',
                  border: '1px solid #DADFB4',
                  opacity: expertiseSection.inView ? 1 : 0,
                  transform: expertiseSection.inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#2D4A1E' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#54472C' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* — Чай фейхоа — */}
      <section
        ref={teaSection.ref}
        className="relative overflow-hidden py-24 px-8 md:px-16"
        style={{ background: '#0e1a0a' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Текст */}
            <div
              className="flex flex-col gap-7"
              style={{
                opacity: teaSection.inView ? 1 : 0,
                transform: teaSection.inView ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.9s ease',
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#517326' }}>авторский продукт</p>
                <h2 className="text-3xl font-light leading-snug md:text-4xl text-white mb-6">
                  Чай на основе фейхоа.<br />Природа в каждом глотке.
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#DADFB4' }}>
                  Фейхоа — один из немногих плодов с природным йодом в органической форме. Анна создала авторский рецепт чая, объединив 20 лет биотехнологических знаний с искренней любовью к растениям.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#DADFB4' }}>
                  Это не просто напиток — это забота о щитовидной железе, иммунитете и внутреннем балансе, которую вы можете позволить себе каждый день.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  'Органический йод для щитовидной железы',
                  'Антиоксиданты для молодости кожи',
                  'Натуральные компоненты без добавок',
                  'Рецепт биотехнолога с 20-летним опытом',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{
                      opacity: teaSection.inView ? 1 : 0,
                      transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: '#517326' }} />
                    <span className="text-sm" style={{ color: '#DADFB4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Фото продукта */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                opacity: teaSection.inView ? 1 : 0,
                transform: teaSection.inView ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.9s ease 0.2s',
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/73374292-adbd-4089-95cc-40b93c4e29bc.jpg"
                alt="Авторский чай Анны Ясниковой"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(to top, #0e1a0a 0%, transparent 40%)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
