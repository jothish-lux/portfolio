
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onLoadComplete: () => void;
}

export default function Loader({ onLoadComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 100);
          return 100;
        }
        return prev + 10;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]"
    >
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-4xl font-bold text-[#1a1a1a]">J</span>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="mt-4 text-white text-sm">{progress}%</p>
      </div>
    </motion.div>
  );
}
