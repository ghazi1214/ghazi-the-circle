import { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MenuSection from '../components/MenuSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
