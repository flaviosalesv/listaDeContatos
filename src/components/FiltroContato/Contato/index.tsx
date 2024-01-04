import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../../store/reducers/contatos'
import ContatoClass from '../../../models/Contato'
import { Botao, BotaoSalvar, Container } from '../../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <>
      <Container>
        <S.BarraAcoes />
        <S.Titulo
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <S.DadosContato>
          <S.Dados
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />

          <S.Dados
            disabled={!estaEditando}
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          />

          <div>
            {estaEditando ? (
              <>
                <BotaoSalvar
                  onClick={() => {
                    dispatch(
                      editar({
                        nome: nome,
                        email: email,
                        telefone: telefone,
                        id: id
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </BotaoSalvar>
                <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                  Cancelar
                </S.BotaoCancelarRemover>
              </>
            ) : (
              <>
                <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                  Remover
                </S.BotaoCancelarRemover>
              </>
            )}
          </div>
        </S.DadosContato>
      </Container>
    </>
  )
}

export default Contato
