import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  FileText,
  Shield,
  AlertTriangle,
  Clock,
  DollarSign,
  Target,
  Mail,
  FileSpreadsheet,
  Database,
  Lock,
  BarChart3,
} from "lucide-react";

type BeforeAfterDragProps = {
  reduceMotion?: boolean;
  className?: string;
  height?: number;
  maxWidth?: number; // constrain width to reduce blank space
};

export default function BeforeAfterDrag({ reduceMotion = false, className = "", height = 360, maxWidth = 900 }: BeforeAfterDragProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0.95); // 0 = full After, 1 = full Before; start mostly Before
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = (e as TouchEvent).touches ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      const next = (clientX - rect.left) / rect.width;
      setPos(Math.min(1, Math.max(0, next)));
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  return (
    <div
      className={`relative w-full select-none ${className}`}
      ref={containerRef}
      style={{ height, maxWidth, margin: "0 auto" }}
    >
      {/* Inline styles scoped to this component */}
      <style>{`
        .g-handle { width: 48px; height: 48px; border-radius: 9999px; background: linear-gradient(135deg,#7c3aed,#2563eb); color: #fff; display:flex; align-items:center; justify-content:center; box-shadow: 0 8px 24px rgba(37,99,235,0.25); border: 3px solid #fff; }
        .g-handle-pulse { animation: gPulse 1.8s ease-in-out infinite; }
        @keyframes gPulse { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.06); } }
        .label-chip { font-size: 11px; padding: 4px 8px; border-radius: 8px; display:inline-flex; align-items:center; gap:6px; }
      `}</style>

      {/* After layer (bottom) - light green */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="absolute inset-0 p-4">
          {/* Success icons (icon-only) */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {[
              { Icon: Clock, label: "Same-day decisions" },
              { Icon: DollarSign, label: "Lower cost" },
              { Icon: Target, label: "High accuracy" },
              { Icon: BarChart3, label: "Automated reporting" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="label-chip border border-emerald-200 bg-emerald-50 text-emerald-800"
                title={label}
              >
                <Icon className="w-5 h-5 text-emerald-600" />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>

          {/* Intake/source icons removed per request */}

          {/* KPI icons (icon-only) */}
          <div className="absolute left-3 bottom-3 grid grid-cols-3 gap-2">
            {[
              { Icon: Clock, label: "Same-day" },
              { Icon: DollarSign, label: "Lower cost" },
              { Icon: Target, label: "High accuracy" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                role="img"
                aria-label={label}
                className="bg-white rounded-md border border-emerald-200 px-3 py-2 flex items-center justify-center text-emerald-700"
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </div>
            ))}
          </div>

          {/* Brain center */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center ${reduceMotion ? "" : ""}`}>
            <Brain className="w-12 h-12 text-[#3498db]" />
          </div>

          {/* Bottom-right shield removed per request */}
        </div>
      </div>

      {/* Before layer (top, clipped by pos) - light red */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ width: `${Math.max(0.0001, pos) * 100}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 text-slate-800">
          <div className="absolute inset-0 p-4">
            {/* Documents (icon-only) */}
            <div className="absolute left-3 top-3 space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  role="img"
                  aria-label={`Document ${i + 1}`}
                  className="w-8 h-8 bg-white rounded shadow flex items-center justify-center border border-rose-100"
                >
                  <FileText className="w-5 h-5 text-slate-700" />
                  <span className="sr-only">{`Document ${i + 1}`}</span>
                </div>
              ))}
            </div>

            {/* Time indicator (icon-only) */}
            <div
              className="absolute right-4 top-4 label-chip border border-rose-200 text-rose-700 bg-white/70"
              title="5–7 days"
            >
              <Clock className="w-5 h-5" />
              <span className="sr-only">5–7 days</span>
            </div>

            {/* Data sources icons removed for cleaner layout */}

            {/* Warnings (icon-only) */}
            <div className="absolute left-3 bottom-3 flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className="label-chip border border-rose-300 text-rose-700 bg-white/70"
                  title="Alert"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span className="sr-only">Alert</span>
                </span>
              ))}
            </div>

            {/* Subtle scattered icons to reduce blank space */}
            {[
              { C: FileText, left: "22%", top: "38%" },
              { C: Mail, left: "36%", top: "50%" },
              { C: AlertTriangle, left: "52%", top: "44%" },
              { C: FileSpreadsheet, left: "64%", top: "57%" },
              { C: Clock, left: "46%", top: "62%" },
            ].map(({ C, left, top }, i) => (
              <span key={i} className="absolute" style={{ left, top, opacity: 0.25 }}>
                <C className="w-4 h-4 text-rose-400" />
              </span>
            ))}

            {/* Manual KPI icons on bottom-right removed per request */}
          </div>
        </div>
      </div>

      {/* Handle */}
      <button
        type="button"
        aria-label="Drag to reveal Agentic AI"
        className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 g-handle ${reduceMotion ? "" : "g-handle-pulse"}`}
        style={{ left: `${pos * 100}%` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <span className="text-lg font-black tracking-tight">G</span>
      </button>
    </div>
  );
}
