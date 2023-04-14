// Right now im creating a styled component
// which renders a MUI Component named Box
// with the given flex properties.
const { Box } = require("@mui/icons-material");
const { styled } = require("@mui/system");

// Creating a styled component named FlexBetween which renders the
// Material UI Box component with the given flex properties.
const FlexBetween = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export default FlexBetween;
