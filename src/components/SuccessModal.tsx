import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay content animation to create a nice entrance effect
      const timer = setTimeout(() => setShowContent(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl">
        <div className="flex flex-col items-center text-center p-6 space-y-6">
          {/* Animated Success Icon */}
          <div className="relative">
            <div className={`transition-all duration-700 ease-out ${
              showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
            }`}>
              <div className="relative">
                <CheckCircle className="w-20 h-20 text-green-500 drop-shadow-lg" />
                {/* Sparkle animations */}
                <Sparkles className={`absolute -top-2 -right-2 w-6 h-6 text-blue-500 transition-all duration-1000 ${
                  showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ animationDelay: '0.5s' }} />
                <Sparkles className={`absolute -bottom-1 -left-2 w-4 h-4 text-indigo-500 transition-all duration-1000 ${
                  showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ animationDelay: '0.7s' }} />
              </div>
            </div>
            
            {/* Ripple effect */}
            <div className={`absolute inset-0 rounded-full border-4 border-green-200 transition-all duration-1000 ${
              showContent ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`} />
          </div>

          {/* Success Message */}
          <div className={`space-y-4 transition-all duration-700 ease-out ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Thank You for Your Interest!
            </h2>
            
            <div className="space-y-3">
              <p className="text-lg text-gray-700 font-medium">
                Thank you for showing interest in the future of Compliance.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Your request for a demo has been sent to our team. We will revert at the earliest.
              </p>
              
              <p className="text-sm text-blue-600 font-medium">
                Thank you!
              </p>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className={`w-full bg-gray-200 rounded-full h-1 overflow-hidden transition-all duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.8s' }}>
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all ease-linear"
              style={{ 
                width: showContent ? '100%' : '0%',
                transitionDuration: '5000ms',
                transitionDelay: showContent ? '1s' : '0s'
              }}
            />
          </div>

          <p className={`text-xs text-gray-500 transition-all duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '1s' }}>
            This window will close automatically
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
