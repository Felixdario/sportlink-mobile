import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import ThemeInput from '../../components/ThemeInput';
import ThemeProgressBar from '../../components/ThemeProgressBar';

const RegisterScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    navigation.navigate('VerifyNumberScreen' as never);
  };

  return (
    <>
      <ThemeProgressBar progress={0.2} color="#8f3edb" height={6} />
      <View className="flex-1 justify-start bg-[#1a1a1a] p-6">
        <TouchableOpacity
          onPress={handleBack}
          className="absolute left-6 top-6 flex items-center space-x-2">
          <Icon name="arrow-left" size={20} color="#8f3edb" />
        </TouchableOpacity>

        <Text className="mt-12 text-start text-xl font-bold">Corra, acompanhe, evolua!</Text>
        <Text className="mb-4 mt-2 text-start text-sm text-gray-500">
          Junte-se a nós para monitorar suas corridas, definir metas e superar seus limites.
        </Text>

        <ThemeInput label="Nome" placeholder="Digite seu Nome" iconStart="account" />
        <ThemeInput
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
          iconStart="email-outline"
        />
        <ThemeInput
          label="Telefone"
          placeholder="Digite seu Telefone"
          keyboardType="phone-pad"
          type="phone"
          iconStart="phone"
        />
        <ThemeInput
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          iconStart="lock-outline"
        />
        <TouchableOpacity
          className="mt-4 flex-row items-center"
          onPress={() => setIsChecked(!isChecked)}>
          <Icon
            name={isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
            size={20}
            color={isChecked ? '#8f3edb' : '#aaa'}
          />
          <Text className={`ml-2 flex-1 text-xs ${isChecked ? 'text-purple-600' : 'text-black'}`}>
            Sim, concordo em receber ofertas e atualizações sobre produtos e serviços.
          </Text>
        </TouchableOpacity>
        <View className="absolute bottom-12 left-0 right-0 bg-white p-6">
          <TouchableOpacity
            onPress={handleRegister}
            className="flex rounded-full bg-purple-800 py-3">
            <Text className="text-center text-lg font-bold text-white">Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;