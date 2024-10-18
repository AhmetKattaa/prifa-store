import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      {/* Görselleri dikey bir düzenle sıralıyoruz */}
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative overflow-hidden bg-ui-bg-subtle"
            id={image.id}
            style={{ display: 'inline-block' }}
          >
            {/* Next.js Image bileşenini layout ile kullanıyoruz */}
            <Image
              src={image.url}
              priority={index <= 2}
              alt={`Product image ${index + 1}`}
              layout="responsive" // Görsel boyutlarını otomatik ayarlar
              width={800} // Varsayılan genişlik
              height={600} // Varsayılan yükseklik
              className="rounded-lg"
              style={{
                objectFit: "contain", // Görseli kırpmadan sığdırır
              }}
            />
          </Container>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
