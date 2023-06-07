import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Prawyla_style";
import { COLORS } from "../../../constants";


  // Тут створення закритого конейнера порад
const Prawyla = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const toggleContainer = () => {
    setIsContainerOpen(!isContainerOpen);
  };

  //Тут тексти порад
  return (
    <View style={styles.poradnik}>
      <TouchableOpacity style={styles.header} onPress={toggleContainer}>
        <Text style={styles.headerTitle}>
          Правила поведінки та рекомендації під час дії воєнного стану
        </Text>
      </TouchableOpacity>


      
      {isContainerOpen && (
        <>
          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              1: Забезпечте себе достатнім запасом харчів:
            </Text>
            <Text>
              - Зберігайте запас їжі та води, який зможе задовольнити ваші потреби протягом
              декількох днів.
            </Text>
            <Text>
              - Зверніть увагу на спеціальні потреби членів вашої родини, наприклад, дітей,
              літніх людей або осіб з хронічними захворюваннями.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              2: Розробіть план евакуації та місце притулку:
            </Text>
            <Text>
              - Визначте безпечні місця, куди ви можете евакуюватися у разі небезпеки.
            </Text>
            <Text>
              - Розробіть план евакуації та обговоріть його з родиною або співмешканцями.
            </Text>
            <Text>
              - Підготуйте необхідні речі, які ви можете взяти з собою під час евакуації.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              3: Вивчіть навички першої допомоги:
            </Text>
            <Text>
              - Ознайомтеся з основами першої допомоги та навчіться надавати допомогу в разі
              потреби.
            </Text>
            <Text>
              - Зберігайте набір першої допомоги та засоби для невідкладної медичної допомоги в
              легкодоступному місці.
            </Text>
            <Text>- Практикуйте навички першої допомоги з сім'єю або друзями.</Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              4: Підтримуйте зв'язок з близькими:
            </Text>
            <Text>
              - Зареєструйте контакти членів родини та близьких друзів у своєму телефоні.
            </Text>
            <Text>
              - Установіть альтернативні способи зв'язку, такі як радіоабо смс-повідомлення, у разі
              перебоїв з мобільним зв'язком.
            </Text>
            <Text>
              - Угодуйте батареї своїх пристроїв та заряджайте запасні акумулятори.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              5: Дотримуйтеся інструкцій цивільної оборони:
            </Text>
            <Text>
              - Слухайте розпорядження та інструкції цивільної оборони та дійте відповідно до них.
            </Text>
            <Text>
              - Дотримуйтеся інструкцій щодо укриття, евакуації та інших заходів безпеки.
            </Text>
            <Text>
              - Будьте готові до можливих змін та коригування планів в разі необхідності.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              6: Захистіть своє житло та майно:
            </Text>
            <Text>
              - Підготуйте своє житло до можливих небезпек, обліпіть скотчем вікна.
            </Text>
            <Text>
              - Зберігайте важливі документи та цінні речі в безпечному місці.
            </Text>
            <Text>
              - Встановіть систему безпеки, якщо це можливо.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              7: Завжди носіть з собою павербанк та зарядні пристрої:
            </Text>
            <Text>
              - Майте при собі запасні батареї, зарядні пристрої та кабелі.
            </Text>
            <Text>
              - Зареєструйте контакти для екстрених ситуацій у своєму телефоні.
            </Text>
            <Text>
              - Визначте безпечні місця для зарядки пристроїв у разі перебоїв з електроенергією.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              8: Дотримуйтеся інструкцій щодо безпеки водопостачання та санітарії:
            </Text>
            <Text>
              - Зберігайте запас питної води у герметичних контейнерах.
            </Text>
            <Text>
              - Використовуйте спеціальні засоби для очищення води, якщо це необхідно.
            </Text>
            <Text>
              - Дотримуйтесь правил гігієни та утилізації відходів у разі обмеженого доступу до води та каналізації.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              9: Будьте обережні з електроприладами:
            </Text>
            <Text>
              - Використовуйте електроприлади з обережністю та відключайте їх, коли не використовуєте.
            </Text>
            <Text>
              - Уникайте перевантаження електричної мережі в будинку.
            </Text>
            <Text>
              - Перевіряйте стан електричних проводів та розеток.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Text style={styles.titleincards }>
              10: Підготуйте домашню аптечку та медичні засоби:
            </Text>
            <Text>
              - Зберігайте необхідні медикаменти та першу допомогу в домашній аптечці.
            </Text>
            <Text>
              - Ознайомтесь зі списком необхідних медичних засобів та навчіться правильно використовувати їх.
            </Text>
            <Text>
              - Періодично перевіряйте та оновлюйте вміст аптечки.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Prawyla;