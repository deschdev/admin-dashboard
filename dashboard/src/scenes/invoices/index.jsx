import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colors } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone Number", flex: 1, },
    { field: "email", headerName: "Email", flex: 1, },
    { field: "cost", headerName: "Cost", flex: 1, 
    renderCell: (params) => (
      <Typography color={ uiColors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    )},
    { field: "date", headerName: "Date", flex: 1, },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="Invoice Balances List" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        // Overriding the Material UI defaults
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: uiColors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: uiColors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: uiColors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: uiColors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${uiColors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={ mockDataInvoices }
          columns={ columns }
        />
      </Box>
    </Box>
  )
}

export default Invoices;