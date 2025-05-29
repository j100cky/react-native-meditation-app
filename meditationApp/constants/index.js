import icons from "./icons";
import { COLORS, FONT, SIZES, SHADOWS } from "./theme";

export {  icons, COLORS, FONT, SIZES, SHADOWS };

// the purpose of exporting everything again in constants/index.js, 
// even though icons.js and theme.js already export their own contents, 
// is to create a single, centralized entry point for all constants.

// constants/index.js serves as an abstraction layer. If the internal 
// file structure ever changes (e.g., you move icons.js to another folder), 
// only index.js needs to be updated — not every file that uses icons.