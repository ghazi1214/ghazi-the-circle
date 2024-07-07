// components/CartIcon.tsx
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { toggleCart } from '../features/cart/cartSlice'
import ShoppingCartOverlay from './ShoppingCartOverlay'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)
  const { quantity, totalAmount, isOpen } = cart

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <>
      <div className="relative text-black cursor-pointer" onClick={handleCartClick}>
        <img src="/add-shopping-cart-icon.png" alt="Cart" className="w-8 h-8" />
        {quantity > 0 && (
          <>
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full px-2 py-1">
              {quantity}
            </span>
            <span className="absolute -bottom-2 -right-2 bg-green-500 text-black text-xs rounded-full px-2 py-1">
              £{totalAmount.toFixed(2)}
            </span>
          </>
        )}
      </div>
      {isOpen && <ShoppingCartOverlay />}
    </>
  )
}

export default CartIcon
