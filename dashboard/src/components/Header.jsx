import { Typography, Box, useTheme } from "@mui/material";
import { colors } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);
  return (
    <Box>
      <Typography 
        variant="h2"
        color={ uiColors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px"}}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={ uiColors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header;