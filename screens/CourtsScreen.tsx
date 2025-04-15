import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
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
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <View style={{ 
        padding: 20, 
        backgroundColor: '#FF4D4D',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
        <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>Quadras Próximas</Text>
        <Text style={{ color: '#fff', opacity: 0.8, marginTop: 5 }}>
          Encontre e participe de atividades perto de você
        </Text>
      </View>

      <SearchHeader onSearch={handleSearch} />      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {filteredCourts.map((court) => (
          <TouchableOpacity
            key={court.id}
            style={{
              backgroundColor: '#2a2a2a',
              borderRadius: 15,
              marginBottom: 20,
              overflow: 'hidden',
            }}
          >
            <Image
              source={{ uri: court.image }}
              style={{ width: '100%', height: 150 }}
            />
            <View style={{ padding: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                  {court.name}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="star" size={20} color="#FFD700" />
                  <Text style={{ color: '#fff', marginLeft: 5 }}>{court.rating}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <MaterialIcons name="location-on" size={20} color="#888" />
                <Text style={{ color: '#888', marginLeft: 5 }}>{court.address}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <MaterialIcons name="people" size={20} color="#FF4D4D" />
                <Text style={{ color: '#FF4D4D', marginLeft: 5 }}>
                  {court.currentlyActive} people active now
                </Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                {court.sports.map((sport, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#1a1a1a',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 15,
                      marginRight: 10,
                      marginTop: 5,
                    }}
                  >
                    <Text style={{ color: '#fff' }}>{sport}</Text>
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