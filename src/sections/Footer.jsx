import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes strokeCycle {
          0%   { stroke: #ffffff; }
          20%  { stroke: #7F77DD; }
          40%  { stroke: #1D9E75; }
          60%  { stroke: #EF9F27; }
          80%  { stroke: #D4537E; }
          100% { stroke: #ffffff; }
        }
        @keyframes dotCycle {
          0%   { fill: #ffffff; }
          20%  { fill: #7F77DD; }
          40%  { fill: #1D9E75; }
          60%  { fill: #EF9F27; }
          80%  { fill: #D4537E; }
          100% { fill: #ffffff; }
        }
        .sig-stroke {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: strokeCycle 5s ease-in-out infinite;
        }
        .sig-dot {
          animation: dotCycle 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .sig-stroke { animation: none; stroke: white; }
          .sig-dot    { animation: none; fill: white; }
        }
      `}</style>

      <footer className="bg txt py-6 font-bai px-8 rounded-[30px] flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="space-y-2">
          <p className="text-sm">© 2026. All rights Reserved.</p>
          <p className="text-sm">
            Made by <span className="txt font-medium">Bilal</span> in{' '}
            <span className="txt font-medium">VS Code</span>
          </p>
        </div>

        {/* Signature Logo */}
        <div className="mt-6 relative left-14 md:mt-0">
          <svg
            width="220"
            height="50"
            viewBox="32 25 265 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* B */}
            <path className="sig-stroke" strokeWidth="2.2"
              d="M 38 30 C 37 35, 36 50, 36 70 C 36 85, 36 100, 37 112 C 38 120, 40 124, 42 124 C 46 124, 52 118, 55 112 C 58 105, 58 96, 55 90 C 52 84, 47 82, 42 82 C 48 82, 55 80, 58 74 C 62 67, 61 58, 57 52 C 53 46, 47 44, 42 44 C 40 44, 38 46, 38 50"/>
            {/* i stroke */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 72 62 C 72 72, 71 85, 70 98 C 70 106, 70 114, 72 118"/>
            {/* i dot */}
            <circle className="sig-dot" cx="73" cy="52" r="2.5"/>
            {/* l */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 84 30 C 83 45, 82 60, 82 80 C 82 98, 83 110, 84 120 C 85 126, 87 128, 89 124 C 91 120, 91 114, 90 108"/>
            {/* a */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 116 80 C 112 72, 106 68, 102 70 C 96 73, 93 81, 93 90 C 93 100, 96 110, 102 114 C 107 117, 113 115, 116 110 C 118 106, 118 100, 118 92 C 118 84, 117 78, 116 75 C 116 80, 116 92, 116 108 C 116 116, 117 120, 119 120"/>
            {/* l */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 130 30 C 129 46, 128 62, 128 82 C 128 100, 129 112, 130 120 C 131 126, 133 128, 135 124 C 137 120, 137 114, 136 108"/>
            {/* M */}
            <path className="sig-stroke" strokeWidth="2.2"
              d="M 162 60 C 162 72, 162 88, 162 104 C 162 112, 163 118, 164 120 L 164 70 C 168 82, 173 94, 178 102 C 183 94, 188 80, 192 68 L 192 120"/>
            {/* a */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 217 82 C 213 75, 208 70, 204 72 C 199 75, 197 83, 197 92 C 197 102, 200 112, 205 116 C 210 119, 216 117, 219 112 C 221 108, 222 102, 222 96 C 222 88, 221 82, 220 78 C 220 84, 220 96, 220 112 C 220 120, 221 124, 223 122"/>
            {/* l */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 232 40 C 231 55, 230 72, 230 90 C 230 106, 231 116, 232 122 C 233 127, 235 128, 237 125 C 238 121, 238 116, 237 110"/>
            {/* i stroke */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 248 68 C 247 78, 247 90, 247 102 C 247 110, 247 116, 249 120"/>
            {/* i dot */}
            <circle className="sig-dot" cx="249" cy="58" r="2.5"/>
            {/* k */}
            <path className="sig-stroke" strokeWidth="2"
              d="M 260 40 C 259 58, 258 78, 258 98 C 258 108, 258 116, 260 122 M 276 68 C 270 76, 265 84, 260 92 C 265 100, 271 110, 278 120"/>
            {/* underline flourish */}
            <path className="sig-stroke" strokeWidth="1.4" opacity={0.5}
              d="M 32 134 C 80 138, 140 140, 200 138 C 240 137, 270 135, 290 134"/>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
