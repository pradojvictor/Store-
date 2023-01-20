import { Story, Meta } from "@storybook/react"
import Main from "."

export default {
  title: "Main",
  component: Main,
  args: {
    title: "React Avançado",
    description: "TypeScript, ReactJS, NextJS e Styled components"
  }
} as Meta

export const basic: Story = (args) => <Main {...args} />
