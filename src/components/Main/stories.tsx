import { withKnobs, text } from "@storybook/addon-knobs"
import Main from "."

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
}

export const basic = () => (
  <Main
    title={text("title", "React Avançado")}
    description={text(
      "description",
      "TypeScript, ReactJS, NextJS e Styled components"
    )}
  />
)
