import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";



const styles = StyleSheet.create({


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
  serachButton: {
    borderRadius: 8,
  },


  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
  },

  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    marginTop: 15,
    flex: 1,
    width: 400,
    height: 400,
  },  

 
 
});

export default styles;
