﻿import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { Font, LinearGradient } from "expo";
import Weather from "./weather";

const API_KEY = "ad6f2208dad6ba35951a32ee71c427b3";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    fontLoaded: false,
    error: null
  };

  async componentDidMount() {
    this._loadAssetsAsync();
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ isLoaded: true });
      },
      error => {
        this.setState({
          error: error
        });
        console.log(error);
      }
    );
  }

  async _loadAssetsAsync() {
    try {
      await Font.loadAsync({
        KopubBold: require("./assets/fonts/KoPubWorldBold.ttf"),
        Kopub: require("./assets/fonts/KoPubWorldLight.ttf"),
        Jua: require("./assets/fonts/jua.ttf")
      });
    } catch (e) {
      log.error(e);
    } finally {
      this.setState({ fontLoaded: true });
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { fontLoaded } = this.state;
    const { error } = this.state;

    if (fontLoaded) {
      if (error) {
        return (
          <LinearGradient
            colors={["#FF0099", "#493240"]}
            style={styles.container}
          >
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                날씨정보를 불러오는 도중 에러가 발생했습니다.
              </Text>
            </View>
          </LinearGradient>
        );
      } else if (isLoaded) {
        return (
          <View style={styles.container}>
            <StatusBar hidden={true} />
            <Weather />
          </View>
        );
      } else {
        return (
          <View style={styles.Loading}>
            <Text style={styles.LoadingText}>
              날씨정보를 불러오고 있습니다. 잠시만 기다려주세요
            </Text>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.loadingIndicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Loading: {
    backgroundColor: "#FDF6AA",
    flex: 1,
    justifyContent: "flex-end"
  },
  errorContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  LoadingText: {
    fontFamily: "Kopub",
    fontSize: 38,
    marginBottom: 100,
    paddingLeft: 25
  },
  loadingIndicatorContainer: {
    backgroundColor: "#FDF6AA",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontFamily: "Kopub",
    color: "white",
    fontSize: 38,
    marginBottom: 100,
    paddingLeft: 25
  }
});
