import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchHeaderProps {
  onSearch: (text: string) => void;
}

export default function SearchHeader({ onSearch }: SearchHeaderProps) {
  return (
    <View className="bg-[#2a2a2a] mx-5 my-5 rounded-xl flex-row items-center p-2.5">
      <MaterialIcons name="search" size={24} color="#888" className="mr-2.5" />
      <TextInput
        placeholder="Procurar quadras próximas..."
        placeholderTextColor="#888"
        className="flex-1 text-white text-base"
        onChangeText={onSearch}
      />
      <TouchableOpacity>
        <MaterialIcons name="filter-list" size={24} color="#FF4D4D" />
      </TouchableOpacity>
    </View>
  );
}