import React from "react";

type IntensityRatingsProps = {
  product: { id: string; tags: { value: string }[] };
};

const IntensityRatings: React.FC<IntensityRatingsProps> = ({ product }) => {
  const metrics = ["intensity", "bitterness", "sweetness", "caffeine"];
  const tagMap: Record<string, number> = {};

  // Tagleri metriklere göre ayrıştır
  product.tags.forEach((tag) => {
    const [key, value] = tag.value.split(" ");
    if (metrics.includes(key)) {
      tagMap[key] = parseInt(value, 10);
    }
  });

  return (
    <div className="flex flex-col gap-4">
      {metrics.map((metric) => (
        <div key={metric} className="flex items-center gap-4">
          {/* Metrik başlığı */}
          <span className="font-bold capitalize w-32">{metric}</span>

          {/* Kahve çekirdekleri */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  index < (tagMap[metric] || 0) ? "bg-brown-700" : "bg-gray-300"
                }`}
              >
                {/* Çekirdek ikonu */}
                <img
                  src={
                    index < (tagMap[metric] || 0)
                      ? "https://cdn-icons-png.freepik.com/512/3871/3871823.png?ga=GA1.1.1920505466.1732947902"
                      : "https://cdn-icons-png.freepik.com/512/3871/3871543.png?ga=GA1.1.1920505466.1732947902"
                  }
                  alt="Coffee Bean"
                  className="w-4 h-4"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntensityRatings;
