import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = (doc.scrollTop || document.body.scrollTop);
      const height = doc.scrollHeight - doc.clientHeight;
      const progress = height > 0 ? scrolled / height : 0;
      setShow(progress > 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link to="/contact" aria-label="See a 90s demo">
            <div className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 shadow-xl hover:shadow-2xl">
              <span className="text-sm font-semibold">See a 90s demo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
