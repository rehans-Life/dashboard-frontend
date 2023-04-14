// Right now im creating a styled component
// which renders a MUI Component named Box
// with the given flex properties.
const { Box } = require("@mui/icons-material");
const { styled } = require("@mui/system");

const FlexBetween = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export default FlexBetween;
