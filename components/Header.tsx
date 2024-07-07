// components/Header.tsx
import CartIcon from './CartIcon'

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">The Circle</h1>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#menu" className="hover:underline">Menu</a></li>
        <li><a href="#contact" className="hover:underline">Aboutus</a></li>
      </ul>
    </nav>
    <CartIcon />
  </header>
)

export default Header
