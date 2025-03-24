import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import LoginPrompt from '../../components/ui/login-prompt';

export default function ProfileScreen() {
  const [loginPromptVisible, setLoginPromptVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 실제 로그인 체크 로직은 나중에 추가
    const isLoggedIn = false;
    if (!isLoggedIn) {
      setLoginPromptVisible(true);
    }
  }, []);

  if (loginPromptVisible) {
    return (
      <SafeAreaView style={styles.container}>
        <LoginPrompt
          visible={loginPromptVisible}
          onClose={() => setLoginPromptVisible(false)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프로필</Text>
      </View>
      <View style={styles.content}>
        <Text>프로필 화면입니다.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
}); 