import React, { Component, createRef } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Swiper from "react-native-swiper";
import { Colors } from "../../utils/Colors";
import OnboardItem from "../../components/global/OnboardItem";
import { navigate } from "../../utils/NavigationUtil";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


class OnBoardingScreen extends Component {
  private swiperRef = createRef<Swiper>();

  goToNextSlide = () => {
    if (this.swiperRef.current) {
      this.swiperRef.current.scrollBy(1);
    }
  };

  navigation = (path: string) => {
    navigate(path);
  };

  render() {
    return (
      <Swiper
        ref={this.swiperRef}
        loop={false}
        showsPagination={true}
        showsButtons={false}
        paginationStyle={styles.paginationStyle}
        activeDotColor={Colors.primary}
        activeDotStyle={{
          width: 0,
          height: 0,
        }}
        dotColor="#D9D9D9"
        scrollEnabled={true}
      >
        <View style={styles.slide}>
          <OnboardItem
            imageSource={require("../../assets/images/onboard1.png")}
            title="Grab all events now only in your hands"
            subtitle="Easy to find nearby events based on your interests."
            onPressFirst={this.goToNextSlide}
            buttonTitleFirst="Next"
          />
        </View>

        <View style={styles.slide}>
          <OnboardItem
            imageSource={require("../../assets/images/onboard2.png")}
            title="Easy payment & fast event ticket"
            subtitle="Get amazing offers and discounts on your event tickets."
            onPressFirst={this.goToNextSlide}
            buttonTitleFirst="Next"
          />
        </View>

        <View style={styles.slide}>
          <OnboardItem
            imageSource={require("../../assets/images/onboard3.png")}
            title="Let's go to your favourite event now"
            subtitle="Create your account and explore the community of events & organizers."
            onPressFirst={() => this.navigation("LoginScreen")}
            onPressSecond={() => this.navigation("RegisterScreen")}
            buttonTitleFirst="Login"
            buttonTitleSecond="Sign up"
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "white",
  },
  paginationStyle: {
    marginRight: w * 0.64,
    marginBottom: h * 0.009,
    bottom: -100,
  },
});

export default OnBoardingScreen;
