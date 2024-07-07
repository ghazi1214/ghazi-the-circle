// components/ShoppingCartTotal.tsx
interface ShoppingCartTotalProps {
  totalAmount: number
}

const ShoppingCartTotal: React.FC<ShoppingCartTotalProps> = ({ totalAmount }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Total Amount: £{totalAmount.toFixed(2)}</h3>
    </div>
  )
}

export default ShoppingCartTotal
