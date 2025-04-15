import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { toast } from 'sonner-native';
import { useNavigation } from '@react-navigation/native';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleAuth = () => {
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Please fill all fields');
      return;
    }
    
    // Mock authentication
    toast.success(isLogin ? 'Login successful!' : 'Registration successful!');
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <ImageBackground
        source={{ uri: 'https://api.a0.dev/assets/image?text=sports%20stadium%20at%20night%20dramatic%20lighting&aspect=16:9' }}
        style={{ height: 250 }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 }}>
          <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
            {isLogin ? 'Welcome Back!' : 'Join the Community'}
          </Text>
        </View>
      </ImageBackground>

      <View style={{ padding: 20 }}>
        {!isLogin && (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#fff', marginBottom: 5 }}>Name</Text>
            <View style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#2a2a2a',
              borderRadius: 10,
              padding: 3
            }}>
              <MaterialIcons name="person" size={24} color="#FF4D4D" style={{ marginLeft: 10 }} />
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#666"
                style={{
                  color: '#fff',
                  flex: 1,
                  padding: 12,
                }}
              />
            </View>
          </View>
        )}

        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Email</Text>
          <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 3
          }}>
            <MaterialIcons name="email" size={24} color="#FF4D4D" style={{ marginLeft: 10 }} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              style={{
                color: '#fff',
                flex: 1,
                padding: 12,
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Password</Text>
          <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 3
          }}>
            <MaterialIcons name="lock" size={24} color="#FF4D4D" style={{ marginLeft: 10 }} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#666"
              secureTextEntry
              style={{
                color: '#fff',
                flex: 1,
                padding: 12,
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleAuth}
          style={{
            backgroundColor: '#FF4D4D',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            {isLogin ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsLogin(!isLogin)}
          style={{ alignItems: 'center' }}
        >
          <Text style={{ color: '#FF4D4D' }}>
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}