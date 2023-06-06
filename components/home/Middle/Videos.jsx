import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Linking } from "react-native";
import styles from "./Video_style";
import { COLORS, SIZES } from "../../../constants";

const Videos = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  // Відкриття посилання на YouTube відео у веб-браузері
  const openYouTubeVideo = (videoId) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
  };

  const toggleContainer = () => {
    setIsContainerOpen(!isContainerOpen);
  };
  
  
  const videoData = [
    {
      videoId: "D7uuWeAqfmE",
      title: "Техніка безпеки під час воєнного стану",
      image: require("../../../assets/bezpeka.png"),
    },
    
    {
      videoId: "HEirZI8bQCo",
      title: "Правила поведінки під час повітряної тривоги",
      image: require("../../../assets/mapa_tryvoga.png"),
    },
    {
      videoId: "XAs_uq3T8Ps",
      title: "Інтерактивний урок із мінної безпеки",
       image: require("../../../assets/minna_bezp.png"),
    },
    {
      videoId: "tnCoOfKNpms",
      title: "Аптечка: що важливо взяти з собою у сховище",
       image: require("../../../assets/aptechka.png"),
    },
    {
      videoId: "hRJPyIh_3gs",
      title: "єВорог: Побачили ворожу техніку чи солдатів?",
      image: require("../../../assets/voroji_sold.png"),
    },
    {
      videoId: "3Be49B60ozQ",
      title: "Зупинка кровотечі при пораненні голови, кінцівок..",
      image: require("../../../assets/krovotecha.png"),
    },
    
    {
      videoId: "CHyRYg7ulLQ",
      title: "Як не нашкодити своїм: правила поведінки в мережі",
      image: require("../../../assets/cyber_bezpeka.png"),
    },
    {
      videoId: "6mOmRUe1OqU",
      title: "Безпека дорожнього руху під час війни",
      image: require("../../../assets/avto_ruh.png"),
    }, 
  ];

  const renderVideoItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.videoCard}
        onPress={() => openYouTubeVideo(item.videoId)}
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
      <TouchableOpacity
        style={styles.header}
        onPress={toggleContainer}
      >
        <Text style={styles.headerTitle}>Корисні відео-інструкції та порадники під час воєнного стану</Text>
      </TouchableOpacity>

      {isContainerOpen && (
        <View style={styles.cardsContainer}>
          <FlatList
            data={videoData}
            keyExtractor={(item) => item.videoId}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: SIZES.medium }}
            renderItem={renderVideoItem}
          />
        </View>
      )}
    </View>
  );
};

export default Videos;