import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const uiColors = colors(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded style={{marginTop: "20px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Two
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Three
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Four
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Five
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Six
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Seven
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Eight
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={uiColors.greenAccent[500]} variant="h5">
            An Important Question Nine 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography colors={uiColors.greenAccent[500]} variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam architecto expedita distinctio soluta iusto, vel eveniet maiores fugiat deleniti?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;

