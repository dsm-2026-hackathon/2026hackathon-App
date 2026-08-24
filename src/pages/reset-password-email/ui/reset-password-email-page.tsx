import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AuthHeader } from '@/src/shared/ui/auth/auth-header';
import { AuthInput } from '@/src/shared/ui/auth/auth-input';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';

function formatSeconds(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function ResetPasswordEmailPage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [requested, setRequested] = useState(false);
  const [verified, setVerified] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(180);

  useEffect(() => {
    if (!requested || verified || secondsLeft === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [requested, verified, secondsLeft]);

  const canRequest = useMemo(() => email.trim().length > 0, [email]);
  const canVerify = requested && code.trim().length > 0;

  return (
    <AuthScreen>
      <AuthHeader onBackPress={() => router.back()} />

      <View style={styles.body}>
        <Text style={styles.heading}>비밀번호를 변경하기 위한{'\n'}계정 정보를 입력해주세요.</Text>

        <View style={styles.form}>
          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <AuthInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(value) => {
                  setEmail(value);
                  setVerified(false);
                }}
                placeholder="이메일"
                value={email}
              />
            </View>
            <View style={styles.buttonWrap}>
              <AuthButton
                disabled={!canRequest}
                onPress={() => {
                  if (!requested) {
                    setRequested(true);
                    setSecondsLeft(180);
                    return;
                  }

                  if (canVerify) {
                    setVerified(true);
                  }
                }}>
                {requested ? '확인' : '인증하기'}
              </AuthButton>
            </View>
          </View>

          {requested ? (
            <AuthInput
              keyboardType="number-pad"
              onChangeText={setCode}
              placeholder="인증번호"
              rightElement={<Text style={styles.timer}>{formatSeconds(secondsLeft)}</Text>}
              value={code}
            />
          ) : null}

          {verified ? <Text style={styles.success}>이메일 인증 완료</Text> : null}
        </View>

        <AuthButton disabled={!verified} onPress={() => router.push('/reset-password/new-password')}>
          다음
        </AuthButton>
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  heading: {
    fontSize: 22,
    lineHeight: 34,
    fontWeight: '700',
    color: authColors.text,
    marginTop: 28,
    marginBottom: 48,
  },
  form: {
    gap: 16,
    marginBottom: 36,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  inputWrap: {
    flex: 1,
  },
  buttonWrap: {
    width: 118,
  },
  timer: {
    fontSize: 14,
    color: authColors.danger,
    fontWeight: '500',
  },
  success: {
    fontSize: 14,
    color: authColors.success,
  },
});
