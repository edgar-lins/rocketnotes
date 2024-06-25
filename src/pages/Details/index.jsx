import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita 
            eum vero possimus ab ducimus eveniet quaerat cumque saepe. Fugiat 
            dolore omnis nobis velit impedit consequatur neque laborum sequi 
            soluta suscipit. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolores magnam officiis praesentium deserunt natus. Veritatis 
            earum itaque, libero nemo sequi deserunt pariatur veniam ducimus 
            delectus exercitationem ut tempore? Quam, adipisci. Lorem ipsum 
            dolor sit, amet consectetur adipisicing elit. Temporibus ut pariatur
            quos quas perferendis mollitia illum magnam voluptas repudiandae 
            inventore omnis cumque porro a accusantium autem maiores obcaecati, 
            eligendi vitae.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}
