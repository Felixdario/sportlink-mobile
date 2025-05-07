import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { toast } from 'sonner-native';

const mockUserData = {
  name: "Alex Johnson",
  email: "alex@example.com",
  sports: ["Basketball", "Soccer"],
  totalGames: 45,
  wins: 32,
  ranking: 4,
  points: 2800,
  image: "https://api.a0.dev/assets/image?text=athletic%20person%20profile%20picture%20professional&aspect=1:1",
};

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigation.navigate('Landing');
  };

  return (
    <ScrollView className="flex-1 bg-[#1a1a1a]">
      <View className="p-5 bg-[#FF4D4D] items-center pb-[70px]">
        <Image
          source={{ uri: mockUserData.image }}
          className="w-[120px] h-[120px] rounded-full border-4 border-white"
        />
        <Text className="text-white text-2xl font-bold mt-2.5">
          {mockUserData.name}
        </Text>
        <Text className="text-white opacity-80">{mockUserData.email}</Text>
      </View>

      <View className="flex-row justify-around -mt-[50px] mx-5">
        <View className="bg-[#2a2a2a] p-4 rounded-2xl items-center flex-1 mx-1">
          <Text className="text-[#FF4D4D] text-2xl font-bold">
            {mockUserData.ranking}
          </Text>
          <Text className="text-[#888]">Ranking</Text>
        </View>
        <View className="bg-[#2a2a2a] p-4 rounded-2xl items-center flex-1 mx-1">
          <Text className="text-[#FF4D4D] text-2xl font-bold">
            {mockUserData.points}
          </Text>
          <Text className="text-[#888]">Points</Text>
        </View>
      </View>

      <View className="p-5">
        <View className="mb-5">
          <Text className="text-white text-lg font-bold mb-2.5">
            Sports
          </Text>
          <View className="flex-row flex-wrap">
            {mockUserData.sports.map((sport, index) => (
              <View
                key={index}
                className="bg-[#2a2a2a] px-4 py-2 rounded-full mr-2.5 mb-2.5"
              >
                <Text className="text-white">{sport}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-white text-lg font-bold mb-2.5">
            Statistics
          </Text>
          <View className="bg-[#2a2a2a] rounded-2xl p-4">
            <View className="flex-row justify-between mb-2.5">
              <Text className="text-[#888]">Total Games</Text>
              <Text className="text-white">{mockUserData.totalGames}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[#888]">Wins</Text>
              <Text className="text-white">{mockUserData.wins}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          className="bg-[#2a2a2a] p-4 rounded-xl flex-row items-center justify-center"
        >
          <MaterialIcons name="logout" size={24} color="#FF4D4D" />
          <Text className="text-[#FF4D4D] ml-2.5 text-base">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}