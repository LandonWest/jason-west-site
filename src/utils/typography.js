import Typography from "typography";
// import bootstrapTheme from "typography-theme-bootstrap";
// import funstonTheme from "typography-theme-funston";
import sutroTheme from "typography-theme-sutro";

sutroTheme.ul = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};
// const typography = new Typography(bootstrapTheme);
const typography = new Typography(sutroTheme);

export default typography;
