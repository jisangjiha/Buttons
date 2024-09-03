import styled from "styled-components";

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
  border-color: #28a5ff;
  color: white;
  background-color: #58b5fe;
  font-family: "Pretendard";

  height: 38px;
  padding: 8px 12px;
  font-size: 16px;
`;

export default function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
