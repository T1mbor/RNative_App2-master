import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const videoData = [
    {
      videoId: "mJ3bGvy0WAY",
      title: "Як правильно накладувати турнікет в домашніх умовах",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/123.jpg"),
    },
    {
      videoId: "GMx8OsTDHfM",
      title: "Video 2",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/asd.jpg"),
    },
    {
      videoId: "cFvh7qM6LdA",
      title: "Video 3",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/hqdefault.jpg"),
    },
    {
      videoId: "Efq7upFiR3Y",
      title: "Video 4",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/asd.21.jpg"),
    },
    {
      videoId: "Efq72pFiR0Y",
      title: "Video 5",
      // image: require("C:\Users\Livch\Desktop\RNative_App2-master\assets\images\icon.png"),
    },
    {
      videoId: "Ef17upFiR0Y",
      title: "Video 6",
      // image: require("C:\Users\Livch\Desktop\RNative_App2-master\assets\images\icon.png"),
    },
    {
      videoId: "Efq7up4iR0Y",
      title: "Video 7",
      // image: require("C:\Users\Livch\Desktop\RNative_App2-master\assets\images\icon.png"),
    },
  ];

  const renderVideoItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.videoCard}
        onPress={() => handleCardPress(item)}
      >
        {item.image && <Image source={item.image} style={styles.videoImage} />}
        <View style={styles.videoDetailsContainer}>
          <Text style={styles.videoTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Корисні відео-інструкції та порадники</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.blackk} />
        ) : (
          <FlatList
            data={videoData}
            keyExtractor={(item) => item.videoId}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: SIZES.medium }}
            renderItem={renderVideoItem}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;