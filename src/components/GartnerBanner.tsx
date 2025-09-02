import { X } from "lucide-react";
import { useState } from "react";

const GartnerBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse-slow"></div>
      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
            🏆 NEW
          </div>
          <p className="text-sm md:text-base font-medium">
            <span className="font-bold">Ranked #1 in RegTech Innovation 2025</span> by Industry Leaders -
            <a href="#" className="underline hover:no-underline ml-1 font-semibold">
              Download Full Report →
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default GartnerBanner;
