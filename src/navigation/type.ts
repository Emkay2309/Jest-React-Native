import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    HomeScreen: undefined;
    ProductScreen: undefined;
    RegisterScreen : undefined;
    LoginScreen : undefined;
    OnBoardingScreen : undefined;
    SplashScreen : undefined;
};

export type ProductScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductScreen'>;

export type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;

export type Props = {
    navigation: ProductScreenNavigationProp;
    route: ProductScreenRouteProp;
};
