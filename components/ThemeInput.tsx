import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps, KeyboardTypeOptions } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

interface ThemeInputProps extends TextInputProps {
  label: string;
  iconStart?: any;
  iconEnd?: any;
  type?: 'text' | 'password' | 'phone';
}

const ThemeInput: React.FC<ThemeInputProps> = ({
  label,
  iconStart,
  iconEnd,
  type = 'text',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== 'password');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('BR');
  const [callingCode, setCallingCode] = useState('+55');

  return (
    <View className="mb-4">
      <Text className={`mb-1 text-sm font-medium ${isFocused ? 'text-purple-800' : 'text-black'}`}>
        {label}
      </Text>
      <View
        className={`h-12 flex-row items-center rounded-xl border px-4 ${isFocused ? 'border-purple-700' : 'border-gray-400'}`}>
        {type === 'phone' && (
          <TouchableOpacity
            className="mr-2 flex-row items-center border-r border-gray-300 pr-4"
            onPress={() => setShowCountryPicker(true)}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              countryCode={countryCode}
              visible={showCountryPicker}
              onSelect={(country: Country) => {
                setCountryCode(country.cca2 as CountryCode);
                setCallingCode(`+${country.callingCode[0]}`);
                setShowCountryPicker(false);
              }}
            />
            <Text className="ml-2 text-black">{callingCode}</Text>
          </TouchableOpacity>
        )}

        {iconStart && <Icon name={iconStart} size={20} color={isFocused ? '#8f3edb' : '#aaa'} />}

        <TextInput
          className="ml-2 flex-1 text-white"
          placeholderTextColor="#aaa"
          secureTextEntry={type === 'password' && !isPasswordVisible}
          keyboardType={type === 'phone' ? 'phone-pad' : props.keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {type === 'password' ? (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={isFocused ? '#8f3edb' : '#aaa'}
            />
          </TouchableOpacity>
        ) : (
          iconEnd && <Icon name={iconEnd} size={20} color={isFocused ? '#8f3edb' : '#aaa'} />
        )}
      </View>
    </View>
  );
};

export default ThemeInput;