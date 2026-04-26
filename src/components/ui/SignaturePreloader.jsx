import React from "react";
import { motion } from "framer-motion";

const SignaturePreloader = () => {
  const base = {
    fill: "none",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const makeVariants = (length, delay = 0) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: "easeInOut", delay },
    },
  });

  const dotVariants = (delay) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, delay },
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-999 overflow-hidden">
      <div className="relative flex flex-col items-center">
        <svg
          width="320"
          height="110"
          viewBox="32 25 265 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* === BILAL === */}

          {/* B */}
          <motion.path
            {...base}
            strokeWidth="2.2"
            d="M 38 30 C 37 35, 36 50, 36 70 C 36 85, 36 100, 37 112 C 38 120, 40 124, 42 124 C 46 124, 52 118, 55 112 C 58 105, 58 96, 55 90 C 52 84, 47 82, 42 82 C 48 82, 55 80, 58 74 C 62 67, 61 58, 57 52 C 53 46, 47 44, 42 44 C 40 44, 38 46, 38 50"
            variants={makeVariants(1, 0)}
            initial="hidden"
            animate="visible"
          />

          {/* i stroke */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 72 62 C 72 72, 71 85, 70 98 C 70 106, 70 114, 72 118"
            variants={makeVariants(1, 0.15)}
            initial="hidden"
            animate="visible"
          />
          {/* i dot */}
          <motion.circle
            cx="73" cy="52" r="2.5"
            fill="white"
            variants={dotVariants(0.15)}
            initial="hidden"
            animate="visible"
          />

          {/* l (first) */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 84 30 C 83 45, 82 60, 82 80 C 82 98, 83 110, 84 120 C 85 126, 87 128, 89 124 C 91 120, 91 114, 90 108"
            variants={makeVariants(1, 0.3)}
            initial="hidden"
            animate="visible"
          />

          {/* a */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 116 80 C 112 72, 106 68, 102 70 C 96 73, 93 81, 93 90 C 93 100, 96 110, 102 114 C 107 117, 113 115, 116 110 C 118 106, 118 100, 118 92 C 118 84, 117 78, 116 75 C 116 80, 116 92, 116 108 C 116 116, 117 120, 119 120"
            variants={makeVariants(1, 0.4)}
            initial="hidden"
            animate="visible"
          />

          {/* l (second) */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 130 30 C 129 46, 128 62, 128 82 C 128 100, 129 112, 130 120 C 131 126, 133 128, 135 124 C 137 120, 137 114, 136 108"
            variants={makeVariants(1, 0.55)}
            initial="hidden"
            animate="visible"
          />

          {/* === MALIK === */}

          {/* M */}
          <motion.path
            {...base}
            strokeWidth="2.2"
            d="M 162 60 C 162 72, 162 88, 162 104 C 162 112, 163 118, 164 120 L 164 70 C 168 82, 173 94, 178 102 C 183 94, 188 80, 192 68 L 192 120"
            variants={makeVariants(1, 0.7)}
            initial="hidden"
            animate="visible"
          />

          {/* a */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 217 82 C 213 75, 208 70, 204 72 C 199 75, 197 83, 197 92 C 197 102, 200 112, 205 116 C 210 119, 216 117, 219 112 C 221 108, 222 102, 222 96 C 222 88, 221 82, 220 78 C 220 84, 220 96, 220 112 C 220 120, 221 124, 223 122"
            variants={makeVariants(1, 0.8)}
            initial="hidden"
            animate="visible"
          />

          {/* l */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 232 40 C 231 55, 230 72, 230 90 C 230 106, 231 116, 232 122 C 233 127, 235 128, 237 125 C 238 121, 238 116, 237 110"
            variants={makeVariants(1, 0.9)}
            initial="hidden"
            animate="visible"
          />

          {/* i stroke */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 248 68 C 247 78, 247 90, 247 102 C 247 110, 247 116, 249 120"
            variants={makeVariants(1, 1.0)}
            initial="hidden"
            animate="visible"
          />
          {/* i dot */}
          <motion.circle
            cx="249" cy="58" r="2.5"
            fill="white"
            variants={dotVariants(1.0)}
            initial="hidden"
            animate="visible"
          />

          {/* k */}
          <motion.path
            {...base}
            strokeWidth="2"
            d="M 260 40 C 259 58, 258 78, 258 98 C 258 108, 258 116, 260 122 M 276 68 C 270 76, 265 84, 260 92 C 265 100, 271 110, 278 120"
            variants={makeVariants(1, 1.1)}
            initial="hidden"
            animate="visible"
          />

          {/* Underline flourish */}
          <motion.path
            {...base}
            strokeWidth="1.4"
            opacity={0.5}
            d="M 32 134 C 80 138, 140 140, 200 138 C 240 137, 270 135, 290 134"
            variants={makeVariants(1, 1.3)}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-4 text-xs font-outfit uppercase text-white font-medium"
        >
          Bilal Malik &nbsp; - &nbsp; Portfolio 2026
        </motion.div>
      </div>
    </div>
  );
};

export default SignaturePreloader;
