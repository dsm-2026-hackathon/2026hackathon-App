import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AuthHeader } from '@/src/shared/ui/auth/auth-header';
import { AuthInput } from '@/src/shared/ui/auth/auth-input';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';
import { AuthStepIndicator } from '@/src/shared/ui/auth/auth-step-indicator';

export function SignupNicknamePage() {
  const [nickname, setNickname] = useState('');
  const [checked, setChecked] = useState(false);

  const canCheck = useMemo(() => nickname.trim().length > 0, [nickname]);
  const canContinue = canCheck && checked;

  return (
    <AuthScreen>
      <AuthHeader onBackPress={() => router.back()} />
      <AuthStepIndicator currentStep={1} />

      <View style={styles.body}>
        <Text style={styles.heading}>앞으로 사용할{'\n'}닉네임을 입력해주세요.</Text>

        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <AuthInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(value) => {
                setNickname(value);
                setChecked(false);
              }}
              placeholder="닉네임 입력"
              value={nickname}
            />
          </View>
          <View style={styles.buttonWrap}>
            <AuthButton disabled={!canCheck} onPress={() => setChecked(true)}>
              중복 확인
            </AuthButton>
          </View>
        </View>

        <Text style={[styles.helper, checked && styles.helperSuccess]}>
          {checked ? '사용 가능한 닉네임입니다.' : '영문 닉네임 기준으로 입력해주세요.'}
        </Text>

        <AuthButton disabled={!canContinue} onPress={() => router.push('/signup/email')}>
          다음
        </AuthButton>
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  heading: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    color: authColors.text,
    marginBottom: 34,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputWrap: {
    flex: 1,
  },
  buttonWrap: {
    width: 118,
  },
  helper: {
    marginTop: 12,
    marginBottom: 28,
    fontSize: 14,
    color: authColors.subtleText,
  },
  helperSuccess: {
    color: authColors.success,
  },
});
