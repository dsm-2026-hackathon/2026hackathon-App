import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AuthHeader } from '@/src/shared/ui/auth/auth-header';
import { AuthInput } from '@/src/shared/ui/auth/auth-input';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';
import { AuthStepIndicator } from '@/src/shared/ui/auth/auth-step-indicator';

export function SignupPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isMatch = useMemo(
    () => password.length > 0 && password === confirmPassword,
    [confirmPassword, password],
  );

  const canSubmit = isMatch;

  return (
    <AuthScreen>
      <AuthHeader onBackPress={() => router.back()} />
      <AuthStepIndicator currentStep={3} />

      <View style={styles.body}>
        <Text style={styles.heading}>비밀번호를 입력해주세요.</Text>

        <View style={styles.form}>
          <AuthInput
            onChangeText={setPassword}
            placeholder="비밀번호 입력"
            secureTextEntry
            value={password}
          />
          <AuthInput
            onChangeText={setConfirmPassword}
            placeholder="비밀번호 확인"
            secureTextEntry
            value={confirmPassword}
          />
          <Text style={[styles.helper, isMatch && styles.helperSuccess]}>
            {isMatch ? '비밀번호 일치' : '비밀번호를 동일하게 입력해주세요.'}
          </Text>
        </View>

        <AuthButton disabled={!canSubmit} onPress={() => router.replace('/login')}>
          완료
        </AuthButton>
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    color: authColors.text,
    marginBottom: 66,
  },
  form: {
    gap: 16,
    marginBottom: 42,
  },
  helper: {
    marginTop: -10,
    fontSize: 14,
    color: authColors.subtleText,
  },
  helperSuccess: {
    color: authColors.success,
  },
});
