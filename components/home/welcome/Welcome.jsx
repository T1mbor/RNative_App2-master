import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = (searchTerm, setSearchTerm, handleClick) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Виконати пошук зі searchQuery
    // Ваш код для пошуку на мапі тут
    console.log("Виконати пошук зі значенням:", searchQuery);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Оберіть ваш обласний центр'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: "https://www.google.com/maps/d/u/0/embed?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR" }}
          style={styles.map}
          scrollEnabled={false} // Вимкнути скролінг мапи
        />
      </View>

    </View>
  );
};

export default Welcome;
