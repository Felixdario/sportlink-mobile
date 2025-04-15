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
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>      <View style={{ padding: 20, backgroundColor: '#FF4D4D' }}>
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>Sports Hub</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateCompetition')}
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <MaterialIcons name="add" size={20} color="#FF4D4D" />
            <Text style={{ color: '#FF4D4D', marginLeft: 5, fontWeight: 'bold' }}>
              Nova Competição
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => setActiveTab('competitions')}
            style={{
              backgroundColor: activeTab === 'competitions' ? '#fff' : 'transparent',
              padding: 10,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: activeTab === 'competitions' ? '#FF4D4D' : '#fff',
                fontWeight: 'bold',
              }}
            >
              Competitions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('rankings')}
            style={{
              backgroundColor: activeTab === 'rankings' ? '#fff' : 'transparent',
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: activeTab === 'rankings' ? '#FF4D4D' : '#fff',
                fontWeight: 'bold',
              }}
            >
              Rankings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flex: 1, padding: 20 }}>
        {activeTab === 'competitions' ? (
          <View>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
              Upcoming Competitions
            </Text>
            {mockCompetitions.map((competition) => (
              <TouchableOpacity
                key={competition.id}
                style={{
                  backgroundColor: '#2a2a2a',
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              >
                <Text style={{ color: '#FF4D4D', fontSize: 18, fontWeight: 'bold' }}>
                  {competition.name}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <MaterialIcons name="event" size={20} color="#888" />
                  <Text style={{ color: '#888', marginLeft: 5 }}>{competition.date}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <MaterialIcons name="location-on" size={20} color="#888" />
                  <Text style={{ color: '#888', marginLeft: 5 }}>{competition.venue}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <MaterialIcons name="people" size={20} color="#888" />
                  <Text style={{ color: '#888', marginLeft: 5 }}>
                    {competition.participants} participants
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
              Top Athletes
            </Text>
            {mockAthletes.map((athlete) => (
              <TouchableOpacity
                key={athlete.id}
                style={{
                  backgroundColor: '#2a2a2a',
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: athlete.image }}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                />
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                    {athlete.name}
                  </Text>
                  <Text style={{ color: '#888' }}>{athlete.sport}</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <MaterialIcons name="emoji-events" size={20} color="#FF4D4D" />
                    <Text style={{ color: '#FF4D4D', marginLeft: 5 }}>
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