import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const ToDoTabs = ["Терм. виклики", "Нотатки", "Ліхтарик"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);

  const handleFlashlightPress = () => {
    setIsFlashlightOn(!isFlashlightOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <WebView 
          source={{ uri: "https://www.google.com/maps/d/u/0/embed?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR" }}
          style={styles.map}
          scrollEnabled={false} // Вимкнути скролінг мапи
        />
      </View>
      <StatusBar style="auto" />

      <View style={styles.tabsContainer}>
        <FlatList
          data={ToDoTabs}
          showsHorizontalScrollIndicator={false}  
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(item, isFlashlightOn)}
              onPress={() => {
                if (item === "Ліхтарик") {
                  handleFlashlightPress();
                }
                if (item === "Нотатки") {
                  // Обробка вкладки з нотатками
                }
                if (item === "Терм. виклики") {
                  // Обробка вкладки з терміновими викликами
                }
              }}
            >
              {item === "Ліхтарик" ? (
                <MaterialIcons
                  name={isFlashlightOn ? "flash-on" : "flash-off"}
                  size={24} 
                  color={isFlashlightOn ? "white" : "black"}
                />
              ) : (
                <Text style={styles.tabText(item)}>{item}</Text>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
