import * as S from "./styles"

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e react avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frente para uma tela com linhas"
    />
  </S.Wrapper>
)

export default Main
