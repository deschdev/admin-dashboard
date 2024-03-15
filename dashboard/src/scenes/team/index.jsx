import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colors } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1, },
    { field: "email", headerName: "Email", flex: 1, },
    { field: "access", headerName: "Access Level", flex: 1, renderCell: ({ row: { access }}) => {
      return (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin" 
            ? uiColors.greenAccent[600]
            : uiColors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {/* Different Icons for different levels of access */}
          { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
          { access === "manager" && <SecurityOutlinedIcon /> }
          { access === "user" && <LockOpenOutlinedIcon /> }
          <Typography color={uiColors.grey[100]} sx={{ ml: "5px" }}>
            { access }
          </Typography>
        </Box>
      )
    } },
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Team Members" />
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
          rows={ mockDataTeam }
          columns={ columns }
        />
      </Box>
    </Box>
  )
}

export default Team;