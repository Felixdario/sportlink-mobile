import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import AthletesScreen from "./screens/AthletesScreen";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import VerifyNumberScreen from "./screens/Auth/VerifyNumberScreen";
import CourtsScreen from "./screens/CourtsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CreateCompetitionScreen from "./screens/CreateCompetitionScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type RootStackParamList = {
  Landing: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined
  VerifyNumberScreen: undefined;
  MainTabs: undefined;
  CreateCompetition: undefined;
};

type TabParamList = {
  Home: undefined;
  Courts: undefined;
  Competitions: undefined;
  Athletes: undefined;
  Mensagens: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2a2a2a',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FF4D4D',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courts"
        component={CourtsScreen}
        options={{
          tabBarLabel: 'Quadras',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-on" size={size} color={color} />
          ),
        }}
      />
            <Tab.Screen
        name="Athletes"
        component={AthletesScreen}
        options={{
          tabBarLabel: 'Atletas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-basketball" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerifyNumberScreen" component={VerifyNumberScreen} />
      <Stack.Screen name="CreateCompetition" component={CreateCompetitionScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <GestureHandlerRootView>
        <Toaster />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});