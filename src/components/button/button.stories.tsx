import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      name: "레이블",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "레이블",
    size: "md",
    disabled: false,
    danger: false,
    loading: false,
  },
};
