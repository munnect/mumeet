import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth';
import { supabase } from '@/lib/supabase';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function RootLayout() {
  const { setUser } = useAuthStore();

  React.useEffect(() => {
    // Supabase 인증 상태 변경 감지
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // 사용자 프로필 정보 가져오기
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        setUser(profile);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{
            title: '로그인',
            headerShown: false
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
