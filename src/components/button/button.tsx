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
  border: 1px;
  border-radius: 8px;
  border-color: ${(props) => props.theme.primary400};
  color: white;
  background-color: ${(props) => props.theme.primary300};
  font-family: "Pretendard";

  height: 38px;
  padding: 8px 12px;
  font-size: 16px;
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
