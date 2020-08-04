import React, { useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import Slide from "./components/Slide";
import { width, SLIDE_HEIGHT } from "../../../assets/Dimensions";
import {
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import SubSlide from "./components/SubSlide";
import Dot from "./components/Dot";
import theme from "../../components/theme";
import { useNavigation } from "@react-navigation/native";

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
    description: "Modelos para toda la familia",
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
  const { navigate } = useNavigation();
  const { scrollHandler, x } = useScrollHandler();
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({ color }) => color),
  });
  const handlePressButtons = (index, last) => {
    if (last) {
      navigate("Welcome");
    } else {
      scroll.current
        ?.getNode()
        .scrollTo({ x: width * (index + 1), animated: true });
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image source={picture} style={styles.picture} />
            </Animated.View>
          );
        })}
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
          {slides.map(({ subtitle, description }, index) => {
            const last = index === slides.length - 1;
            return (
              <SubSlide
                onPress={() => handlePressButtons(index, last)}
                key={index}
                {...{ subtitle, description, last }}
              />
            );
          })}
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
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  footer: {
    flex: 1,
  },
  contentFooter: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    flexDirection: "row",
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    height: theme.borderRadii.xl,
    zIndex: 1,
  },
  underlay: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    zIndex: -999,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
