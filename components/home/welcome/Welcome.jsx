import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { Camera } from "expo-camera";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const ToDoTabs = ["Терм. виклики", "Найближче укриття", "Ліхтарик", "Нотатки"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleFlashlightPress = () => {
    setIsFlashlightOn(!isFlashlightOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>Вітання, "Ім'я"</Text>
        <Text style={styles.welcomeMessage}>Ніколи не зашкодить переглянути правила безпеки</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Оберіть вашу область'
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

                }
              }}
            >
              <Text style={styles.tabText(item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.xSmall }}
          horizontal
        />
      </View>

      {isFlashlightOn && hasCameraPermission && (
        <Camera
          style={styles.flashlight}
          type={Camera.Constants.Type.back}
          flashMode={
            isFlashlightOn
              ? Camera.Constants.FlashMode.torch
              : Camera.Constants.FlashMode.off
          }
        />
      )}
    </View>
  );
};

export default Welcome;
