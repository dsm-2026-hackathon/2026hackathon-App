import type { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { authColors, authSpacing } from '@/src/shared/config/auth-theme';

type Variant = 'primary' | 'secondary' | 'ghost';

type AuthButtonProps = PropsWithChildren<{
  onPress?: () => void;
  disabled?: boolean;
  variant?: Variant;
}>;

export function AuthButton({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
}: AuthButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && variant === 'primary' ? styles.primaryPressed : null,
      ]}>
      <Text
        style={[
          styles.label,
          variant === 'secondary' || variant === 'ghost' ? styles.secondaryLabel : null,
        ]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: authSpacing.buttonHeight,
    borderRadius: authSpacing.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: authColors.primary,
  },
  secondary: {
    backgroundColor: authColors.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#4A4A4A',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: authColors.disabled,
    borderColor: authColors.disabled,
  },
  primaryPressed: {
    backgroundColor: authColors.primaryPressed,
  },
  label: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryLabel: {
    color: authColors.text,
  },
});
