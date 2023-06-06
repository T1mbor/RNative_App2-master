import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import styles from "./welcome.style";
import { Asset } from "expo-asset";
import { icons, SIZES } from "../../../constants";

const ToDoTabs = ["Терм. виклики", "Нотатки", "Ліхтарик "];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);

  const handleFlashlightPress = () => {
    setIsFlashlightOn(!isFlashlightOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>Вітання, "Ім'я"</Text>
        <Text style={styles.welcomeMessage}>Ніколи не зашкодить переглянути правила безпеки</Text>
      </View>


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
              }}
            >
              {item === "Ліхтарик" ? (
                <MaterialIcons
                  name={isFlashlightOn ? "flash-on" : "flash-off"}
                  size={25}
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
