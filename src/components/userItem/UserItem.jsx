import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomSelect from "./components/Select";
import { InboxIcon } from "../../icons/InboxIcon";
import { RoleIcon } from "../../icons/RoleIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import {
  Img,
  TableCellWrapper,
  NameWrapper,
  ImgPlaceholder,
  DeleteWrapper,
} from "./userItemStyle";
import { UserIcon } from "../../icons/UserIcon";

const inboxSelectItems = [
  "Demo Clerk",
  "Long inbox title 20 Long inbox title 20...",
  "Work inbox",
];

const roleSelectItems = ["Admin", "Agent", "Manager", "Member"];

const UserItem = ({ userData, handleClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: 360,
                height: 36,
                background: "#FCFCFD",
                borderBottom: "1px solid #E9EBF2",
                borderRight: "1px solid #E9EBF2",
                borderRadius: "4px 0px 0px 0px",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: 224,
                height: 36,
                background: "#FCFCFD",
                borderBottom: "1px solid #E9EBF2",
                borderRight: "1px solid #E9EBF2",
                borderRadius: "4px 0px 0px 0px",
              }}
            >
              <TableCellWrapper>
                <InboxIcon /> Inboxes
              </TableCellWrapper>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: 224,
                height: 36,
                background: "#FCFCFD",
                borderBottom: "1px solid #E9EBF2",
                borderRight: "1px solid #E9EBF2",
                borderRadius: "4px 0px 0px 0px",
              }}
            >
              <TableCellWrapper>
                <RoleIcon /> Role
              </TableCellWrapper>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: 88,
                height: 36,
                background: "#FCFCFD",
                borderBottom: "1px solid #E9EBF2",
                borderRight: "1px solid #E9EBF2",
                borderRadius: "4px 0px 0px 0px",
              }}
            >
              <TableCellWrapper>
                <SettingsIcon /> Action
              </TableCellWrapper>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((value, i) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={`${value.firstName}-${i}`}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    width: 360,
                    height: 36,
                    borderBottom: "1px solid #E9EBF2 !important",
                    borderRight: "1px solid #E9EBF2 !important",
                    borderRadius: "4px 0px 0px 0px",
                    padding: 0,
                  }}
                >
                  <NameWrapper>
                    {value.imgSrc ? (
                      <Img
                        src={
                          value.imgSrc[0] === "/"
                            ? process.env.PUBLIC_URL + value.imgSrc
                            : value.imgSrc
                        }
                        alt="user"
                      />
                    ) : (
                      <ImgPlaceholder>
                        <UserIcon />
                      </ImgPlaceholder>
                    )}
                    {value.firstName + " " + value.lastName}
                  </NameWrapper>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    width: 224,
                    height: 36,
                    borderBottom: "1px solid #E9EBF2 !important",
                    borderRight: "1px solid #E9EBF2 !important",
                    borderRadius: "4px 0px 0px 0px",
                    // padding: 0,
                    padding: "10px 16px",
                    textAlign: "initial",
                  }}
                >
                  <CustomSelect
                    selectItems={inboxSelectItems}
                    placeholderText="Not assigned"
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    width: 224,
                    height: 36,
                    borderBottom: "1px solid #E9EBF2 !important",
                    borderRight: "1px solid #E9EBF2 !important",
                    borderRadius: "4px 0px 0px 0px",
                    padding: "10px 16px",
                    textAlign: "initial",
                  }}
                >
                  <CustomSelect
                    selectItems={roleSelectItems}
                    placeholderText="Placeholder text"
                    isRole
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    width: 88,
                    height: 36,
                    borderBottom: "1px solid #E9EBF2 !important",
                    borderRight: "1px solid #E9EBF2 !important",
                    borderRadius: "4px 0px 0px 0px",
                    padding: 0,
                  }}
                >
                  <DeleteWrapper onClick={() => handleClick(value.label)}>
                    <DeleteIcon />
                  </DeleteWrapper>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserItem;
