import React, { createContext, useReducer, useContext } from 'react'
import cartReducer, { initialState } from './cartReducer'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [ cart, dispatch ] = useReducer(cartReducer, initialState)
    
    const addToCart = (item) => {
        let updatedCart = []
        if (cart.items.length === 0) {
            updatedCart = [...cart.items, { ...item, tdsc: item.discount * item.quantity ,subtotal: (item.price * item.quantity) - item.discount  }]
        } else {
            let exist = cart.items.findIndex((p) => p.id === item.id)
            
            if (exist > -1) {
                if (cart.items[exist].quantity >= cart.items[exist].stock) {
                    updatedCart = [...cart.items]
                } else {
                    updatedCart = [...cart.items]
                    cart.items[exist].quantity+=1
                    cart.items[exist].tdsc = cart.items[exist].discount * cart.items[exist].quantity
                    cart.items[exist].subtotal = (cart.items[exist].price * cart.items[exist].quantity) - cart.items[exist].tdsc
                }
                
            } else {
                updatedCart = [...cart.items, { ...item, tdsc: item.discount * item.quantity, subtotal: (item.price * item.quantity) - item.discount  }]
            }
        }

        updateOrderItems(updatedCart)
        updatePrice(updatedCart)
        updateQuantity(updatedCart)
        updateDiscount(updatedCart)

        dispatch({
            type: "ADD_TO_CART", 
            payload: {
                items: updatedCart
            }
        })

    }

    const removeFromCart = (item) => {
        const updatedCart = cart.items.filter(cartItem => cartItem.id !== item.id)
        updatePrice(updatedCart)
        updateOrderItems(updatedCart)
        updateQuantity(updatedCart)
        updateDiscount(updatedCart)
        dispatch({type: "REMOVE_FROM_CART", payload: { items: updatedCart }})
    }

    const reduceQuantity = (product) => {
        if (product.quantity <= 1) {
            removeFromCart(product)
        } else {
            const updatedCart = cart.items.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity - 1, tdsc: item.discount * (item.quantity - 1), subtotal: (item.price * (item.quantity - 1) ) - (item.discount * (item.quantity - 1))  }
                } else {
                    return item
                }
            })

            updateOrderItems(updatedCart)
            updatePrice(updatedCart)
            updateQuantity(updatedCart)
            updateDiscount(updatedCart)

            dispatch({type: "REDUCE_QUANTITY", payload: { items: updatedCart } })
        
        }
    }

    const updateOrderItems = (items) => {
        let ordered = []

        items.forEach(item => {
            ordered = [...ordered, { product_id: item.id, qty: item.quantity, price: item.price, sub_total: item.subtotal }]
        })

        dispatch({type: 'UPDATE_ORDER_ITEMS', payload: { orderItems: ordered }})
    }

    const updatePrice = (items) => {
        let total = 0
        items?.forEach((item) => (total += item.price * item.quantity))
        dispatch({type: 'UPDATE_PRICE', payload: { totalPrices: total }})
    }

    const updateQuantity = (items) => {
        let quantity = 0
        items?.forEach((item) => (quantity += item.quantity))
        dispatch({type: "UPDATE_QUANTITY", payload: { totalQuantity: quantity }})
    }

    const updateDiscount = (items) => {
        let discount = 0
        items?.forEach((item) => (discount += (item.discount * item.quantity) ))
        dispatch({type: "UPDATE_DISCOUNT", payload: { totalDiscount: discount }})
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const value = {
        items: cart.items,
        orderItems: cart.orderItems,
        totalPrices: cart.totalPrices,
        totalDiscount: cart.totalDiscount,
        totalQuantity: cart.totalQuantity,
        removeFromCart,
        addToCart,
        reduceQuantity,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error("No Data")
    }

    return context
}

export default useCart