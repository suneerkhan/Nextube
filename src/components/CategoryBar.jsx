import { useRef } from 'react';
import { categories } from '../data/videos';
import './CategoryBar.css';

export default function CategoryBar({ active, onChange }) {
  const ref = useRef();

  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir * 200, behavior: 'smooth' });
  };

  return (
    <div className="category-bar-wrap">
      <button className="scroll-btn left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
      <div className="category-bar" ref={ref}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-chip ${active === cat ? 'active' : ''}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
    </div>
  );
}
