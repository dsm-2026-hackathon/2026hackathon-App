import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';
import { AuthButton } from '@/src/shared/ui/auth/auth-button';
import { AuthHeader } from '@/src/shared/ui/auth/auth-header';
import { AuthInput } from '@/src/shared/ui/auth/auth-input';
import { AuthScreen } from '@/src/shared/ui/auth/auth-screen';
import { AuthStepIndicator } from '@/src/shared/ui/auth/auth-step-indicator';

function formatSeconds(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function SignupEmailPage() {
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
  const canContinue = verified;

  return (
    <AuthScreen>
      <AuthHeader onBackPress={() => router.back()} />
      <AuthStepIndicator currentStep={2} />

      <View style={styles.body}>
        <Text style={styles.heading}>이메일을 입력해주세요.</Text>

        <View style={styles.emailRow}>
          <View style={styles.emailField}>
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
          <View style={styles.emailButton}>
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
          <View style={styles.codeWrap}>
            <AuthInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              onChangeText={setCode}
              placeholder="인증번호"
              rightElement={<Text style={styles.timer}>{formatSeconds(secondsLeft)}</Text>}
              value={code}
            />
          </View>
        ) : null}

        {verified ? <Text style={styles.successText}>이메일 인증 완료</Text> : null}

        <AuthButton disabled={!canContinue} onPress={() => router.push('/signup/password')}>
          다음
        </AuthButton>

        {requested ? (
          <View style={styles.resendRow}>
            <Text style={styles.resendText}>코드가 안왔나요?</Text>
            <Pressable
              onPress={() => {
                setSecondsLeft(180);
                setCode('');
                setVerified(false);
              }}>
              <Text style={styles.resendLink}>코드 재전송</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    paddingTop: 68,
    
  },
  heading: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    color: authColors.text,
    marginBottom: 68,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailField: {
    flex: 1,
  },
  emailButton: {
    width: 118,
    marginLeft: 10,
  },
  codeWrap: {
    marginTop: 18,
    marginBottom: 44,
  },
  timer: {
    fontSize: 14,
    color: authColors.danger,
    fontWeight: '500',
  },
  successText: {
    marginTop: -30,
    marginBottom: 18,
    fontSize: 14,
    color: authColors.success,
  },
  resendRow: {
    marginTop: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  resendText: {
    fontSize: 15,
    color: authColors.subtleText,
  },
  resendLink: {
    fontSize: 15,
    color: authColors.primary,
    fontWeight: '500',
  },
});
