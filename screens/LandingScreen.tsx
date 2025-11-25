import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './navigate/root';

export default function LandingScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="flex-1 bg-[#1a1a1a]">
      {/* Seção destacada convertida para React Native */}
      <View className="relative overflow-hidden py-20">
        {/* Elementos de fundo */}
        <View className="absolute inset-0 -z-10">
          <View className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-sportlink/20 to-rose-500/20 blur-3xl" />
          <View className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-sportlink/20 to-rose-500/20 blur-3xl" />
        </View>

        <View className="px-4">
          <View className="flex flex-col md:flex-row items-center">
            <View className="w-full mb-10 md:mb-0">
              {/* Substitua Badge por um View estilizado */}
              <View className="mb-4 bg-gradient-to-r from-primary-sportlink to-red-500 px-3 py-1 rounded-full">
                <Text className="text-white font-bold">Novo: Competições em tempo real</Text>
              </View>
              <Text className="text-4xl font-bold mb-6 leading-tight text-white">
                Conecte-se com atletas e crie <Text className="text-primary-sportlink">competições</Text>
              </Text>
              <Text className="text-xl mb-8 text-gray-400">
                SportLink une pessoas que praticam esportes, facilitando a criação de competições em quadras próximas à sua localização.
              </Text>
              <View className="flex flex-col sm:flex-row">
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}
                  className="w-full mb-4 sm:w-auto bg-gradient-to-r from-primary-sportlink to-red-500 px-6 py-3 rounded-xl flex-row items-center justify-center"
                >
                  <Text className="text-white font-bold text-lg">Começar agora</Text>
                  <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {/* ação para "Como funciona" */}}
                  className="w-full sm:w-auto border border-primary-sportlink px-6 py-3 rounded-xl flex-row items-center justify-center"
                >
                  <MaterialIcons name="play-arrow" size={20} color="#FF4D4D" style={{ marginRight: 8 }} />
                  <Text className="text-primary-sportlink font-bold text-lg">Como funciona</Text>
                </TouchableOpacity>
              </View>

              <View className="mt-8 ml-8 flex-row items-center">
                <View className="flex-row -ml-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <View key={i} className="border-2 border-background w-8 h-8 rounded-full bg-gray-200 items-center justify-center -ml-2">
                      <Text className="text-primary-sportlink text-xs font-bold">U{i}</Text>
                    </View>
                  ))}
                </View>
                <View>
                  <Text className="font-medium text-white">+2.500 atletas</Text>
                  <View className="flex-row mt-1 items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <MaterialIcons key={i} name="star" size={12} color="#FFD700" />
                    ))}
                    <Text className="text-xs ml-1 text-gray-400">(4.9/5)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
              <View className="relative">
                <View className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary-sportlink to-red-500 opacity-70 blur-sm" />
                <View className="relative bg-gray-900 rounded-2xl p-2 shadow-xl">
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center" }}
                    className="rounded-xl w-full h-48"
                  />
                  <View className="absolute -top-4 -right-4 bg-primary-sportlink p-3 rounded-lg shadow-lg">
                    <View className="flex-row items-center gap-2">
                      <View className="h-2 w-2 rounded-full bg-green-500" />
                      <Text className="text-sm font-medium text-white">15 partidas agora</Text>
                    </View>
                  </View>
                  <View className="absolute bottom-4 right-4 bg-primary-sportlink p-3 rounded-lg shadow-lg">
                    <View className="flex-row items-center gap-2">
                      <MaterialIcons name="location-on" size={16} color="#fff" />
                      <Text className="text-sm font-medium text-white">12 quadras próximas</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="py-20 relative overflow-hidden" id="como-funciona">
        <View className="absolute inset-0 -z-10 bg-gradient-radial from-primary-sportlink/5 to-transparent" />
        <View className="px-4 max-w-2xl mx-auto mb-16">
          <View className="mb-4 bg-gradient-to-r from-primary-sportlink to-red-500 px-3 py-1 rounded-full self-center">
            <Text className="text-white font-bold">Simples e intuitivo</Text>
          </View>
          <Text className="text-3xl font-bold mb-6 text-center text-white">Como funciona</Text>
          <Text className="text-lg text-gray-400 text-center">
            Em apenas alguns passos, você pode encontrar quadras, conectar-se com outros atletas e participar de competições.
          </Text>
        </View>
        <View className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
          {[
            {
              icon: <MaterialIcons name="location-on" size={32} color="#fff" />,
              title: "Encontre quadras",
              description: "Descubra quadras próximas a você para praticar seu esporte favorito.",
            },
            {
              icon: <MaterialIcons name="groups" size={32} color="#fff" />,
              title: "Conecte-se",
              description: "Encontre pessoas com interesses esportivos semelhantes aos seus.",
            },
            {
              icon: <MaterialIcons name="event" size={32} color="#fff" />,
              title: "Agende partidas",
              description: "Crie eventos e convide outros usuários para jogar.",
            },
            {
              icon: <MaterialIcons name="emoji-events" size={32} color="#fff" />,
              title: "Crie competições",
              description: "Organize torneios e campeonatos com seus amigos e outros usuários.",
            }
          ].map((item, index) => (
            <View key={index} className="flex-1 bg-card border rounded-xl overflow-hidden m-2">
              <View className="bg-gradient-to-r from-primary-sportlink to-red-500 p-6 items-center justify-center">
                <View className="w-16 h-16 rounded-full bg-primary-sportlink/40 items-center justify-center">
                  {item.icon}
                </View>
              </View>
              <View className="p-6 flex-1">
                <Text className="text-xl font-semibold mb-3 text-white">{item.title}</Text>
                <Text className="text-gray-400 flex-1">{item.description}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}
                  className="mt-4 flex-row items-center"
                >
                  <Text className="text-primary-sportlink font-medium">Começar agora</Text>
                  <MaterialIcons name="chevron-right" size={20} color="#FF4D4D" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}