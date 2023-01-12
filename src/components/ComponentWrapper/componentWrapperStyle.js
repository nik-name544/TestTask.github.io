import styled from "styled-components";

export const ComponentWrapper = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid #e9ebf2;
  border: ${(p) => p.withoutBorder && "none"};
`;
