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
    <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <ImageBackground
        source={{ uri: 'https://api.a0.dev/assets/image?text=athletes%20playing%20sports%20together%20on%20court%20inspiring&aspect=16:9' }}
        style={{
          height: 400,
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 20, borderRadius: 15 }}>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>
            Connect. Compete. Conquer.
          </Text>
          <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>
            Join the ultimate sports community in your city
          </Text>
        </View>
      </ImageBackground>

      <View style={{ padding: 20 }}>
        <TouchableOpacity          onPress={() => navigation.navigate('Auth')}
          style={{
            backgroundColor: '#FF4D4D',
            padding: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>
            Get Started
          </Text>
          <MaterialIcons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={{ marginTop: 30 }}>
          <View style={{ marginBottom: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <MaterialIcons name="sports-basketball" size={30} color="#FF4D4D" />
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
                Find Competitions
              </Text>
            </View>
            <Text style={{ color: '#ccc', fontSize: 16 }}>
              Discover local tournaments and competitions in your favorite sports
            </Text>
          </View>

          <View style={{ marginBottom: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <MaterialIcons name="emoji-events" size={30} color="#FF4D4D" />
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
                Track Rankings
              </Text>
            </View>
            <Text style={{ color: '#ccc', fontSize: 16 }}>
              Compete and climb the local rankings in your city
            </Text>
          </View>

          <View style={{ marginBottom: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <MaterialIcons name="groups" size={30} color="#FF4D4D" />
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
                Connect with Athletes
              </Text>
            </View>
            <Text style={{ color: '#ccc', fontSize: 16 }}>
              Meet other sports enthusiasts and build your network
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}