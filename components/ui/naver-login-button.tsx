import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import NaverLogin from '@react-native-seoul/naver-login';

interface INaverLoginButtonProps {
  onSuccess: (token: string) => void;
  onError: (error: Error) => void;
}

interface NaverLoginResponse {
  isSuccess: boolean;
  successResponse?: {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    tokenType: string;
  };
}

const naverLoginConfig = {
  kConsumerKey: 'GFqdWep6ga34CrZJa7S5',
  kConsumerSecret: '7mU12CNXqp',
  kServiceAppName: '뮤밋',
};

const NaverLoginButton: React.FC<INaverLoginButtonProps> = ({ onSuccess, onError }) => {
  const handleLogin = async () => {
    try {
      const response = await NaverLogin.login() as NaverLoginResponse;
      console.log('Naver Login Success:', response);
      if (response.successResponse?.accessToken) {
        onSuccess(response.successResponse.accessToken);
      }
    } catch (error) {
      console.error('Naver Login Error:', error);
      onError(error as Error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.text}>네이버로 시작하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03C75A',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NaverLoginButton; 