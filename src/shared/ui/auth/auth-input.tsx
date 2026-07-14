import type { ComponentProps, ReactNode } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { authColors, authSpacing } from '@/src/shared/config/auth-theme';

type AuthInputProps = ComponentProps<typeof TextInput> & {
  rightElement?: ReactNode;
};

export function AuthInput({ rightElement, style, ...props }: AuthInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={authColors.mutedText}
        style={[styles.input, rightElement ? styles.inputWithRight : undefined, style]}
        {...props}
      />
      {rightElement ? <View style={styles.rightElement}>{rightElement}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    width: '100%',
    height: authSpacing.inputHeight,
    borderRadius: authSpacing.radius,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: authColors.border,
    backgroundColor: authColors.background,
    paddingHorizontal: 16,
    fontSize: 16,
    color: authColors.text,
  },
  inputWithRight: {
    paddingRight: 92,
  },
  rightElement: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
