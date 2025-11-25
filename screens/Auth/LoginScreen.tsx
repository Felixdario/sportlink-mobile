import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationProp } from '../navigate/root';
import ThemeInput from '../../components/ThemeInput';
import ThemeProgressBar from '../../components/ThemeProgressBar';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    navigation.navigate('VerifyNumberScreen');
  };
 const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [userType, setUserType] = useState<"athlete" | "organizer">("athlete")

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
            // navigation.navigate("/organizer/dashboard")
          } else {
           // navigation.navigate("/dashboard")
          }
        } else if (email === "organizador@exemplo.com" && password === "senha123") {

          if (rememberMe) {
          }
          // navigation.navigate("/organizer/dashboard")
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
  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1a]">
      <ThemeProgressBar progress={0.5} color="#FF4D4D" height={6} />
      <View className="flex-1 px-6">
        <TouchableOpacity
          onPress={handleBack}
          className="absolute left-6 top-6">
          <Icon name="arrow-left" size={20} color="#FF4D4D" />
        </TouchableOpacity>

        <Text className="mt-12 text-xl font-bold text-white">Bem-vindo de volta!</Text>
        <Text className="mb-4 mt-2 text-sm text-gray-400">
          Faça login para continuar e acessar sua conta.
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
              color={isChecked ? '#FF4D4D' : '#aaa'}
            />
            <Text className={`ml-2 text-xs ${isChecked ? 'text-red-500' : 'text-white'}`}>
              Lembrar de mim?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-xs font-bold text-red-500">Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 pb-12">
        <TouchableOpacity
          onPress={handleLogin}
          className="rounded-full bg-red-500 py-3">
          <Text className="text-center text-lg font-bold text-white">
            Entrar na conta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;