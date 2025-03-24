import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { login } from '@react-native-seoul/kakao-login';

interface IKakaoLoginButtonProps {
  onLoginSuccess: (token: string) => void;
  onLoginError: (error: Error) => void;
}

const KakaoLoginButton: React.FC<IKakaoLoginButtonProps> = ({ onLoginSuccess, onLoginError }) => {
  const handleLogin = async () => {
    try {
      const token = await login();
      console.log('Kakao Login Success:', token);
      onLoginSuccess(token.accessToken);
    } catch (error) {
      console.error('Kakao Login Error:', error);
      onLoginError(error as Error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.text}>카카오로 시작하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FEE500',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default KakaoLoginButton; 