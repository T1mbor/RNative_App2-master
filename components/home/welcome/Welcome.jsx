import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style"; 
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Терм. виклики", "Найближче укриття", "Ліхтарик", "Нотатки"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  

  return (
    <View>
      <View style={styles.container}>
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
          data={jobTypes}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(item)}
              onPress={() => {
                
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
    </View>
  );
};

export default Welcome;
