import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import ThemeInput from '../../components/ThemeInput';
import ThemeProgressBar from '../../components/ThemeProgressBar';
import { NavigationProp } from '../navigate/root';
import { MaterialIcons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation<NavigationProp>();
const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [userType, setUserType] = useState<"athlete" | "organizer">("athlete")
  const sportsOptions = [
    { label: 'Futebol', value: 'futebol' },
    { label: 'Corrida', value: 'corrida' },
    { label: 'Basquete', value: 'basquete' },
    { label: 'Vôlei', value: 'volei' },
    { label: 'Ciclismo', value: 'ciclismo' },
  ];
  const [mainSport, setMainSport] = useState<string>('futebol')

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateForm = () => {
    if (!email.trim()) {
      setError("O email é obrigatório")
      return false
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, insira um email válido")
      return false
    }

    if (!password) {
      setError("A senha é obrigatória")
      return false
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulando autenticação
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Verificação simulada de credenciais
      if (email === "teste@exemplo.com" && password === "senha123") {


        // Redirecionar baseado no tipo de usuário
        if (userType === "organizer") {
          // navigation.push("/organizer/dashboard")
        } else {
          // navigation.push("/dashboard")
        }
      } else if (email === "organizador@exemplo.com" && password === "senha123") {

        if (rememberMe) {
        }
        // navigation.push("/organizer/dashboard")
      } else {
        setError("Email ou senha incorretos")
      }
    } catch (err) {
      setError("Ocorreu um erro ao fazer login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  // Preencher email se "lembrar-me" estiver ativo
  useEffect(() => {
    if (rememberMe) {
      setEmail(email)
    }
  }, [rememberMe])

  if (!mounted) {
    return null
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    navigation.navigate('VerifyNumberScreen');
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-[#1a1a1a]">
      <ThemeProgressBar progress={0.5} color="#FF4D4D" height={6} />
      <View className="flex-1 px-6">
        <TouchableOpacity
          onPress={handleBack}
          className="absolute left-6 top-6">
          <Icon name="arrow-left" size={20} color="#FF4D4D" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          className="absolute right-6 top-6">
          <Text className="text-sm font-medium text-white">Já Tem conta?</Text>
        </TouchableOpacity>
        <Text className="mt-12 text-start text-xl font-bold text-white">Corra, acompanhe, evolua!</Text>
        <Text className="mb-4 mt-2 text-start text-sm text-gray-400">
          Junte-se a nós para monitorar suas corridas, definir metas e superar seus limites.
        </Text>
          <View className="mt-4 mb-4">
              <Text className="text-sm font-medium text-white">Tipo de conta</Text>
              <View className="flex-row gap-2 mt-2">
              <TouchableOpacity
                onPress={() => setUserType("athlete")}
                className={`flex-1 rounded-lg py-3 flex-row items-center justify-center ${userType === "athlete" ? "bg-red-500" : "bg-transparent border border-red-500"}`}
                activeOpacity={0.8}
              >
                <Text className={`text-lg font-bold mr-2.5 ${userType === "athlete" ? "text-white" : "text-red-500"}`}>
                  Atleta
                </Text>
                <MaterialIcons name="account-circle" size={24} color={userType === "athlete" ? "#fff" : "#FF4D4D"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setUserType("organizer")}
                className={`flex-1 rounded-lg py-3 flex-row items-center justify-center ${userType === "organizer" ? "bg-red-500" : "bg-transparent border border-red-500"}`}
                activeOpacity={0.8}
              >
                <Text className={`text-lg font-bold mr-2.5 ${userType === "organizer" ? "text-white" : "text-red-500"}`}>
                  Organizador
                </Text>
                <MaterialIcons name="sports-soccer" size={24} color={userType === "organizer" ? "#fff" : "#FF4D4D"} />
              </TouchableOpacity>
            </View>
            </View>
        <ThemeInput label="Nome" placeholder="Digite seu Nome" iconStart="account" />
        <ThemeInput
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
          iconStart="email-outline"
        />
        <ThemeInput
          label="Esporte Principal"
          placeholder="Selecione seu esporte"
          iconStart="trophy"
          type="select"
          options={sportsOptions}
          value={mainSport}
          onChangeText={(value: string) => setMainSport(value)}
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
            color={isChecked ? '#FF4D4D' : '#aaa'}
          />
          <Text className={`ml-2 flex-1 text-xs ${isChecked ? 'text-red-500' : 'text-white'}`}>
            Sim, concordo em receber ofertas e atualizações sobre produtos e serviços.
          </Text>
        </TouchableOpacity>
        <View className="absolute bottom-0 left-0 right-0 p-6">
          <TouchableOpacity
            onPress={handleRegister}
            className="flex rounded-full bg-red-500 py-3">
            <Text className="text-center text-lg font-bold text-white">Criar conta</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;