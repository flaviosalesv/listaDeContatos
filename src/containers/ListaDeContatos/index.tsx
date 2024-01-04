import { useSelector } from 'react-redux'

import { Cabecalho, Container, Titulo } from '../../styles'
import Contato from '../../components/FiltroContato/Contato'
import { RootReducer } from '../../store'
import BotaoAdicionar from '../../components/FiltroContato/BotaoAdicionar'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (nome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item: { nome: string }) =>
          item.nome.toLowerCase().search(nome.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeQtdeContatos = (quantidade: number) => {
    let mensagem = ''

    mensagem = `Há ${quantidade} contato(s) cadastrado(s)`

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeQtdeContatos(contatos.length)

  return (
    <>
      <Cabecalho>
        <h1>Agenda de Contatos</h1>
        <BotaoAdicionar />
      </Cabecalho>
      <Container>
        <Titulo as="p">{mensagem}</Titulo>
        <ul>
          {contatos.map(
            (ctt: {
              id: number
              nome: string
              email: string
              telefone: string
            }) => (
              <li key={ctt.id}>
                <Contato
                  id={ctt.id}
                  nome={ctt.nome}
                  email={ctt.email}
                  telefone={ctt.telefone}
                />
              </li>
            )
          )}
        </ul>
      </Container>
    </>
  )
}

export default ListaDeContatos
