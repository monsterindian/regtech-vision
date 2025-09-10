import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  before: React.ReactNode;
  after: React.ReactNode;
  height?: number | string;
}

const BeforeAfterSlider = ({ before, after, height = 320 }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const up = () => setDragging(false);
    const move = (e: MouseEvent) => {
      if (!dragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      setPos(x / rect.width);
    };
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mousemove', move);
    };
  }, [dragging]);

  return (
    <div ref={containerRef} className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white" style={{ height }}>
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ width: `${pos * 100}%` }}>{before}</div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
        style={{ left: `${pos * 100}%` }}
      />

      {/* Thumb */}
      <motion.button
        type="button"
        onMouseDown={() => setDragging(true)}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-xs font-semibold shadow-lg"
        style={{ left: `${pos * 100}%` }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Drag to compare"
      >
        Drag
      </motion.button>

      {/* Labels */}
      <div className="absolute left-3 top-3 text-xs font-semibold bg-white/80 backdrop-blur rounded px-2 py-1">Manual</div>
      <div className="absolute right-3 top-3 text-xs font-semibold bg-white/80 backdrop-blur rounded px-2 py-1">Agentic</div>
    </div>
  );
};

export default BeforeAfterSlider;
