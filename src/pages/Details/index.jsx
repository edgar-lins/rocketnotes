import { Container } from './styles';

import { Button } from '../../components/Button';

export function Details() {
  
  return (
    <Container>
      <h1>Hello, world!</h1>
      <span>Edgar Lins</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Deletar" />
    </Container>
  )
}
