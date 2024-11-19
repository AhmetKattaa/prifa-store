import React from "react";
import CreateYourBoxClient from "./CreateYourBoxClient";
import { getProductsList } from "@lib/data";

export default async function CreateYourBoxPage() {
  try {
    // Backend'den ürünleri çekiyoruz
    const { response } = await getProductsList({
      pageParam: 0,
      queryParams: { limit: 12 }, // Limit kaç ürün çekileceğini belirler
      countryCode: null, // Bölge kodu, backend ile eşleşmeli
    });

    console.log("Backend'den dönen ürünler:", response.products); // Ürünleri konsola yazdırıyoruz

    return (
      <div>
        {/* Ürünleri istemci bileşenine gönderiyoruz */}
        <CreateYourBoxClient products={response.products} />
      </div>
    );
  } catch (err) {
    console.error("Ürünleri çekerken bir hata oluştu:", err); // Hataları yakalıyoruz
    return <div>Bir hata oluştu. Lütfen tekrar deneyin.</div>;
  }
}
