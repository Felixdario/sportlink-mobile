import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import ThemeProgressBar from '../../components/ThemeProgressBar';
import { NavigationProp } from '../navigate/root';

const CELL_COUNT = 6;

const VerifyNumberScreen = () => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const props = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  const handleResendCode = () => {
    setTimer(60);
    setIsResendEnabled(false);
    console.log('Reenviando código...');
  };

  const handleVerifyCode = () => {
    console.log('Código enviado:', value);
    navigation.navigate('MainTabs');
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-[#1a1a1a]">
        <ThemeProgressBar progress={0.6} color="#FF4D4D" height={6} />
        <View className="flex-1 p-6">
          <Text className="mt-8 text-lg font-bold text-white">Inserir Código de Verificação</Text>
          <Text className="mt-2 text-gray-400">
            Insira o código de 6 dígitos enviado para o email cadastrado: emai.....@gmail.com
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="default"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                className={`mt-16 h-14 w-10 border-b-2 ${isFocused ? 'border-red-600' : 'border-gray-300'} text-center text-white text-2xl`}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
            className="mt-6 flex-row justify-center space-x-3"
          />

          <Text className="mt-6 text-center font-bold text-gray-400">
            {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ''}
          </Text>
          {isResendEnabled ? (
            <TouchableOpacity onPress={handleResendCode}>
              <Text className="mt-2 text-center font-bold text-red-600">
                Não recebeu o código? Reenviar
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="mt-4 text-center text-gray-400">Não recebeu o código?</Text>
          )}
        </View>

        <View className="absolute bottom-12 left-0 right-0 p-6">
          <TouchableOpacity
            onPress={handleVerifyCode}
            disabled={value.length !== 6}
            className={`flex rounded-full ${value.length === 6 ? 'bg-red-500' : 'bg-gray-400'} py-3`}>
            <Text className="text-center text-lg font-bold text-white">Enviar código</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default VerifyNumberScreen;