'use client';
import styled from '@emotion/styled';

export default function Button() {
  const StyledButton = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;

  return <StyledButton>This my button component.</StyledButton>;
}
