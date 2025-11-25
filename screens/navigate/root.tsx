import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  CreateCompetition: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined
  VerifyNumberScreen: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;