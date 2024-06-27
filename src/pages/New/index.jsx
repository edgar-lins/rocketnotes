import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título" />

                    <Textarea placeholder="Observações"/>
                </Form>
            </main>
        </Container>
    )
}