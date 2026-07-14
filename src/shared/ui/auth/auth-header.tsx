import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';

type AuthHeaderProps = {
  title?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
};

export function AuthHeader({
  title,
  onBackPress,
  showBackButton = true,
}: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <Pressable
          accessibilityLabel="뒤로가기"
          hitSlop={10}
          onPress={onBackPress ?? (() => router.back())}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={38} color={authColors.text} />
        </Pressable>
      ) : (
        <View style={styles.backSpacer} />
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <View style={styles.titleSpacer} />}
      <View style={styles.backSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 6,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backSpacer: {
    width: 44,
    height: 44,
  },
  title: {
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '400',
    color: authColors.text,
    letterSpacing: 0.4,
  },
  titleSpacer: {
    flex: 1,
  },
});
