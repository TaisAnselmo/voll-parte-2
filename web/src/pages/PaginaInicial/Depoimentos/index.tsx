import styled from "styled-components"

const Container = styled.section`
width: 50%;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza)
`

export default function Depoimentos() {
    return (
        <Container>
            <Titulo>Depoimentos</Titulo>
            <Texto>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Texto>
            <Subtitulo>Gabriel, 26 anos, Olinda/PE.</Subtitulo>
            <Linha />
            <Texto>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Texto>
            <Subtitulo>Taís, 22 anos, Recife/PE.</Subtitulo>
            <Linha />
            <Texto>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Texto>
            <Subtitulo>Miguel, 17 anos, Olinda/PE.</Subtitulo>
            <Linha />
        </Container>
    )
}