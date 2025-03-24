import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import KakaoLoginButton from '../../components/ui/kakao-login-button';
import NaverLoginButton from '../../components/ui/naver-login-button';

interface ILoginButtonProps {
  onLoginSuccess: (token: string) => void;
  onLoginError: (error: Error) => void;
}

export default function LoginScreen() {
  const router = useRouter();

  const handleLoginSuccess = (token: string, provider: 'kakao' | 'naver') => {
    console.log(`${provider} Login Success:`, token);
    // TODO: 토큰을 서버에 전송하여 검증하고 사용자 정보를 가져오는 로직 구현
    router.replace('/(tabs)');
  };

  const handleLoginError = (error: Error, provider: 'kakao' | 'naver') => {
    console.error(`${provider} Login Error:`, error);
    // TODO: 에러 처리 로직 구현 (예: 에러 메시지 표시)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>뮤밋</Text>
          <Text style={styles.subtitle}>뮤지션들의 만남의 장</Text>
        </View>

        <View style={styles.buttonContainer}>
          <KakaoLoginButton 
            onLoginSuccess={(token) => handleLoginSuccess(token, 'kakao')}
            onLoginError={(error) => handleLoginError(error, 'kakao')}
          />
          <NaverLoginButton 
            onSuccess={(token) => handleLoginSuccess(token, 'naver')}
            onError={(error) => handleLoginError(error, 'naver')}
          />
        </View>

        <Text style={styles.terms}>
          계속 진행하면 뮤밋의{'\n'}
          서비스 이용약관과 개인정보 처리방침에{'\n'}
          동의하는 것으로 간주합니다
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  header: {
    alignItems: 'center',
    marginTop: 48,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000000',
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 12,
  },
  terms: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
  },
}); 