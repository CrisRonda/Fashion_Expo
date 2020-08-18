const { Dimensions } = require("react-native");

export const { width, height } = Dimensions.get("window");
export const { height: screenHeight } = Dimensions.get("screen");
export const SLIDE_HEIGHT = 0.72 * height;
