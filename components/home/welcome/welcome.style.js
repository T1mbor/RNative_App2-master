import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";





const getTabBackgroundColor = (item, isFlashlightOn) => {
  if (item === "Ліхтарик") {
    return isFlashlightOn ? COLORS.yellow : COLORS.white;
  }
  switch (item) {
    case "Терм. виклики":
      return COLORS.beruz;
    case "Нотатки":
      return COLORS.yellow;
    default:
      return COLORS.white;
  }
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: SIZES.xLarge,
    alignItems: "center",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    borderColor: COLORS.black,
    borderWidth: 2,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.small,
    alignItems: "center",
  },
  tab: (item, isFlashlightOn) => ({
    paddingVertical: SIZES.xxLarge / 2,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: item ? COLORS.secondary : COLORS.black,
    backgroundColor: getTabBackgroundColor(item, isFlashlightOn),
  }),
  tabText: (item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.black,
    textShadowColor: COLORS.white,
    textShadowRadius: 2,
  }),
  flashlight: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default styles;
