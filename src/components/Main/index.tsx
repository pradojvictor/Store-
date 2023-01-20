import * as S from "./styles"

const Main = ({
  title = "React Avançado",
  description = "TypeScript, ReactJS, NextJS e Styled components"
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e react avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frente para uma tela com linhas"
    />
  </S.Wrapper>
)

export default Main
