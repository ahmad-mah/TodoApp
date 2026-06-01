import { ThemeProvider } from '@/theme/ThemeProvider';
import { NavigationBar } from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <NavigationBar style="inverted" hidden />
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarStyle: 'dark',
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}

export default RootLayout;
