// Ürün fiyatlandırma tipini Medusa'dan alır.
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

// Medusa UI bileşenlerinden Heading ve Text'i import eder.
import { Heading, Text } from "@medusajs/ui"

// Dil duyarlılığı ile yönlendirme bağlantısı oluşturan bileşen.
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Ürün bilgisi bileşeninin props türünü tanımlar.
type ProductInfoProps = {
  product: PricedProduct // Fiyatlandırılmış ürün tipi
}

// Ürün hakkında başlık, açıklama ve koleksiyon bilgisi gösteren bileşeni tanımlar.
const ProductInfo = ({ product }: ProductInfoProps) => {
  const { collection, title, description } = product // Ürün bilgisinden gerekli veriler çıkarılır.

  return (
    <div id="product-info"> {/* Ürün bilgi kapsayıcı div'i */}
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {/* Koleksiyon bilgisi varsa gösterir */}
        {collection && (
          <LocalizedClientLink
            href={`/collections/${collection.handle}`} // Koleksiyon sayfasına bağlantı.
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {collection.title} {/* Koleksiyon başlığı */}
          </LocalizedClientLink>
        )}

        {/* Ürün başlığı, H2 seviyesinde stilize edilmiş */}
        <Heading
          level="h2"
          className="text-3xl leading-3 text-ui-fg-base"
          data-testid="product-title" // Test için veri kimliği.
        >
          {title} {/* Ürün başlığı */}
        </Heading>
      </div>
    </div>
  )
}

// Bileşen dışa aktarılır.
export default ProductInfo
