
import { Metadata } from 'next'

// Ekspor metadata di luar komponen
export const metadata: Metadata = {
  metadataBase: new URL('https://nfldev.vercel.app'),
  title: 'Nafiru Portfolio | Anthusiats Developer',
  description: 'Personal portfolio of Nafil Habibi Mulyadi, a junior developer and engineer showcasing various projects and skills in web development.',
  authors: [{ name: 'Nafil Habibi Mulyadi' }],
  keywords: ['portfolio', 'web developer', 'engineer', 'programmer', 'creative developer'],
  openGraph: {
    type: 'website',
    title: 'Nafiru Portfolio | Creative Developer',
    description: 'Personal portfolio of Nafil Habibi Mulyadi - Junior Developer and Engineer',
    url: 'https://nfldev.vercel.app',
    siteName: 'Nafiru Portfolio',
    images: [
      {
        url: '/hydrotectearthguard.png', // Buat gambar ini dengan ukuran 1200x630px
        width: 1200,
        height: 630,
        alt: 'Nafiru Portfolio Preview',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nafiru Portfolio | Creative Developer',
    description: 'Personal portfolio of Nafil Habibi Mulyadi - Creative Developer and Engineer',
    creator: '@nafilhabibi', // Ganti dengan username Twitter Anda
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

// Komponen MetaData (jika diperlukan di halaman tertentu)
export default function MetaData() {
  return (
    <></> // Komponen kosong atau lainnya sesuai kebutuhan
  )
}
