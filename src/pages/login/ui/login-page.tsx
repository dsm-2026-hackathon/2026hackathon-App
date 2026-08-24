import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AuthHeader } from '@/src/shared/ui/auth/auth-header';
import { AuthInput } from '@/src/shared/ui/auth/auth-input';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';
import { GoogleSigninButton } from '@/src/shared/ui/auth/google-signin-button';

export function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = useMemo(
    () => identifier.trim().length > 0 && password.trim().length > 0,
    [identifier, password],
  );

  return (
    <AuthScreen>
      <AuthHeader onBackPress={() => router.replace('/')} title="LOGIN" />

      <View style={styles.body}>
        <View style={styles.form}>
          <AuthInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={setIdentifier}
            placeholder="아이디(이메일)"
            value={identifier}
          />
          <AuthInput
            onChangeText={setPassword}
            placeholder="비밀번호"
            secureTextEntry
            value={password}
          />
          <AuthButton disabled={!canLogin} onPress={() => router.replace('/(tabs)')}>
            로그인하기
          </AuthButton>
          <GoogleSigninButton bordered onPress={() => {}} />
        </View>

        <View style={styles.bottom}>
          <AuthButton onPress={() => router.push('/signup/nickname')} variant="secondary">
            계정이 없으신가요? 간편 가입하기
          </AuthButton>
          <Pressable onPress={() => router.push('/reset-password')}>
            <Text style={styles.resetText}>비밀번호 재설정</Text>
          </Pressable>
        </View>
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 19,
    paddingTop: 70,
    justifyContent: 'space-between',
    paddingBottom: 42,
  },
  form: {
    gap: 12,
  },
  bottom: {
    gap: 66,
  },
  resetText: {
    textAlign: 'center',
    fontSize: 15,
    color: authColors.subtleText,
  },
});
