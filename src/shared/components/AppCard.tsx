import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type AppCardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const AppCard = ({ children, style }: AppCardProps) => (
  <View style={[styles.card, style]}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 4,
  },
});

export default AppCard;
