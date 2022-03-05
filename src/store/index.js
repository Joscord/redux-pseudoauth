import { createSlice, configureStore } from "@reduxjs/toolkit";

// Creamos el estado inicial
const initialState = {
    isAuthenticated: false
}

// Creamos una pieza de estado para la autenticación. Recordemos que recibe un objeto de configuración
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;

        }
    }
})

// Configuramos el store con el slice de autenticación
const store = configureStore({
    reducer: authSlice.reducer
});

// Definimos las acciones
export const authActions = authSlice.actions;

export default store;