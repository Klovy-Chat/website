'use client';

import styles from './not-found.module.css';

export default function NotFound() {
  const goHome = () => {
    // Add smooth transition effect
    if (typeof window !== 'undefined') {
      document.body.style.transition = 'opacity 0.3s ease-out';
      document.body.style.opacity = '0';
      
      setTimeout(() => {
        window.location.href = '/';
      }, 300);
    }
  };

  // Interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      const orbs = document.querySelectorAll(`.${styles.orb}`);
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      goHome();
    }
  };

  return (
    <div 
      className={styles.errorContainer} 
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.bgGrid}></div>
      <div className={styles.floatingOrbs}>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorDescription}>
          Nie znaleziono strony <span style={{ color: '#3b82f6' }}>/</span> Page not found<br />
          The page you&apos;re looking for seems to have vanished into the digital abyss.
        </p>
        <button className={styles.homeButton} onClick={goHome}>
          <svg className={styles.homeIcon} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          Go Home
        </button>
      </div>
    </div>
  );
}