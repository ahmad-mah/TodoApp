import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
      
        


        tabBarStyle: {
          borderTopColor: 'yellow',
          borderTopWidth: 1,
          height: insets.bottom + 70,
          paddingBottom: insets.bottom,
          backgroundColor: '#1e293b',
          paddingTop: 10,

        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
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
  );
};

export default TabsLayout;
