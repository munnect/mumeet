import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const handleLoginPrompt = () => {
    alert('로그인이 필요한 서비스입니다.');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.logoText}>MU:MEET</Text>
        <TouchableOpacity onPress={handleLoginPrompt}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* 메인 버튼 영역 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.zoneButton, { backgroundColor: '#DD797C' }]}
          onPress={() => router.push('/(tabs)/explore')}
        >
          <Text style={styles.buttonText}>의뢰존</Text>
          <Text style={styles.buttonSubText}>작곡, 믹싱 등 의뢰하기</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.zoneButton, { backgroundColor: '#DD797C' }]}
          onPress={() => router.push('/(tabs)/explore')}
        >
          <Text style={styles.buttonText}>팀업존</Text>
          <Text style={styles.buttonSubText}>프로젝트 팀원 구하기</Text>
        </TouchableOpacity>
      </View>

      {/* 하단 탭바 */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.plusButton}
          onPress={handleLoginPrompt}
        >
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>

        <View style={styles.rightButtons}>
          <TouchableOpacity 
            style={styles.tabButton} 
            onPress={handleLoginPrompt}
          >
            <Ionicons name="chatbubbles-outline" size={24} color="#333" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.tabButton} 
            onPress={handleLoginPrompt}
          >
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DD797C',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  zoneButton: {
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonSubText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  rightButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  tabButton: {
    paddingHorizontal: 10,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DD797C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  plusButtonText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
