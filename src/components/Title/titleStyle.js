import styled from "styled-components";

export const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${(p) => (p.isBold ? 600 : 500)};
  font-size: 16px;
  line-height: 24px;
  color: #1f2936;

  padding: ${(p) => (p.isBig ? "32px  0 0" : "18px  0")};
`;
