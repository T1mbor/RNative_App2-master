import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Prawyla, Videos, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  const warStartDate = new Date(2022, 1, 24); // 24 лютого 2022 року
  const [daysSinceWarStart, setDaysSinceWarStart] = useState(0);

  useEffect(() => {
    const updateDaysSinceWarStart = () => {
      const now = new Date();
      const timeDifference = now.getTime() - warStartDate.getTime();
      const daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

      setDaysSinceWarStart(daysPassed);
    };

    updateDaysSinceWarStart();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.clock} dimension="80%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.alert} dimension="150%" />,
          headerTitle: `День Війни: ${daysSinceWarStart}`,
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

          
          
          <Videos />


          <Prawyla />
          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
