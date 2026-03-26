import React from 'react';

const Footer = () => {
  return (
    <footer className="bg txt py-6 font-bai px-8 rounded-[30px]  flex flex-col md:flex-row justify-between items-end md:items-center">
      <div className="space-y-2">
        <p className="text-sm">© 2026. All rights Reserved.</p>
        <p className="text-sm">
          Made by <span className="txt font-medium">Bilal</span> in <span className="txt font-medium">VS Code</span>
        </p>
      </div>

      {/* Signature Logo */}
      <div className="mt-6 md:mt-0">
        <h2 className="txt text-4xl font-serif italic tracking-tighter" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Bilal.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
