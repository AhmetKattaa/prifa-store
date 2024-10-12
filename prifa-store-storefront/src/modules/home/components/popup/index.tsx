import React, { useEffect, useState } from "react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Modalın açık/kapalı durumu
  const [showFloatingButton, setShowFloatingButton] = useState(false); // Sol alttaki butonun görünürlüğü

  // Sayfa yüklendiğinde kontrol
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    } else {
      setShowFloatingButton(true); // Daha önce modal kapanmışsa buton gösterilsin
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setShowFloatingButton(true); // Modal kapatıldığında butonu göster
  };

  const openModal = () => {
    setIsOpen(true); // Butona basıldığında modalı aç
    setShowFloatingButton(false); // Butonu gizle
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg relative max-w-3xl w-full overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="flex">
              {/* Sol Görsel */}
              <div className="w-1/2">
                <img
                  src="https://d3k81ch9hvuctc.cloudfront.net/company/TK2gdP/images/8736c55b-0d3c-483d-9f05-39afa15c1771.png"
                  alt="Prifa Tablets"
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              {/* Sağ Taraf: İçerik */}
              <div className="w-1/2 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://d3k81ch9hvuctc.cloudfront.net/company/TK2gdP/images/c15a82bf-2f89-442b-9084-3eb9e6b27e13.png"
                  alt="Logo"
                  className="mb-4 w-24 "
                />
                <h2 className="text-2xl font-bold mb-2">Get 50% Discount Now!</h2>
                <p className="text-sm mb-4">Enjoy coffee tablet on the go!</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded mb-4 w-full"
                />
                <button className="bg-[#AA121E] text-white py-2 px-4 w-full rounded-md hover:bg-[#B85928] transition mb-2">
                  Claim Now!
                </button>
                <button
                  className="text-gray-500 underline"
                  onClick={closeModal}
                >
                  No Thanks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sol Alttaki Yüzen Buton */}
      {showFloatingButton && (
        <button
          onClick={openModal}
          className="fixed bottom-0 left-5 font-bold bg-[#AA121E] text-white text-xl py-3 px-10 rounded-t-lg shadow-lg hover:bg-[#B85928] transition"
          style={{
            zIndex: 9999, // Yüksek z-index ile üstte kalması sağlanır
          }}
        >
          Get 50% Discount Now!
        </button>
      )}
    </>
  );
};

export default PopupModal;
