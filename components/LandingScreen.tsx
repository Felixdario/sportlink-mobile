import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Landing: undefined;
  Auth: undefined;
  Home: undefined;
  CreateCompetition: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LandingScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="flex-1 bg-[#1a1a1a]">
      <ImageBackground
        source={{ uri: 'https://api.a0.dev/assets/image?text=athletes%20playing%20sports%20together%20on%20court%20inspiring&aspect=16:9' }}
        className="h-[400px] justify-center p-5"
      >
        <View className="bg-black/50 p-5 rounded-2xl">
          <Text className="text-white text-4xl font-bold">
            Connect. Compete. Conquer.
          </Text>
          <Text className="text-white text-lg mt-2.5">
            Join the ultimate sports community in your city
          </Text>
        </View>
      </ImageBackground>

      <View className="p-5">
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth')}
          className="bg-[#FF4D4D] p-4 rounded-xl flex-row items-center justify-center my-2.5"
        >
          <Text className="text-white text-lg font-bold mr-2.5">
            Get Started
          </Text>
          <MaterialIcons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <View className="mt-8">
          <View className="mb-8">
            <View className="flex-row items-center mb-2.5">
              <MaterialIcons name="sports-basketball" size={30} color="#FF4D4D" />
              <Text className="text-white text-2xl font-bold ml-2.5">
                Find Competitions
              </Text>
            </View>
            <Text className="text-[#ccc] text-base">
              Discover local tournaments and competitions in your favorite sports
            </Text>
          </View>

          <View className="mb-8">
            <View className="flex-row items-center mb-2.5">
              <MaterialIcons name="emoji-events" size={30} color="#FF4D4D" />
              <Text className="text-white text-2xl font-bold ml-2.5">
                Track Rankings
              </Text>
            </View>
            <Text className="text-[#ccc] text-base">
              Compete and climb the local rankings in your city
            </Text>
          </View>

          <View className="mb-8">
            <View className="flex-row items-center mb-2.5">
              <MaterialIcons name="groups" size={30} color="#FF4D4D" />
              <Text className="text-white text-2xl font-bold ml-2.5">
                Connect with Athletes
              </Text>
            </View>
            <Text className="text-[#ccc] text-base">
              Meet other sports enthusiasts and build your network
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}