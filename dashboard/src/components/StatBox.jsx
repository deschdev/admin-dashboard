import { Box, Typography, useTheme } from "@mui/material";
import { colors } from "../theme";
import ProgressCircle from "./ProgessCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);
  
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        {icon}
        <Typography variant="h4" fontWeight="bold" sx={{ color: uiColors.grey[100] }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={progress} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{
          color: uiColors.greenAccent[500]
        }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" fontStyle="italic" sx={{ color: uiColors.greenAccent[600] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox;