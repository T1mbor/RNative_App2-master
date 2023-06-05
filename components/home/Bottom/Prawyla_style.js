import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  poradnik: {
    borderRadius: 8,
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.gray2,
    overflow: "hidden", // Додали overflow для обрізання змісту, якщо контейнер закритий
  },
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.black,
    backgroundColor: COLORS.gray2,
    borderColor: COLORS.black,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    textAlign: "center",
    marginBottom: SIZES.medium,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    gap: SIZES.small,
  },

  titleincards: {
    color: COLORS.white, 
    backgroundColor: COLORS.black
  }
});

export default styles;
