import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    // reductor =(state, action)=>{
    //     if(action === 'agregar'){
    //         state
    //     }
    // }
    agregarProducto: (state, action) => {
      const producto = action.payload;
      state.productos.push(producto);
    },
  },
});

export default carritoSlice;
