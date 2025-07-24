import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import Header from "../../components/Header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const UnPartners = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
          <Box sx={{ display: "flex", m: "10px", gap: "10px" }}>
            <Button onClick={handleOpen} variant="contained" color="info">
              View
            </Button>

            <Button variant="contained" color="success">
              Verify
            </Button>
            <Button variant="contained" color="error">
              Reject
            </Button>

            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    partners
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    This is a modal to view partner details. You can add more
                    information here about the partner, such as their address,
                    business type, or any other relevant details.
                  </Typography>
                </Box>
              </Modal>
            </div>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="PARTNERS"
        subtitle="Managing the Partners and List of Partners"
      />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            color: "#fff",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid black",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "1px solid black",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.orangeYellowAccent[500]} !important`,
            color: "#000",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[800],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid black",
            backgroundColor: colors.orangeYellowAccent[500],
            color: "#000",
            fontWeight: "bold",
          },
          "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-input, & .MuiTablePagination-actions":
            {
              color: "#000",
            },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: `${colors.primary[500]} !important`,
            color: "#fff",
          },

          "& .MuiSvgIcon-root": {
            color: "#000 !important",
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default UnPartners;
