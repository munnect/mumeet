import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import LoginPrompt from '../../components/ui/login-prompt';

export default function FavoritesScreen() {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>관심 목록</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>관심 뮤지션</Text>
          {/* 여기에 관심 표시한 뮤지션 목록이 들어갈 예정 */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>관심 프로젝트</Text>
          {/* 여기에 관심 표시한 프로젝트 목록이 들어갈 예정 */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
}); 