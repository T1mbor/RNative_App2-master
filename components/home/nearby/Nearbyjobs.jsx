import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
  <View style={styles.poradnik}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Правила поведінки та рекомендації під час дії воєнного стану</Text>
      </View>


      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}>1: Забезпечте себе достатнім запасом харчів</Text>
        <Text>- Зберігайте запас їжі та води, який зможе задовольнити ваші потреби на протязі декількох днів.</Text>
        <Text>- Зверніть увагу на спеціальні потреби членів вашої родини, наприклад, дітей, літніх людей або осіб з хронічними захворюваннями.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}>2: Розробіть план евакуації та місце притулку:</Text>
        <Text>- Визначте безпечні місця, куди ви можете евакуюватися у разі небезпеки.</Text>
        <Text>- Розробіть план евакуації та обговоріть його з родиною або співмешканцями.</Text>
        <Text>- Підготуйте необхідні речі, які ви можете взяти з собою під час евакуації.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}>3: Вивчіть навички першої допомоги:</Text>
        <Text>- Ознайомтеся з основами першої допомоги та навчіться надавати допомогу в разі потреби.</Text>
        <Text>- Зберігайте набір першої допомоги та засоби для невідкладної медичної допомоги в легкодоступному місці.</Text>
        <Text>- Практикуйте навички першої допомоги з сім'єю або друзями.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}>4: Підтримуйте зв'язок з близькими:</Text>
        <Text>- Зареєструйте контакти членів родини та близьких друзів у своєму телефоні.</Text>
        <Text>- Установіть альтернативні способи зв'язку, такі як радіоабо смс-повідомлення, у разі перебоїв з мобільним зв'язком.</Text>
        <Text>- Угодуйте батареї своїх пристроїв та заряджайте запасні акумулятори.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}>5: Дотримуйтеся інструкцій цивільної оборони:</Text>
        <Text>- Слухайте розпорядження та інструкції цивільної оборони та дійте відповідно до них.</Text>
        <Text>- Дотримуйтеся інструкцій щодо укриття, евакуації та інших заходів безпеки.</Text>
        <Text>- Будьте готові до можливих змін та коригування планів в разі необхідності.</Text>
  </View>


    </View>
  );
};

export default Nearbyjobs;
