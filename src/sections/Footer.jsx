import React from 'react';
import styles from '../styles/Footer.module.css';

// ✅ IMPORT FROM CONFIG
import { footer } from '../data/portfolio.config';

export default function Footer() {
  return (
    <footer role="footer">
      <div className={styles.footerLinks}>
        {footer.links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      {footer.available && (
        <div className={styles.availableTag}>
          <div className={styles.scanDot}></div>
          <p>{footer.availableText}</p>
        </div>
      )}
    </footer>
  );
}
