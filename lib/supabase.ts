import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// 소셜 로그인 타입
export type Provider = 'kakao' | 'naver';

// 소셜 로그인 함수
export const signInWithProvider = async (provider: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider as any, // Provider 타입 호환성 문제 해결을 위한 타입 단언
    options: {
      redirectTo: 'mumeet://',
    },
  });
  return { data, error };
};

// 로그아웃 함수
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
}; 