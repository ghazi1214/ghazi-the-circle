// features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  quantity: number
  totalAmount: number
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  quantity: 0,
  totalAmount: 0,
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        })
        state.quantity++
        state.totalAmount += newItem.price
      } else {
        existingItem.quantity++
        state.totalAmount += existingItem.price
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity
        state.items = state.items.filter((item) => item.id !== id)
        state.quantity -= existingItem.quantity
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity
        existingItem.quantity = quantity
        state.totalAmount += existingItem.price * quantity
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    }
  },
})

export const { addItem, removeItem, updateQuantity, toggleCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) => state.cart.totalAmount

export default cartSlice.reducer
