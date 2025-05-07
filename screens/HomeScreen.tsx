import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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

const mockCompetitions = [
  {
    id: 1,
    name: "City Basketball Championship",
    date: "2025-04-20",
    venue: "Central Court Arena",
    sport: "Basketball",
    participants: 24,
  },
  {
    id: 2,
    name: "Soccer League Finals",
    date: "2025-04-25",
    venue: "Municipal Stadium",
    sport: "Soccer",
    participants: 16,
  },
];

const mockAthletes = [
  {
    id: 1,
    name: "John Smith",
    sport: "Basketball",
    ranking: 1,
    points: 2500,
    image: "https://api.a0.dev/assets/image?text=athletic%20basketball%20player%20portrait&aspect=1:1",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    sport: "Soccer",
    ranking: 1,
    points: 2400,
    image: "https://api.a0.dev/assets/image?text=female%20soccer%20player%20portrait&aspect=1:1",
  },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('competitions');
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 bg-[#1a1a1a]">
      <View className="p-5 bg-[#FF4D4D]">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-2xl font-bold">Sports Hub</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateCompetition')}
            className="bg-white px-3 py-2.5 rounded-full flex-row items-center"
          >
            <MaterialIcons name="add" size={20} color="#FF4D4D" />
            <Text className="text-[#FF4D4D] ml-1.5 font-bold">
              Nova Competição
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row mt-5">
          <TouchableOpacity
            onPress={() => setActiveTab('competitions')}
            className={`px-3 py-2.5 rounded-full mr-2.5 ${activeTab === 'competitions' ? 'bg-white' : 'bg-transparent'}`}
          >
            <Text className={`font-bold ${activeTab === 'competitions' ? 'text-[#FF4D4D]' : 'text-white'}`}>
              Competitions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('rankings')}
            className={`px-3 py-2.5 rounded-full ${activeTab === 'rankings' ? 'bg-white' : 'bg-transparent'}`}
          >
            <Text className={`font-bold ${activeTab === 'rankings' ? 'text-[#FF4D4D]' : 'text-white'}`}>
              Rankings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 p-5">
        {activeTab === 'competitions' ? (
          <View>
            <Text className="text-white text-xl font-bold mb-4">
              Upcoming Competitions
            </Text>
            {mockCompetitions.map((competition) => (
              <TouchableOpacity
                key={competition.id}
                className="bg-[#2a2a2a] p-4 rounded-xl mb-4"
              >
                <Text className="text-[#FF4D4D] text-lg font-bold">
                  {competition.name}
                </Text>
                <View className="flex-row mt-2.5">
                  <MaterialIcons name="event" size={20} color="#888" />
                  <Text className="text-[#888] ml-1.5">{competition.date}</Text>
                </View>
                <View className="flex-row mt-1.5">
                  <MaterialIcons name="location-on" size={20} color="#888" />
                  <Text className="text-[#888] ml-1.5">{competition.venue}</Text>
                </View>
                <View className="flex-row mt-1.5">
                  <MaterialIcons name="people" size={20} color="#888" />
                  <Text className="text-[#888] ml-1.5">
                    {competition.participants} participants
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            <Text className="text-white text-xl font-bold mb-4">
              Top Athletes
            </Text>
            {mockAthletes.map((athlete) => (
              <TouchableOpacity
                key={athlete.id}
                className="bg-[#2a2a2a] p-4 rounded-xl mb-4 flex-row items-center"
              >
                <Image
                  source={{ uri: athlete.image }}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <View className="ml-4 flex-1">
                  <Text className="text-white text-lg font-bold">
                    {athlete.name}
                  </Text>
                  <Text className="text-[#888]">{athlete.sport}</Text>
                  <View className="flex-row mt-1.5">
                    <MaterialIcons name="emoji-events" size={20} color="#FF4D4D" />
                    <Text className="text-[#FF4D4D] ml-1.5">
                      Rank #{athlete.ranking} • {athlete.points} pts
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}