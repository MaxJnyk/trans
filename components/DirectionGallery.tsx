"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
  imageDir: string;
  sectionIndex: string;
  pageSize?: number;
};

export function DirectionGallery({
  images,
  imageDir,
  sectionIndex,
  pageSize = 12,
}: GalleryProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const visible = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section className="bg-concrete-950">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                /{sectionIndex}
              </span>
              <span className="h-px w-12 bg-concrete-700" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                С объекта
              </span>
            </div>
            <h2 className="font-display text-4xl font-900 uppercase leading-none tracking-tight text-concrete-50 md:text-6xl">
              Фотографии
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-concrete-500 md:block">
            {images.length} фото · клик для увеличения
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {visible.map((img, i) => (
            <button
              key={img}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden border border-concrete-800 transition-colors hover:border-signal ${
                i % 5 === 0
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-square"
              }`}
            >
              <Image
                src={`${imageDir}/${img}`}
                alt={`Объект Транс Строй СПб — фото ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading={i < 8 ? "eager" : "lazy"}
              />
              <span className="absolute bottom-2 left-2 bg-concrete-950/80 px-2 py-1 font-mono text-[0.65rem] text-signal opacity-0 transition-opacity group-hover:opacity-100">
                {String(i + 1).padStart(3, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              onClick={() => setVisibleCount((c) => c + pageSize)}
              className="border border-concrete-600 px-10 py-4 font-display text-sm font-700 uppercase tracking-wide text-concrete-50 transition-colors hover:border-signal hover:bg-signal hover:text-concrete-950"
            >
              Показать ещё {Math.min(pageSize, images.length - visibleCount)}
            </button>
            <span className="font-mono text-xs uppercase tracking-widest text-concrete-600">
              {visibleCount} / {images.length}
            </span>
          </div>
        )}

        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-concrete-500">
          Фотографии с выполненных объектов
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-concrete-950"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-mono text-sm text-concrete-400">
              {String(lightboxIndex + 1).padStart(3, "0")} /{" "}
              {String(images.length).padStart(3, "0")}
            </span>
            <button
              onClick={close}
              className="flex h-10 w-10 items-center justify-center text-concrete-50 transition-colors hover:text-signal"
              aria-label="Закрыть"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image area — centered, arrows overlaid */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden"
            onClick={close}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) > 50) {
                if (delta > 0) prev();
                else next();
              }
              touchStartX.current = null;
            }}
          >
            {/* Prev arrow — overlaid, left edge */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-concrete-50/70 transition-colors hover:text-signal md:left-5"
              aria-label="Предыдущее"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Image — full width on mobile, max on desktop */}
            <div
              className="relative h-full w-full max-w-[1100px] px-14 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${imageDir}/${images[lightboxIndex]}`}
                alt={`Объект Транс Строй СПб — фото ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next arrow — overlaid, right edge */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-concrete-50/70 transition-colors hover:text-signal md:right-5"
              aria-label="Следующее"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Bottom hint on mobile */}
          <div className="px-5 py-3 text-center font-mono text-[0.65rem] uppercase tracking-widest text-concrete-600 md:hidden">
            свайп ← → для листания
          </div>
        </div>
      )}
    </section>
  );
}
