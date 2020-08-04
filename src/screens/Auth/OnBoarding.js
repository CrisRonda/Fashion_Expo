import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Slide from "./components/Slide";
import {
  width,
  SLIDE_HEIGHT,
  BORDER_RADIUS_ONBOARDING,
} from "../../../assets/Dimensions";
import {
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import SubSlide from "./components/SubSlide";
import Dot from "./components/Dot";

const slides = [
  {
    title: "Relajado",
    subtitle: "Tu mejor outfit ",
    description: "Encuentralo con nosotros",
    color: "#bfeaf5",
    picture: require("../../../assets/img/1.png"),
  },
  {
    title: "Divertido",
    subtitle: "Búscalo y póntelo",
    description: "Busca en nuestro catálogo",
    color: "#beecc4",
    picture: require("../../../assets/img/2.png"),
  },
  {
    title: "Excéntrico",
    subtitle: "Diseños actuales",
    description: "Modelos para mujeres, hombres, niñas y niños",
    color: "#ffe4d9",
    picture: require("../../../assets/img/1.png"),
  },
  {
    title: "A la moda",
    subtitle: "Tu estilo, tu manera",
    description: "Tenemos varios colores y tallas",
    color: "#ffdddd",
    picture: require("../../../assets/img/2.png"),
  },
];
export default (props) => {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({ color }) => color),
  });
  const handlePressButtons = (index) => {
    if (scroll) {
      scroll.current
        .getNode()
        .scrollTo({ x: width * (index + 1), animated: true });
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="normal"
          showsHorizontalScrollIndicator={false}
          {...scrollHandler}
        >
          {slides.map((slide, index) => (
            <Slide key={index} left={!(index % 2)} {...slide} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Dot
              key={index}
              currentIndex={divide(x, width)}
              {...{ index, x }}
            />
          ))}
        </View>
        <Animated.View
          style={[
            styles.contentFooter,
            { width: width * slides.length },
            { transform: [{ translateX: multiply(x, -1) }] },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              onPress={() => handlePressButtons(index)}
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description, x }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS_ONBOARDING,
    overflow: "hidden",
  },
  footer: {
    flex: 1,
  },
  contentFooter: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS_ONBOARDING,
  },
  pagination: {
    flexDirection: "row",
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    height: BORDER_RADIUS_ONBOARDING,
    zIndex: 1,
  },
});
