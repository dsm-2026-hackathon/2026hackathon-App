import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authColors, authSpacing } from '@/src/shared/config/auth-theme';

type GoogleSigninButtonProps = {
  bordered?: boolean;
  onPress?: () => void;
};

export function GoogleSigninButton({
  bordered = true,
  onPress,
}: GoogleSigninButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, bordered && styles.bordered]}>
      <View style={styles.iconWrap}>
        <AntDesign name="google" size={28} color="#EA4335" />
      </View>
      <Text style={styles.text}>구글 계정으로 로그인하기</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: authSpacing.buttonHeight,
    borderRadius: authSpacing.radius,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  bordered: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#4A4A4A',
    backgroundColor: authColors.background,
  },
  iconWrap: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    color: authColors.text,
  },
});
