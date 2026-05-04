import Link from 'next/link'
import Image from 'next/image'
import AcmeLogo from '@/app/ui/acme-logo'
import { lusitana } from './ui/fonts'

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#312e81]">

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <AcmeLogo />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center gap-20 px-6">

        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Invoice Dashboard
          </h1>

          <p className={`${lusitana.className} text-gray-200 mb-6`}>
            Manage your invoices easily
          </p>

          <Link
            href="/login"
            className="inline-block bg-[#172554] text-white px-6 py-3 rounded-full font-semibold transition duration-200 shadow-lg hover:bg-[#2563eb] hover:-translate-y-0.5"
          >
            Go To Login
          </Link>
        </div>

        <Image
          src="/hero-desktop.png"
          alt="Dashboard preview"
          width={1000}
          height={760}
          className="hidden md:block w-72 opacity-80"
        />
        <Image
          src="/hero-mobile.png"
          alt="Dashboard preview"
          width={560}
          height={620}
          className="block md:hidden"
        />

      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-200 text-sm">
        © 2026 Invoice Dashboard
      </footer>

    </main>
  )
}
