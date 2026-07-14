import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AppLogoMark } from '@/src/shared/ui/auth/app-logo-mark';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';

export function AuthStartPage() {
  return (
    <AuthScreen scroll={false}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <AppLogoMark />
          <Text style={styles.subtitle}>지역 상권을 지키는{'\n'}가장 쉬운 방법</Text>
          <Text style={styles.title}>이어가게</Text>
        </View>

        <View style={styles.footer}>
          <AuthButton onPress={() => router.push('/login')}>로그인 하기</AuthButton>
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>아직 계정이 없나요?</Text>
            <Pressable onPress={() => router.push('/signup/nickname')}>
              <Text style={styles.signupLink}>회원가입</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 92,
    paddingBottom: 54,
  },
  hero: {
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
    color: authColors.text,
  },
  title: {
    marginTop: 18,
    fontSize: 58,
    lineHeight: 68,
    fontWeight: '700',
    color: authColors.primary,
    letterSpacing: -1.2,
  },
  footer: {
    paddingHorizontal: 0,
  },
  signupRow: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  signupText: {
    fontSize: 17,
    color: authColors.subtleText,
  },
  signupLink: {
    fontSize: 17,
    color: authColors.primary,
    fontWeight: '500',
  },
});
