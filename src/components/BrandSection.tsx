const brandItems = [
  {
    title: 'Личный бренд',
    description: 'Фирменный стиль «АЯ» — Анна Ясникова. Лаконичный монограммный логотип с листком фейхоа, отражающий философию бренда.',
    image: 'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/bucket/02dc180c-652f-4c9d-92df-e7ae8e156230.png',
    tag: 'Брендинг',
  },
  {
    title: 'Визуальный образ',
    description: 'Тёмный постер бренда — природа, эстетика и наука в одном образе. Зелёные оттенки как символ силы природы.',
    image: 'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/bucket/b79eae71-5377-4fa8-ac26-4823046c2e83.png',
    tag: 'Айдентика',
  },
];

export default function BrandSection() {
  return (
    <section className="py-24 px-8 md:px-16" style={{ background: '#F5F5E7' }}>
      <div className="container mx-auto max-w-6xl">

        {/* Заголовок */}
        <div className="mb-16 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest" style={{ color: '#517326' }}>
            бесконечная сила природы
          </p>
          <h2 className="text-3xl font-light md:text-4xl lg:text-5xl" style={{ color: '#2D4A1E' }}>
            Личные разработки
          </h2>
          <p className="max-w-xl text-base" style={{ color: '#517326' }}>
            Фирменный стиль и визуальная айдентика, созданные специально для бренда Анны Ясниковой профессиональным дизайнером.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {brandItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#fff' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ background: '#1a1a1a' }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium text-white"
                    style={{ background: '#517326' }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium" style={{ color: '#2D4A1E' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#54472C' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Цветовая палитра */}
        <div className="mt-16">
          <p className="mb-6 text-xs uppercase tracking-widest" style={{ color: '#517326' }}>
            Фирменная палитра
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { color: '#F5F5E7', name: 'Кремовый' },
              { color: '#DADFB4', name: 'Оливковый' },
              { color: '#517326', name: 'Зелёный' },
              { color: '#325827', name: 'Тёмно-зелёный' },
              { color: '#54472C', name: 'Коричневый' },
            ].map((swatch) => (
              <div key={swatch.color} className="flex flex-col items-center gap-2">
                <div
                  className="h-12 w-12 rounded-full shadow-md border border-black/10"
                  style={{ background: swatch.color }}
                />
                <span className="text-xs" style={{ color: '#517326' }}>{swatch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
