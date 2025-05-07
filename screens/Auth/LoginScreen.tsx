import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import ThemeInput from '../../components/ThemeInput';
import ThemeProgressBar from '../../components/ThemeProgressBar';

const LoginScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    navigation.navigate('VerifyNumberScreen' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1a]">
      <ThemeProgressBar progress={0.5} color="#8f3edb" height={6} />
      <View className="flex-1 px-6">
        <TouchableOpacity
          onPress={handleBack}
          className="absolute left-6 top-6">
          <Icon name="arrow-left" size={20} color="#8f3edb" />
        </TouchableOpacity>

        <Text className="mt-12 text-xl font-bold">Bem-vindo de volta!</Text>
        <Text className="mb-4 mt-2 text-sm text-gray-500">
          Faça login para continuar e acessar sua conta.
        </Text>

        <ThemeInput
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
          iconStart="email-outline"
        />
        <ThemeInput
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          iconStart="lock-outline"
        />

        <View className="mt-4 flex-row items-center justify-between">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => setIsChecked(!isChecked)}>
            <Icon
              name={isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
              size={20}
              color={isChecked ? '#8f3edb' : '#aaa'}
            />
            <Text className={`ml-2 text-xs ${isChecked ? 'text-purple-600' : 'text-black'}`}>
              Lembrar de mim?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-xs font-bold text-purple-500">Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 pb-12">
        <TouchableOpacity
          onPress={handleLogin}
          className="rounded-full bg-purple-800 py-3">
          <Text className="text-center text-lg font-bold text-white">
            Entrar na conta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;