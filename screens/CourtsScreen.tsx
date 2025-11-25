import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchHeader from '../components/SearchHeader';
import { MaterialIcons } from '@expo/vector-icons';

const mockCourts = [
  {
    id: 1,
    name: "Central Sports Complex",
    address: "123 Main Street",
    sports: ["Basketball", "Volleyball"],
    rating: 4.5,
    image: "https://api.a0.dev/assets/image?text=modern%20indoor%20basketball%20court%20dramatic%20lighting&aspect=16:9",
    currentlyActive: 12,
  },
  {
    id: 2,
    name: "City Stadium",
    address: "456 Park Avenue",
    sports: ["Soccer", "Athletics"],
    rating: 4.8,
    image: "https://api.a0.dev/assets/image?text=professional%20soccer%20field%20stadium%20evening&aspect=16:9",
    currentlyActive: 24,
  },
  {
    id: 3,
    name: "Community Sports Center",
    address: "789 Sports Lane",
    sports: ["Tennis", "Basketball"],
    rating: 4.2,
    image: "https://api.a0.dev/assets/image?text=modern%20tennis%20courts%20facility&aspect=16:9",
    currentlyActive: 8,
  },
];

export default function CourtsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourts, setFilteredCourts] = useState(mockCourts);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = mockCourts.filter(court =>
      court.name.toLowerCase().includes(text.toLowerCase()) ||
      court.address.toLowerCase().includes(text.toLowerCase()) ||
      court.sports.some(sport => sport.toLowerCase().includes(text.toLowerCase()))
    );
    setFilteredCourts(filtered);
  };

  return (
    <View className="flex-1 bg-[#1a1a1a]">
      <View className="p-5 pt-12 bg-[#FF4D4D] rounded-b-[20px]">
        <Text className="text-white text-2xl font-bold">Quadras Próximas</Text>
        <Text className="text-white opacity-80 mt-1.5">
          Encontre e participe de atividades perto de você
        </Text>
      </View>

      <SearchHeader onSearch={handleSearch} />

      <ScrollView className="flex-1 px-5">
        {filteredCourts.map((court) => (
          <TouchableOpacity
            key={court.id}
            className="bg-[#2a2a2a] rounded-2xl mb-5 overflow-hidden"
          >
            <Image
              source={{ uri: court.image }}
              className="w-full h-[150px]"
            />
            <View className="p-4">
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-xl font-bold">
                  {court.name}
                </Text>
                <View className="flex-row items-center">
                  <MaterialIcons name="star" size={20} color="#FFD700" />
                  <Text className="text-white ml-1.5">{court.rating}</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-2.5">
                <MaterialIcons name="location-on" size={20} color="#888" />
                <Text className="text-[#888] ml-1.5">{court.address}</Text>
              </View>

              <View className="flex-row items-center mt-2.5">
                <MaterialIcons name="people" size={20} color="#FF4D4D" />
                <Text className="text-[#FF4D4D] ml-1.5">
                  {court.currentlyActive} people active now
                </Text>
              </View>

              <View className="flex-row flex-wrap mt-2.5">
                {court.sports.map((sport, index) => (
                  <View
                    key={index}
                    className="bg-[#1a1a1a] px-2.5 py-1.5 rounded-2xl mr-2.5 mt-1.5"
                  >
                    <Text className="text-white">{sport}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}