import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";





const getTabBackgroundColor = (item, isFlashlightOn) => {
  if (item === "Ліхтарик") {
    return isFlashlightOn ? COLORS.yellow : COLORS.white;
  }
  switch (item) {
    case "Терм. виклики":
      return COLORS.green;
    case "Найближче укриття":
      return COLORS.orange;
    case "Нотатки":
      return COLORS.beruz;
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
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
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
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 70,
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "70%",
    height: "65%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.small,
    alignItems: "center",
  },
  tab: (item, isFlashlightOn) => ({
    paddingVertical: SIZES.xxLarge / 2,
    paddingHorizontal: SIZES.small,
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
