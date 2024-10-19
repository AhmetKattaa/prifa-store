import React from 'react';
import './SlidingAdBar.css'; // CSS dosyasını bağlıyoruz

const SlidingAdBar = () => {
  return (
    <div className="sliding-adbar-container text-white mb-10">
      <div className="sliding-content">
        {/* Aynı içeriklerin iki kez tekrarlandığı alan */}
        <div className="ad-set">
          <span>🔥 Limited to SEPTEMBER Only 🔥</span>
          <span>⚡️ Free Shipping ⚡️</span>
          <span>🚚 30 Day Returns 🚚</span>
          <span>💥 45% OFF all options 💥</span>
        </div>
        <div className="ad-set">
          <span>🔥 Limited to SEPTEMBER Only 🔥</span>
          <span>⚡️ Free Shipping ⚡️</span>
          <span>🚚 30 Day Returns 🚚</span>
          <span>💥 45% OFF all options 💥</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingAdBar;
