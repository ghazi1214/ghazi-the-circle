// components/ShoppingCartOverlay.tsx
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { removeItem, updateQuantity, toggleCart } from '../features/cart/cartSlice'
import ShoppingCartProduct from './ShoppingCartProduct'
import ShoppingCartTotal from './ShoppingCartTotal'

const ShoppingCartOverlay = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleCloseCart = () => {
    dispatch(toggleCart())
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={handleCloseCart} className="text-red-500">Close</button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <ShoppingCartProduct
                key={item.id}
                item={item}
                onRemove={() => handleRemoveFromCart(item.id)}
                onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
              />
            ))}
            <ShoppingCartTotal totalAmount={totalAmount} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCartOverlay
