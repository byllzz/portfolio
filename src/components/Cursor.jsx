import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
    {/* outer ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-red-900 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* inner dot*/}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
      />

      {/* Global CSS to hide the real cursor */}
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        a, button, input {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
