type TickerProps = {
  items: string[];
};

export function Ticker({ items }: TickerProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-concrete-800 bg-concrete-950 py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-sm font-700 uppercase tracking-widest text-concrete-50">
              {item}
            </span>
            <span className="h-2 w-2 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
