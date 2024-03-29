import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { colors } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgessCircle";


const Dashboard = () => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard, Norm" />
        <Box>
          <Button 
            sx={{ 
              backgroundColor: uiColors.blueAccent[700], 
              color: uiColors.grey[100], 
              fontSize: "14px", 
              fontWeight: "bold", 
              padding: "10px 20px",
            }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
        {/* ROW ONE */}
          <Box 
            gridColumn="span 3"
            backgroundColor={uiColors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox 
              title="6,261"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon 
                  sx={{ color: uiColors.greenAccent[600], 
                    fontSize: "26px" 
                  }} 
                />
              }
            />
          </Box>

          <Box 
            gridColumn="span 3"
            backgroundColor={uiColors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox 
              title="122,127"
              subtitle="Sales Obtained"
              progress="0.52"
              increase="+21%"
              icon={
                <PointOfSaleIcon 
                  sx={{ 
                    color: uiColors.greenAccent[600], 
                    fontSize: "26px" 
                  }} 
                />
              }
            />
          </Box>

          <Box 
            gridColumn="span 3"
            backgroundColor={uiColors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox 
              title="887"
              subtitle="New Clients"
              progress="0.34"
              increase="+7%"
              icon={
                <PersonAddIcon 
                  sx={{ 
                    color: uiColors.greenAccent[600], 
                    fontSize: "26px" 
                  }} 
                />
              }
            />
          </Box>

        <Box 
          gridColumn="span 3"
          backgroundColor={uiColors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="587,122"
            subtitle="Traffic Inbound"
            progress="0.62"
            increase="+43%"
            icon={
              <TrafficIcon 
                sx={{ 
                  color: uiColors.greenAccent[600], 
                  fontSize: "26px" 
                }} 
              />
            }
          />
        </Box>
          {/* ROW TWO */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={uiColors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography 
                  variant="h5" 
                  fontWeight="600" 
                  color={uiColors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  color={uiColors.greenAccent[500]}
                >
                  $23,123,32
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlinedIcon 
                    sx={{ 
                      fontSize: "26px", 
                      color: uiColors.greenAccent[500] 
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            {/* Line Chart */}
            <Box height="250px" mt="-20px">
              <LineChart isDashboard={true}/>
            </Box>
                    
          </Box>

          {/* Transactions */}
          <Box 
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={uiColors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${uiColors.primary[500]}`}
              color={uiColors.grey[100]}
              p="15px"
            >
              <Typography 
                variant="h5" 
                fontWeight="600" 
                color={uiColors.grey[100]}
              >
                Recent Transactions
              </Typography>
            </Box>
              {mockTransactions.map((transaction, i) => (
                <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${uiColors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography 
                      variant="h5" 
                      fontWeight="600" 
                      color={uiColors.greenAccent[500]}
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography 
                      color={uiColors.grey[100]}
                    >
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={uiColors.grey[100]}>
                    {transaction.date}
                  </Box>
                  <Box 
                    backgroundColor={uiColors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    {transaction.cost}
                  </Box>
                </Box>
              ))}
          </Box>
          {/* ROW THREE */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={uiColors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
                Campaign
            </Typography>
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={uiColors.greenAccent[500]}
                sx={{
                  mt: "15px"
                }}
              >
                $78,344 revenue generated
              </Typography>
              <Typography variant="h5" fontWeight="600">
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={uiColors.primary[400]}
          >
            <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px"}}>
                Sales Quantity
            </Typography>
            <Box 
              height="250px"
              mt="-20px"
            >
              <BarChart isDashboard={true}/>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={uiColors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                Geography Based Traffic
            </Typography>
            <Box 
              height="200px"
            >
              <GeographyChart isDashboard={true}/>
            </Box>
          </Box>
          {/* Last Item */}
      </Box>
    </Box>  
  )
}

export default Dashboard;