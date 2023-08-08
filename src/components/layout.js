import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

function AppLayout({ children }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.variable} font-sans`}>
      <Meta />
      <Header />
      <main className="flex-grow bg-[#f7f7f7]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default AppLayout