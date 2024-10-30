import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import theme from "../Theme";
import Spinner from "../spinner/spinner";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  icon?: boolean;
  danger?: boolean;
}

function getColor(
  props: Required<ButtonProps> & { theme: DefaultTheme },
  number: number
) {
  if (props.danger) {
    return props.theme[`danger${number}`];
  }
  return props.theme[`primary${number}`];
}

function getColorStr(
  props: Required<ButtonProps> & { theme: DefaultTheme },
  string: string
) {
  if (props.danger) {
    return props.theme[`danger${string}`];
  }
  return props.theme[`primary${string}`];
}

const StyledButton = styled.button<Required<ButtonProps>>`
  display: flex;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getColor(props, 400)};
  border-radius: 8px;
  padding: ${(props) => (props.size === "md" ? "8px 12px" : "12px 16px")};

  color: white;
  background-color: ${(props) => getColor(props, 300)};

  box-shadow: 0 1px 4px rgba(17, 21, 24, 0.2);

  line-height: 20px;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: ${(props) => (props.size === "md" ? "16px" : "24px")};

  &:hover {
    border-color: ${(props) => getColor(props, 600)};
    background-color: ${(props) => getColor(props, 500)};
    box-shadow: 0 2px 5px rgba(17, 21, 24, 0.2);
    cursor: pointer;
  }

  &:focus-visible {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    outline: ${(props) => getColorStr(props, "Focus")} solid 2px;
  }

  &:active {
    border-color: ${(props) => getColor(props, 700)};
    background-color: ${(props) => getColor(props, 600)};
    box-shadow: 0 1px 2px rgba(17, 21, 24, 0.2);
  }

  &:disabled {
    border-color: ${(props) =>
      props.danger ? props.theme.danger300 : props.theme.gray500};
    background-color: ${(props) =>
      props.danger ? props.theme.danger200 : props.theme.gray400};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const Label = styled.span<{ loading: boolean }>`
  visibility: ${(props) => (props.loading === true ? "hidden" : "")};
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  inset: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({
  children,
  size = "md",
  loading = false,
  disabled = false,
  icon = false,
  danger = false,
  ...props
}: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        size={size}
        loading={loading}
        disabled={disabled}
        icon={icon}
        danger={danger}
        {...props}
      >
        <Label loading={loading}>{children}</Label>
        {loading && (
          <SpinnerWrapper>
            <Spinner size={size} />
          </SpinnerWrapper>
        )}
      </StyledButton>
    </ThemeProvider>
  );
}
