import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    left: 14.5px;
    top: 21px;
  }
`;

export const SearchInput = styled.input`
  margin: 16px 0 24px;
  width: 256px;
  height: 32px;
  border: 1px solid #d1d4de;
  border-radius: 4px;
  padding: 6px 12px 6px 40px;
  &::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6c6f85;
  }
`;
