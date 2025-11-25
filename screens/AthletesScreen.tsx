import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchHeader from '../components/SearchHeader';
import { MaterialIcons } from '@expo/vector-icons';


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

export default function AthletesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAthletes, setFilteredAthletes] = useState(mockAthletes);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = mockAthletes.filter(athlete =>
      athlete.name.toLowerCase().includes(text.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAthletes(filtered);
  };

  return (
    <View className="flex-1 bg-[#1a1a1a]">
      <View className="p-5 pt-12 bg-[#FF4D4D] rounded-b-[20px]">
        <Text className="text-white text-2xl font-bold">Atletas</Text>
        <Text className="text-white opacity-80 mt-1.5">
          Encontre e participe de atividades perto de você
        </Text>
      </View>

      <SearchHeader onSearch={handleSearch} />
      <View className="flex-1 p-5">
                <Text className="text-white text-xl font-bold mb-4">
                    Top Athletes
                  </Text>
        {filteredAthletes.map((athlete) => (
          <>
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
              </>
            ))}
      </View>
    </View>
  );
}