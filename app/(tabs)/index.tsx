import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginPrompt from '../../components/ui/login-prompt';
import { useState } from 'react';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const [loginPromptVisible, setLoginPromptVisible] = useState(false);

  const handleLoginRequired = () => {
    setLoginPromptVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginPrompt 
        visible={loginPromptVisible}
        onClose={() => setLoginPromptVisible(false)}
      />
      {/* 상단 바 */}
      <View style={styles.header}>
        <Text style={styles.logoText}>뮤밋</Text>
        <TouchableOpacity onPress={handleLoginRequired}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* 메인 버튼 영역 */}
        <View style={styles.mainButtons}>
          {/* 의뢰존 버튼 */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => {
              router.push('/request');
            }}
          >
            <LinearGradient
              colors={['#FF6B6B', '#DD797C']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonTitle}>의뢰존</Text>
              <Text style={styles.buttonSubtitle}>믹싱·마스터링·작곡 의뢰</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* 팀업존 버튼 */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => {
              router.push('/teamup');
            }}
          >
            <LinearGradient
              colors={['#4A90E2', '#357ABD']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonTitle}>팀업존</Text>
              <Text style={styles.buttonSubtitle}>음악 파트너 & 프로젝트 모집</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* 실시간 프로젝트 섹션 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="flash" size={20} color="#000" />
              <Text style={styles.sectionTitle}>실시간 프로젝트</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.projectScroll}
          >
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.projectCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTag}>믹싱</Text>
                  <Text style={styles.cardBudget}>50만원</Text>
                </View>
                <Text style={styles.projectTitle}>프로젝트 제목이 들어갑니다</Text>
                <Text style={styles.projectDesc} numberOfLines={2}>
                  프로젝트 설명이 들어갑니다. 두 줄까지 표시됩니다.
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.deadline}>방금 전</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 내 프로젝트 섹션 */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="musical-notes" size={20} color="#000" />
              <Text style={styles.sectionTitle}>내 프로젝트</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.projectScroll}
          >
            {[1, 2].map((item) => (
              <TouchableOpacity key={item} style={styles.projectCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTag}>작업중</Text>
                </View>
                <Text style={styles.projectTitle}>진행중인 프로젝트</Text>
                <Text style={styles.projectDesc} numberOfLines={2}>
                  현재 진행중인 프로젝트 설명입니다.
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.deadline}>진행률 75%</Text>
                  <TouchableOpacity>
                    <Text style={styles.chatButton}>채팅하기</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBar, { width: '75%' }]} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logoText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  scrollView: {
    flex: 1,
  },
  mainButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  mainButton: {
    flex: 1,
    height: width * 0.4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  buttonSubtitle: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 15,
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  seeAll: {
    color: '#DD797C',
    fontSize: 14,
  },
  projectScroll: {
    paddingLeft: 16,
  },
  projectCard: {
    width: width * 0.75,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTag: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 13,
    color: '#666',
  },
  cardBudget: {
    color: '#DD797C',
    fontWeight: '600',
    fontSize: 15,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  deadline: {
    fontSize: 13,
    color: '#999',
  },
  chatButton: {
    color: '#DD797C',
    fontSize: 13,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#DD797C',
    borderRadius: 2,
  },
}); 