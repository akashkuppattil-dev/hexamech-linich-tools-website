"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  sku: string
  price: number
  quantity: number
  minOrderQty: number
  image: string
  note?: string
}

export interface WishlistItem {
  id: string
  name: string
  sku: string
  price: number
  image: string
}

export interface CompareItem {
  id: string
  name: string
  sku: string
  price: number
  image: string
  brand: string
  specs: Record<string, string>
}

interface CartContextType {
  cart: CartItem[]
  wishlist: WishlistItem[]
  compare: CompareItem[]
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  updateNote: (id: string, note: string) => void
  clearCart: () => void
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  addToCompare: (item: CompareItem) => void
  removeFromCompare: (id: string) => void
  isInCompare: (id: string) => boolean
  clearCompare: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [compare, setCompare] = useState<CompareItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || item.minOrderQty) } : i,
        )
      }
      return [...prev, { ...item, quantity: item.quantity || item.minOrderQty }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.minOrderQty, quantity) } : item)),
    )
  }

  const updateNote = (id: string, note: string) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, note } : item)))
  }

  const clearCart = () => setCart([])

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: string) => wishlist.some((item) => item.id === id)

  const addToCompare = (item: CompareItem) => {
    setCompare((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev
      if (prev.length >= 4) return prev
      return [...prev, item]
    })
  }

  const removeFromCompare = (id: string) => {
    setCompare((prev) => prev.filter((item) => item.id !== id))
  }

  const isInCompare = (id: string) => compare.some((item) => item.id === id)

  const clearCompare = () => setCompare([])

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        compare,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateNote,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
