import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number,
    price: number,
    quantity: number,
    totalPrice: number,
    name: string,
    image: string,
    description: string,
    size: string,
    color: string
}

export interface CartState {
    itemList: CartItem[],
    totalQuantity: number,
    totalPrice: number
}

const initialState: CartState = {
    itemList: [],
    totalQuantity: 0,
    totalPrice: 0
} 

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image,
                    description: newItem.description,
                    size: newItem.size,
                    color: newItem.color
                });
                state.totalQuantity++
            }

            state.totalPrice += newItem.price
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingItem: CartItem | any = state.itemList.find((item) => item.id === action.payload)

            if (existingItem?.quantity > 1) {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
                state.totalPrice -= existingItem.price
            } else {
                const item: CartItem | any = state.itemList.find((item) => item.id === action.payload)
                state.itemList = state.itemList.filter((item) => item.id !== action.payload)
                state.totalQuantity--
                state.totalPrice -= item.price
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice