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
    <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
          Criar Nova Competição
        </Text>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Nome da Competição *</Text>
          <View style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 15,
          }}>
            <TextInput
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Digite o nome da competição"
              placeholderTextColor="#666"
              style={{ color: '#fff' }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Esporte *</Text>
          <View style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 15,
          }}>
            <TextInput
              value={formData.sport}
              onChangeText={(text) => setFormData({ ...formData, sport: text })}
              placeholder="Digite o esporte"
              placeholderTextColor="#666"
              style={{ color: '#fff' }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Local *</Text>
          <View style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 15,
          }}>
            <TextInput
              value={formData.venue}
              onChangeText={(text) => setFormData({ ...formData, venue: text })}
              placeholder="Digite o local"
              placeholderTextColor="#666"
              style={{ color: '#fff' }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Data *</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={{ 
              backgroundColor: '#2a2a2a',
              borderRadius: 10,
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <MaterialIcons name="event" size={24} color="#FF4D4D" />
            <Text style={{ color: '#fff', marginLeft: 10 }}>
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

        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Número Máximo de Participantes</Text>
          <View style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 15,
          }}>
            <TextInput
              value={formData.maxParticipants}
              onChangeText={(text) => setFormData({ ...formData, maxParticipants: text })}
              placeholder="Digite o número máximo de participantes"
              placeholderTextColor="#666"
              keyboardType="numeric"
              style={{ color: '#fff' }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: '#fff', marginBottom: 5 }}>Descrição</Text>
          <View style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: 10,
            padding: 15,
          }}>
            <TextInput
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              placeholder="Digite a descrição da competição"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
              style={{ color: '#fff', textAlignVertical: 'top' }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleCreate}
          style={{
            backgroundColor: '#FF4D4D',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Criar Competição
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}