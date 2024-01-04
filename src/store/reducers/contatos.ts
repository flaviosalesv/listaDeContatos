import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Marquinho',
      email: 'marquinho@Contato.com.br',
      telefone: '(11) 12345-1234'
    },
    {
      id: 2,
      nome: 'Larissa',
      email: 'lari@Contato.com.br',
      telefone: '(11) 12345-1234'
    },
    {
      id: 3,
      nome: 'Ana',
      email: 'aninha@Contato.com.br',
      telefone: '(11) 12345-1234'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((ctt) => ctt.id !== action.payload)
    },

    editar: (state, action: PayloadAction<Contato>) => {
      const indexDatarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDatarefa >= 0) {
        state.itens[indexDatarefa] = action.payload
      }
    },

    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (ctt) => ctt.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
