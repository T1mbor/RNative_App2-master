import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import moment from "moment-timezone";

import { COLORS, icons, images, SIZES } from "../constants";
import { Prawyla, Videos, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  
  const warStartDate = moment.tz("2022-02-24", "Europe/Kiev"); // 24 лютого 2022 року, київська таймзона
  const [daysSinceWarStart, setDaysSinceWarStart] = useState(0);

  useEffect(() => {
    const updateDaysSinceWarStart = () => {
      const now = moment.tz("Europe/Kiev"); // Поточна дата та час в київській таймзоні
      const daysPassed = now.diff(warStartDate, "days");

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
          headerTitle: `День повном-вторгнення: ${daysSinceWarStart}`,
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
