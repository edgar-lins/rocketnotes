import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/edgar-lins.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Edgar Lins</strong>
                </div>
            </Profile>
        </Container>
    )
}