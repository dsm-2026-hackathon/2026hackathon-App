import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이어가게 홈</Text>
      <Text style={styles.description}>
        인증 퍼블리싱 이후에 연결될 메인 화면 자리입니다.
      </Text>
      <Pressable onPress={() => router.replace('/')} style={styles.button}>
        <Text style={styles.buttonText}>시작화면으로 돌아가기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  description: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#666666',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#6574F6',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
