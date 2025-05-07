import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { toast } from 'sonner-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateCompetitionScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    venue: '',
    date: new Date(),
    maxParticipants: '',
    description: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCreate = () => {
    if (!formData.name || !formData.sport || !formData.venue) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    toast.success('Competição criada com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-[#1a1a1a]">
      <View className="p-5">
        <Text className="text-white text-2xl font-bold mb-5">
          Criar Nova Competição
        </Text>

        <View className="mb-5">
          <Text className="text-white mb-1">Nome da Competição *</Text>
          <View className="bg-[#2a2a2a] rounded-xl p-4">
            <TextInput
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Digite o nome da competição"
              placeholderTextColor="#666"
              className="text-white"
            />
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-white mb-1">Esporte *</Text>
          <View className="bg-[#2a2a2a] rounded-xl p-4">
            <TextInput
              value={formData.sport}
              onChangeText={(text) => setFormData({ ...formData, sport: text })}
              placeholder="Digite o esporte"
              placeholderTextColor="#666"
              className="text-white"
            />
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-white mb-1">Local *</Text>
          <View className="bg-[#2a2a2a] rounded-xl p-4">
            <TextInput
              value={formData.venue}
              onChangeText={(text) => setFormData({ ...formData, venue: text })}
              placeholder="Digite o local"
              placeholderTextColor="#666"
              className="text-white"
            />
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-white mb-1">Data *</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="bg-[#2a2a2a] rounded-xl p-4 flex-row items-center"
          >
            <MaterialIcons name="event" size={24} color="#FF4D4D" />
            <Text className="text-white ml-2.5">
              {formData.date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={formData.date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setFormData({ ...formData, date: selectedDate });
              }
            }}
          />
        )}

        <View className="mb-5">
          <Text className="text-white mb-1">Número Máximo de Participantes</Text>
          <View className="bg-[#2a2a2a] rounded-xl p-4">
            <TextInput
              value={formData.maxParticipants}
              onChangeText={(text) => setFormData({ ...formData, maxParticipants: text })}
              placeholder="Digite o número máximo de participantes"
              placeholderTextColor="#666"
              keyboardType="numeric"
              className="text-white"
            />
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-white mb-1">Descrição</Text>
          <View className="bg-[#2a2a2a] rounded-xl p-4">
            <TextInput
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              placeholder="Digite a descrição da competição"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
              className="text-white"
              textAlignVertical="top"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleCreate}
          className="bg-[#FF4D4D] p-4 rounded-xl items-center"
        >
          <Text className="text-white text-base font-bold">
            Criar Competição
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}