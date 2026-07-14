import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';

export function AppLogoMark() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.loopLeft} />
      <View style={styles.loopRight} />
      <View style={styles.pin}>
        <Ionicons name="location-sharp" size={18} color="#2563EB" />
      </View>
      <View style={styles.storeLeft}>
        <MaterialCommunityIcons name="storefront-outline" size={28} color="#2563EB" />
      </View>
      <View style={styles.storeRight}>
        <MaterialCommunityIcons name="storefront-outline" size={28} color="#1D4ED8" />
      </View>
      <View style={styles.ticket}>
        <Text style={styles.ticketText}>%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 168,
    height: 128,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loopLeft: {
    position: 'absolute',
    left: 18,
    top: 30,
    width: 86,
    height: 86,
    borderWidth: 10,
    borderColor: '#6EC7FF',
    borderRadius: 43,
    borderRightColor: 'transparent',
    transform: [{ rotate: '-25deg' }],
  },
  loopRight: {
    position: 'absolute',
    right: 18,
    top: 30,
    width: 86,
    height: 86,
    borderWidth: 10,
    borderColor: '#1D4ED8',
    borderRadius: 43,
    borderLeftColor: 'transparent',
    transform: [{ rotate: '25deg' }],
  },
  pin: {
    position: 'absolute',
    top: 4,
  },
  storeLeft: {
    position: 'absolute',
    left: 36,
    top: 54,
  },
  storeRight: {
    position: 'absolute',
    right: 36,
    top: 54,
  },
  ticket: {
    position: 'absolute',
    bottom: 16,
    width: 42,
    height: 24,
    borderRadius: 6,
    backgroundColor: authColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
