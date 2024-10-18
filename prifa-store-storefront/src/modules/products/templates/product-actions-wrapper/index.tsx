// Ürün verilerini almak için kullanılan fonksiyon.
import { retrievePricedProductById } from "@lib/data"

// Bölgeyi temsil eden Medusa tipi.
import { Region } from "@medusajs/medusa"

// Ürünle ilgili aksiyonları (örneğin sepete ekleme) yöneten bileşen.
import ProductActions from "@modules/products/components/product-actions"

/**
 * Bir ürünün gerçek zamanlı fiyatlandırma bilgilerini getirir 
 * ve `ProductActions` bileşenini render eder.
 */
export default async function ProductActionsWrapper({
  id,
  region,
}: {
  id: string // Ürün kimliği
  region: Region // Ürünün bulunduğu bölge bilgisi
}) {
  // Ürün kimliği ve bölgeye göre fiyatlandırılmış ürün verisi getirir.
  const product = await retrievePricedProductById({ id, regionId: region.id })

  // Eğer ürün bulunamazsa `null` döndürür (bileşeni render etmez).
  if (!product) {
    return null
  }

  // Ürün bulunduğunda `ProductActions` bileşenini render eder
  // ve ürünü ve bölgeyi props olarak bileşene geçirir.
  return <ProductActions product={product} region={region} />
}
