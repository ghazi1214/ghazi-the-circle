// components/ShoppingCartProduct.tsx
import React from 'react'

interface ShoppingCartProductProps {
  item: {
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

const ShoppingCartProduct: React.FC<ShoppingCartProductProps> = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10)
    if (newQuantity > 0) {
      onUpdateQuantity(newQuantity)
    }
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <img src={item.image} alt={item.name} className="w-16 h-16" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg">{item.name}</h3>
        <p className="text-sm">£{item.price} x {item.quantity}</p>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
          className="w-16 border border-gray-300 rounded"
        />
      </div>
      <button onClick={onRemove} className="text-red-500">Remove</button>
    </div>
  )
}

export default ShoppingCartProduct
