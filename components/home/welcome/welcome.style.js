import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const getTabBackgroundColor = (item) => {
  switch (item) {
    case "Ліхтарик":
      return COLORS.yellow;
    case "Терм. виклики":
      return COLORS.green;
    case "Найближче укриття":
      return COLORS.orange;
    default:
      return COLORS.white;
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    borderColor: COLORS.black, // Колір обводки
    borderWidth: 2, // Товщина обводки
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
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.small,
    alignItems: "center"
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.xxLarge / 2,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    backgroundColor: getTabBackgroundColor(item),
  }),
  

  tabText: (activeJobType, item) => ({
    fontFamily: FONT.bold,
    color: activeJobType === item ? COLORS.secondary : COLORS.white,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  }),  
  
});

export default styles;
