import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Container, Cabecalho, Botao } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Cabecalho>
        <h1>Novo Contato</h1>
      </Cabecalho>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Seu e-mail"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Seu telefone"
        />

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <Botao onClick={() => navigate('/')}>Voltar a lista de contatos</Botao>
      </Form>
    </Container>
  )
}

export default Formulario
