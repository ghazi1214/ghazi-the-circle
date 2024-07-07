// components/CartButton.tsx
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

interface CartButtonProps {
  id: string
  name: string
  price: number
  image: string
}

const CartButton: React.FC<CartButtonProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, image }))
  }

  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 flex items-center bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700"
    >
      <img src="/add-shopping-cart-icon.png" alt="Add to Cart" className="w-6 h-6 mr-2" />
      Add to Cart
    </button>
  )
}

export default CartButton
