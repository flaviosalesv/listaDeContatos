import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

import { Botao } from '../../../styles'

export const Titulo = styled.textarea`
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 18px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Dados = styled.textarea`
  width: 300px;
  font-size: 14px;
  margin-left: 8px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: transparent;
  border: 2px solid ${variaveis.vermelho};
  color: ${variaveis.vermelho};
`

export const DadosContato = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666667;
  padding: 5px 10px;
`
