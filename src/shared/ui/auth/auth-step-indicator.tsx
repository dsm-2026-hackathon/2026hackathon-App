import { StyleSheet, View } from 'react-native';

import { authColors } from '@/src/shared/config/auth-theme';

type AuthStepIndicatorProps = {
  currentStep: 1 | 2 | 3;
  totalSteps?: number;
};

export function AuthStepIndicator({
  currentStep,
  totalSteps = 3,
}: AuthStepIndicatorProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const active = index < currentStep;

        return <View key={index} style={[styles.segment, active && styles.segmentActive]} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 0,
    marginTop: 20,
    marginHorizontal: 28,
  },
  segment: {
    flex: 1,
    height: 2,
    backgroundColor: '#E8E8F0',
  },
  segmentActive: {
    backgroundColor: authColors.text,
  },
});
