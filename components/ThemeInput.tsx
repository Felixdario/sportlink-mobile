import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps, Modal, TouchableWithoutFeedback } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';

interface Option {
  label: string;
  value: string;
}

interface ThemeInputProps extends TextInputProps {
  label: string;
  iconStart?: any;
  iconEnd?: any;
  type?: 'text' | 'password' | 'phone' | 'select'; // Adicione 'select'
  options?: Option[]; // Adicione esta prop
  value?: string; // Para o select funcionar corretamente
  onValueChange?: (value: string) => void; // Para o select funcionar corretamente
}

const ThemeInput: React.FC<ThemeInputProps> = ({
  label,
  iconStart,
  iconEnd,
  type = 'text',
  options = [],
  value,
  onValueChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== 'password');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('BR');
  const [callingCode, setCallingCode] = useState('+55');
  const [showSelect, setShowSelect] = useState(false);

  return (
    <View className="mb-4">
      <Text className={`mb-1 text-sm font-medium ${isFocused ? 'text-red-600' : 'text-white'}`}>
        {label}
      </Text>
      <View
        className={`h-12 flex-row items-center rounded-xl border px-4 ${isFocused ? 'border-red-500' : 'border-gray-400'}`}>
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
            <Text className="ml-2 text-white">{callingCode}</Text>
          </TouchableOpacity>
        )}

        {iconStart && <Icon name={iconStart} size={20} color={isFocused ? '#FF4D4D' : '#aaa'} />}

        {type === 'select' ? (
          <>
            <TouchableOpacity
              style={{ flex: 1, marginLeft: 8, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                setShowSelect(true);
                setIsFocused(true);
              }}
            >
              <Text style={{ color: value ? '#fff' : '#aaa', flex: 1 }}>
                {options.find((o) => o.value === value)?.label || 'Selecione'}
              </Text>
              <Icon name="chevron-down" size={20} color="#FF4D4D" />
            </TouchableOpacity>
            <Modal
              visible={showSelect}
              transparent
              animationType="slide"
              onRequestClose={() => {
                setShowSelect(false);
                setIsFocused(false);
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowSelect(false);
                  setIsFocused(false);
                }}
              >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center' }}>
                  <TouchableWithoutFeedback>
                    <View style={{
                      backgroundColor: '#222',
                      margin: 32,
                      borderRadius: 12,
                      padding: 16,
                      justifyContent: 'center'
                    }}>
                      <Picker
                        selectedValue={value ?? ""}
                        style={{ color: '#fff' }}
                        dropdownIconColor="#FF4D4D"
                        onValueChange={(itemValue) => {
                          if (itemValue) {
                            onValueChange && onValueChange(itemValue);
                            setShowSelect(false);
                            setIsFocused(false);
                          }
                        }}
                      >
                        <Picker.Item label="Selecione" value="" color="#aaa" />
                        {options.map((option) => (
                          <Picker.Item key={option.value} label={option.label} value={option.value} />
                        ))}
                      </Picker>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </>
        ) : (
          <TextInput
            className="ml-2 flex-1 text-white"
            placeholderTextColor="#aaa"
            secureTextEntry={type === 'password' && !isPasswordVisible}
            keyboardType={type === 'phone' ? 'phone-pad' : props.keyboardType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        )}

        {type === 'password' ? (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={isFocused ? '#FF4D4D' : '#aaa'}
            />
          </TouchableOpacity>
        ) : (
          iconEnd && <Icon name={iconEnd} size={20} color={isFocused ? '#FF4D4D' : '#aaa'} />
        )}
      </View>
    </View>
  );
};

export default ThemeInput;