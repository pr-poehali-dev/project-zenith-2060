import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/47e850df-d304-4e38-8ee7-3fc94e5ef742.jpg',
  'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/49c6c51e-cbf1-442b-b533-9daebd260356.jpg',
  'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/e0934171-2db6-4beb-92f1-177b4333262d.jpg',
  'https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/files/f7427316-157b-48fc-ace0-959899b019f1.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            {/* Логотип личного бренда */}
            <div
              className={cn(
                'transform transition-all duration-700 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              )}
            >
              <img
                src="https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/bucket/02dc180c-652f-4c9d-92df-e7ae8e156230.png"
                alt="АЯ — Анна Ясникова"
                className="h-16 w-auto md:h-20 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Портрет */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              {/* Внешнее свечение */}
              <div className="relative inline-flex items-center justify-center">
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 'calc(100% + 16px)',
                    height: 'calc(100% + 16px)',
                    background: 'radial-gradient(circle, rgba(81,115,38,0.6) 0%, rgba(81,115,38,0.2) 50%, transparent 70%)',
                    filter: 'blur(12px)',
                  }}
                />
                {/* Кольцо с градиентом */}
                <div
                  className="relative rounded-full p-[3px]"
                  style={{
                    background: 'linear-gradient(135deg, #DADFB4, #517326, #2D4A1E, #DADFB4)',
                    boxShadow: '0 0 30px rgba(81,115,38,0.5), 0 0 60px rgba(81,115,38,0.2)',
                  }}
                >
                  <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-64 md:w-64"
                    style={{ background: '#0e1a0a' }}>
                    <img
                      src="https://cdn.poehali.dev/projects/1f8b8785-a453-4f59-a7ce-cf84b844de23/bucket/81ed30f0-af74-4863-8013-b2dbd567999e.jpg"
                      alt="Анна Ясникова"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 15%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Анна Ясникова
                </p>
                <p className="text-base font-light text-white/80 md:text-lg lg:text-xl leading-relaxed">
                  Биотехнолог · Нутрициолог · Косметолог · Преподаватель
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#DADFB4' }}>
                  Более 20 лет в науке о здоровье и красоте.
                  <br />
                  Авторский чай на основе фейхоа — забота о вас изнутри.
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#517326' }}>
                  бесконечная сила природы
                </p>
                <div className="flex gap-6 pt-4">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Telegram"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="VKontakte"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}