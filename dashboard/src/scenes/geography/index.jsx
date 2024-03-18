import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { colors } from "../../theme";


const Geography = () => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${uiColors.grey[100]}`} style={{marginTop: "20px"}}>
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;