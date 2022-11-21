export const initialState = {
    items: [],
    orderItems: [],
    totalPrices: 0,
    totalQuantity: 0,
    totalDiscount: 0
}

const cartReducer = (cart, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
        return {
            ...cart,
            items: payload.items
        }

        case "REMOVE_FROM_CART":
            return {
                ...cart,
                items: payload.items
            }

        case "REDUCE_QUANTITY":
            return {
                ...cart,
                items: payload.items
            }

        case "UPDATE_PRICE":
            return {
                ...cart,
                totalPrices: payload.totalPrices
            }

        case "UPDATE_DISCOUNT":
            return {
                ...cart,
                totalDiscount: payload.totalDiscount
            }

        case "UPDATE_QUANTITY":
            return {
                ...cart,
                totalQuantity: payload.totalQuantity
            }
        
        case "UPDATE_ORDER_ITEMS":
            return {
                ...cart,
                orderItems: payload.orderItems
            }

        case "CLEAR_CART":
            return initialState

        default:
            throw new Error(`No case for the type ${type}`)
    }
}

export default cartReducer