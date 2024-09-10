import styled, { ThemeProvider } from "styled-components";
import theme from "../Theme";

interface ButtonProps {
  children: string;
  size?: "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  icon?: boolean;
  danger?: boolean;
}

const StyledButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.primary400};
  border-radius: 8px;
  padding: 8px 12px;

  color: white;
  background-color: ${(props) => props.theme.primary300};

  box-shadow: 0 1px 4px rgba(17, 21, 24, 0.2);

  line-height: 20px;

  font-family: "Pretendard";
  font-size: 16px;

  &:hover {
    border-color: ${(props) => props.theme.primary600};
    background-color: ${(props) => props.theme.primary500};
    box-shadow: 0 2px 5px rgba(17, 21, 24, 0.2);
    cursor: pointer;
  }

  &:focus-visible {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    outline: ${(props) => props.theme.primaryFocus} solid 2px;
  }

  &:active {
    border-color: ${(props) => props.theme.primary700};
    background-color: ${(props) => props.theme.primary600};
    box-shadow: 0 1px 2px rgba(17, 21, 24, 0.2);
  }

  &:disabled {
    border-color: ${(props) => props.theme.gray500};
    background-color: ${(props) => props.theme.gray400};
    cursor: not-allowed;
  }
`;

export default function Button({ children }: ButtonProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledButton>{children}</StyledButton>
      </ThemeProvider>
    </>
  );
}
