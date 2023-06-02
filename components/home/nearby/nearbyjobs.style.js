import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({


  poradnik: {
    borderRadius: 8,
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.gray2,
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
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    gap: SIZES.small,
  },
  
});

export default styles;

