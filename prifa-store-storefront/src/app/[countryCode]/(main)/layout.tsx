import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

// Navbar yüksekliği (örnek olarak 80px)
const NAVBAR_HEIGHT = 100

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
        {props.children}
      </div>
      <Footer />
    </>
  )
}
