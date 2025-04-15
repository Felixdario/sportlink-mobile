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
    <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <View style={{ 
        padding: 20,
        backgroundColor: '#FF4D4D',
        alignItems: 'center',
        paddingBottom: 70,
      }}>
        <Image
          source={{ uri: mockUserData.image }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 4,
            borderColor: '#fff',
          }}
        />
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
          {mockUserData.name}
        </Text>
        <Text style={{ color: '#fff', opacity: 0.8 }}>{mockUserData.email}</Text>
      </View>

      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: -50,
        marginHorizontal: 20,
      }}>
        <View style={{
          backgroundColor: '#2a2a2a',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 5,
        }}>
          <Text style={{ color: '#FF4D4D', fontSize: 24, fontWeight: 'bold' }}>
            {mockUserData.ranking}
          </Text>
          <Text style={{ color: '#888' }}>Ranking</Text>
        </View>
        <View style={{
          backgroundColor: '#2a2a2a',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 5,
        }}>
          <Text style={{ color: '#FF4D4D', fontSize: 24, fontWeight: 'bold' }}>
            {mockUserData.points}
          </Text>
          <Text style={{ color: '#888' }}>Points</Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Sports
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {mockUserData.sports.map((sport, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: '#2a2a2a',
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  borderRadius: 20,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: '#fff' }}>{sport}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Statistics
          </Text>
          <View style={{
            backgroundColor: '#2a2a2a',
            borderRadius: 15,
            padding: 15,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={{ color: '#888' }}>Total Games</Text>
              <Text style={{ color: '#fff' }}>{mockUserData.totalGames}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#888' }}>Wins</Text>
              <Text style={{ color: '#fff' }}>{mockUserData.wins}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: '#2a2a2a',
            padding: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MaterialIcons name="logout" size={24} color="#FF4D4D" />
          <Text style={{ color: '#FF4D4D', marginLeft: 10, fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}