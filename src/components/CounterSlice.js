import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  data:[]
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    addtocart:(state,actions)=>{
      state.data=actions.payload
    }
  },
})

export const { addtocart } = counterSlice.actions

export default counterSlice.reducer