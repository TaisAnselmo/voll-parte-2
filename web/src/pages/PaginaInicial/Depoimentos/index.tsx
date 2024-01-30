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
            <Texto>
            O Ortopedista Dr. Silva demonstrou profundo conhecimento em sua área, 
            explicando de maneira clara e detalhada sobre minha condição
             ortopédica. Sua habilidade em transmitir informações complexas
              de forma compreensível foi impressionante, proporcionando-me 
              uma compreensão abrangente do meu problema.
            </Texto>
            <Subtitulo>Gabriel, 26 anos, Olinda/PE.</Subtitulo>
            <Linha />
            <Texto>Minha experiência com o Dr. Santos, infectologista, 
            foi excepcional e digna de nota. Desde o momento em que 
            entrei em seu consultório, percebi um ambiente acolhedor e 
            uma equipe atenciosa. O Dr. Santos, com seu sorriso 
            amigável, transmitiu uma sensação imediata de confiança.
            </Texto>
            <Subtitulo>Taís, 22 anos, Recife/PE.</Subtitulo>
            <Linha />
            <Texto>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Texto>
            <Subtitulo>Miguel, 17 anos, Olinda/PE.</Subtitulo>
            <Linha />
        </Container>
    )
}