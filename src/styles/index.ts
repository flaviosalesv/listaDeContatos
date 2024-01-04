import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Cabecalho = styled.div`
  display: flex;
  justify-content: center;
  heigth: 80px;
  background-color: #666667;
  color: #f2f2f2;
`
export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 900px;
  max-width: 100%;
  background-color: #f2f2f2;
  color: #666667;
`

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #666667;
`

export const Campo = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.azulEscuro};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  // background-color: ${variaveis.azulEscuro};
  background-color: transparent;
  border: 2px solid ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: transparent;
  border: 2px solid ${variaveis.verde};
  color: ${variaveis.verde};
`

export default EstiloGlobal
