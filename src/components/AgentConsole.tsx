import { useEffect, useState } from "react";
import { CheckCircle, Circle, Shield, Lock, GitBranch } from "lucide-react";

const lines = [
  { icon: Shield, text: "Policy check: RBAC scope = 'read:transactions'", color: "text-blue-600" },
  { icon: Lock, text: "Data filter: PII masked (email/phone), secrets redacted", color: "text-emerald-600" },
  { icon: GitBranch, text: "Route: Guardrails -> Vector Cache -> Agent", color: "text-purple-600" },
  { icon: CheckCircle, text: "Action executed: summarize anomalies (no egress)", color: "text-green-600" },
];

const AgentConsole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % (lines.length + 2));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-gray-900 text-gray-100 border border-gray-800 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800 bg-gray-950/60">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-gray-400">Agent Console</span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed min-h-[160px]">
        {lines.map((l, i) => {
          const visible = i <= index;
          return (
            <div key={i} className={`flex items-center gap-2 transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <l.icon className={`h-3.5 w-3.5 ${l.color}`} />
              <span>{l.text}</span>
            </div>
          );
        })}
        {index >= lines.length && (
          <div className="flex items-center gap-2 text-gray-400">
            <Circle className="h-3 w-3 animate-pulse" />
            <span>Idle… awaiting next task</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentConsole;
