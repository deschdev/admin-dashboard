import { Box, useTheme } from "@mui/material";
import { colors } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40"}) => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${uiColors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${uiColors.blueAccent[500]} ${angle}deg 360deg),
            ${uiColors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default ProgressCircle;