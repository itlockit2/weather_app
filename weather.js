import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import propTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비가 오고 있습니다.",
    subtitle: "더 자세한 정보를 알고 싶다면 밖을 봐보세요.",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "화창한 날씨 입니다.",
    subtitle: "밖으로 나가서 미세먼지를 마셔보아요.",
    icon: "weather-sunny"
  },
  ThundersStorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "천둥 번개가 치고 있습니다.",
    subtitle: "죽기 딱 좋은 날씨네요!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름이 많은 날씨입니다.",
    subtitle: "정말 지루한 날씨네요.",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#89B6E5"],
    title: "눈이 내리고 있어요.",
    subtitle: "Do you want to build a snow man~",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비가 내리고 있어요.",
    subtitle: "그래도 우산은 챙기고 나가셔야 합니다.",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "안개가 자욱합니다..",
    subtitle: "운전을 하신다면 안전운전 하세요.",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "안개가 자욱합니다..",
    subtitle: "운전을 하신다면 안전운전 하세요.",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp, city }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  weatherName: propTypes.string.isRequired,
  city: propTypes.string.isRequired
};
export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 10,
    fontWeight: "100",
    fontFamily: "Kopub"
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    marginBottom: 24,
    marginRight: 10,
    fontFamily: "Kopub"
  },
  temp: {
    fontSize: 48,
    color: "white",
    marginTop: 10
  },
  city: {
    fontSize: 30,
    color: "white",
    marginTop: 10
  }
});
