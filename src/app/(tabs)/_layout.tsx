import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import createTabBarOptions from '../../theme/tabBar';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  return (
    <LinearGradient colors={colors.gradients.background} style={{ flex: 1 }}>
      <Tabs screenOptions={createTabBarOptions(colors, insets)}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="flash-outline" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="settings-outline" size={size} color={color} />;
            },
          }}
        />
      </Tabs>
    </LinearGradient>
  );
};

export default TabsLayout;
