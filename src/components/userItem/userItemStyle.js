import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText"; 
import { InputLabel, MenuItem } from "@mui/material";

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export const TableCellWrapper = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-direction: row !important;
  & > svg {
    margin-right: 6px;
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    & > svg {
      stroke: #e1655a;

      & > path {
        stroke: #e1655a;
      }
    }
  }
`; 

export const CustomMenuItem = styled(ListItemText)`
  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 126px;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-right: 8px;
`;

export const ImgPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CustomInputLabel = styled(InputLabel)`
  top: -7px !important;
`;

export const RoleMenuItem = styled(MenuItem)`
  background-color: ${(p) => (p.checked ? "#f7f5fa !important" : "")};
  color: ${(p) => p.checked && "#6E00FF !important"};
`;

export const InboxesMenuItem = styled(MenuItem)`
  background-color: ${(p) => (p.checked ? "#f7f5fa !important" : "")};
  padding: 0 !important;
`;
