import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Linking } from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  
      // Відкриття посилання на YouTube відео у веб-браузері
  const handleCardPress = (item) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${item.videoId}`);
  };

  const videoData = [
    
    {
      videoId: "D7uuWeAqfmE",
      title: "Техніка безпеки під час воєнного стану",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/bezpeka.png"),
    },
    
    {
      videoId: "HEirZI8bQCo",
      title: "Правила поведінки під час повітряної тривоги",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/mapa_tryvoga.png"),
    },
    {
      videoId: "XAs_uq3T8Ps",
      title: "Інтерактивний урок із мінної безпеки",
       image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/minna_bezp.png"),
    },
    {
      videoId: "tnCoOfKNpms",
      title: "Аптечка: що важливо взяти з собою у сховище",
       image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/aptechka.png"),
    },
    {
      videoId: "hRJPyIh_3gs",
      title: "єВорог: Побачили ворожу техніку чи солдатів?",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/voroji_sold.png"),
    },
    {
      videoId: "3Be49B60ozQ",
      title: "Зупинка кровотечі при пораненні голови, шиї, кінцівок.",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/krovotecha.png"),
    },
    
    {
      videoId: "CHyRYg7ulLQ",
      title: "Як не нашкодити своїм: правила поведінки в мережі",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/cyber_bezpeka.png"),
    },
    {
      videoId: "6mOmRUe1OqU",
      title: "Безпека дорожнього руху під час війни",
      image: require("C:/Users/Livch/Desktop/RNative_App2-master/assets/avto_ruh.png"),
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