import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  nome: string
}

const initialState: FiltroState = {
  nome: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.nome = action.payload.nome
    }
  }
})

export const { alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
