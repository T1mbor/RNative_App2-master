import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Prawyla, Videos, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [warDay, setWarDay] = useState(468);

  useEffect(() => {
    const updateWarDay = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const timeUntilMidnight = midnight.getTime() - now.getTime();

      setTimeout(() => {
        setWarDay((prevDay) => prevDay + 1);
      }, timeUntilMidnight);
    };

    updateWarDay();

    // Перевірка таймера
    // setTimeout(() => {
    //   setWarDay((prevDay) => prevDay + 1);
    // }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.clock} dimension="80%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.alert} dimension="150%" />,
          headerTitle: `День Війни: ${warDay}`,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />

           {/* <ShelterMap /> */}

          <Videos />

          <Prawyla />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
