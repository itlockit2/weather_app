import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name="ios-rainy" />
          <Text style={styles.temp}>40°C</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>비가 내리고 있습니다.</Text>
          <Text style={styles.subtitle}>
            더 자세한 정보를 알고 싶다면 밖을 보세요.
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
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
  }
});
