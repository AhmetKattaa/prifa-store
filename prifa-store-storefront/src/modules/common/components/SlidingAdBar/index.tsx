import React from 'react';
import './SlidingAdBar.css'; // CSS dosyamız

const SlidingAdBar = () => {
  return (
    <div className="sliding-adbar-container text-white mb-10">
      <div className="sliding-content">
        {/* Aynı içerik iki kez */}
        <div className="ad-set">
          <span className="text-sm whitespace-nowrap">🔥 Limited to SEPTEMBER Only 🔥</span>
          <span className="text-sm whitespace-nowrap">⚡️ Free Shipping ⚡️</span>
          <span className="text-sm whitespace-nowrap">🚚 30 Day Returns 🚚</span>
          <span className="text-sm whitespace-nowrap">💥 45% OFF all options 💥</span>
        </div>
        <div className="ad-set">
          <span className="text-sm whitespace-nowrap">🔥 Limited to SEPTEMBER Only 🔥</span>
          <span className="text-sm whitespace-nowrap">⚡️ Free Shipping ⚡️</span>
          <span className="text-sm whitespace-nowrap">🚚 30 Day Returns 🚚</span>
          <span className="text-sm whitespace-nowrap">💥 45% OFF all options 💥</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingAdBar;
