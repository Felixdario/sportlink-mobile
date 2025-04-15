import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchHeaderProps {
  onSearch: (text: string) => void;
}

export default function SearchHeader({ onSearch }: SearchHeaderProps) {
  return (
    <View style={{ 
      backgroundColor: '#2a2a2a',
      margin: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    }}>
      <MaterialIcons name="search" size={24} color="#888" style={{ marginRight: 10 }} />
      <TextInput
        placeholder="Procurar quadras próximas..."
        placeholderTextColor="#888"
        style={{
          flex: 1,
          color: '#fff',
          fontSize: 16,
        }}
        onChangeText={onSearch}
      />
      <TouchableOpacity>
        <MaterialIcons name="filter-list" size={24} color="#FF4D4D" />
      </TouchableOpacity>
    </View>
  );
}