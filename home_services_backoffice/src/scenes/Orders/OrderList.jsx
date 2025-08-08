import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getAllOrders, assignOrderToPartner } from "../../api/Order";
import { getPartnersByCategoryId } from "../../api/Partner"; // <-- Import new API

const OrderList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [partners, setPartners] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        console.log("Orders fetched successfully:", data);
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };
    fetchOrders();
  }, []);

  const handleView = (order) => {
    alert(`Viewing order ID: ${order.id}`);
  };

  const handleAssign = async (order) => {
    try {
      console.log(order.categoryId)
      const partnerList = await getPartnersByCategoryId(order.categoryId);
      console.log("Partners fetched successfully:", partnerList);
      setSelectedOrder(order);
      setPartners(partnerList);
      setOpenDialog(true);
    } catch (err) {
      console.error("Failed to fetch partners:", err);
      alert("Failed to load partners.");
    }
  };

  const handlePartnerSelect = async (partnerId) => {
    try {
      await assignOrderToPartner(partnerId,selectedOrder.id);
      alert("Order assigned successfully.");
      setOpenDialog(false);
      const updatedOrders = await getAllOrders();
      setOrders(updatedOrders);
    } catch (err) {
      console.error("Assignment failed:", err);
      alert("Failed to assign order.");
    }
  };

  const columns = [
    { field: "id", headerName: "Order ID", flex: 1 },
    { field: "service", headerName: "Service", flex: 1 },
    { field: "serviceDate", headerName: "Service Date", flex: 1 },
    { field: "serviceTime", headerName: "Service Time", flex: 1 },
    { field: "orderStatus", headerName: "Status", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button variant="contained" color="info" onClick={() => handleView(params.row)}>
            View
          </Button>
          <Button variant="contained" color="success" onClick={() => handleAssign(params.row)}>
            Assign
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="List of all customer orders" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none", color: "#fff" },
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
            { color: "#000" },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: `${colors.primary[500]} !important`,
            color: "#fff",
          },
          "& .MuiSvgIcon-root": { color: "#000 !important" },
        }}
      >
        <DataGrid rows={orders} columns={columns} pageSize={100} />
      </Box>

      {/* Assign Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Select a Partner</DialogTitle>
        <DialogContent>
          <List>
            {partners.map((partner) => (
              <ListItem
                button
                key={partner.id}
                onClick={() => handlePartnerSelect(partner.id)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <ListItemText
                  primary={`${partner.firstName} ${partner.lastName}`}
                  secondary={
                    <>
                      <div>Email: {partner.email}</div>
                      <div>Phone: {partner.phoneNumber}</div>
                      <div>Rating: {partner.rating ?? "N/A"}</div>
                      <div>Category: {partner.category?.name}</div>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderList;
