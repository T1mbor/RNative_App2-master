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
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 1: Дотримуйтесь правил щодо документів та особистих речей: </Text>
        <Text> - Майте при собі ідентифікаційні документи, що посвідчують вашу особу.
        </Text>
        <Text> - Зберігайте важливі документи в безпечному місці, захищеному від втрати або пошкодження.</Text>
        <Text> - Переконайтеся, що ви розумієте процедури та правила щодо доступу до конфіденційної інформації.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 2: Дотримуйтеся безпеки: </Text>
        <Text> - Якщо ви чуєте тривогу, не гаючи часу спустіться будь ласка у сховище.
        </Text>
        <Text> - Дотримуйтеся правил використання зброї та інших небезпечних предметів.</Text>
        <Text> - Завжди слухайтеся наказів інструкційних кадрів та керівників.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 3: Зберігайте спокій під час тривоги: </Text>
        <Text> - Вчіться реагувати швидко та дисципліновано на тривогові сигнали.
        </Text>
        <Text> - Дотримуйтеся встановлених процедур евакуації, якщо такі є.</Text>
        <Text> - Шукайте надійних сховок або укриття у разі небезпеки.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 4: Спілкуйтесь та співпрацюйте з іншими:</Text>
        <Text> - Підтримуйте комунікацію з членами свого загону або одиниці.
        </Text>
        <Text> - Діліться інформацією із своїми товаришами щодо можливих загроз або небезпек.</Text>
        <Text> - Працюйте в команді, допомагайте один одному та слідуйте наказам керівників.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk}}> 5: Будьте завжди готові до дії: </Text>
        <Text> - Зберігайте особисту готовність, тримаючи своє обмундирування, зброю та інші необхідні речі в належному стані.
        </Text>
        <Text> - Відводьте час на фізичні тренування та зміцнення свого фізичного стану</Text>
        <Text> - Будьте вмілими в основах первинної медичної допомоги.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 6: Дотримуйтесь вказівок вищих керівників: </Text>
        <Text> - Виконуйте накази, вказівки та інструкції, надані вашими вищестоящими керівниками.
        </Text>
        <Text> - Звертайтеся до них для отримання додаткової інформації або консультацій, якщо це необхідно.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 7: Зберігайте високий рівень дисципліни:</Text>
        <Text> - Дотримуйтесь розкладу дня та правил збору, призначених для вашої одиниці.
        </Text>
        <Text> - Дотримуйтесь правил щодо використання техніки, спорядження та майна.
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ color: COLORS.white, backgroundColor: COLORS.blackk }}> 8: Підтримуйте фізичну та психологічну стійкість:</Text>
        <Text> - Зберігайте оптимальну фізичну форму та доглядайте за своїм здоров'ям.
        </Text>
        <Text> - Шукайте підтримку у своїх колег та професійних психологів у разі необхідності.
        </Text>
      </View>


    </View>
  );
};

export default Nearbyjobs;
