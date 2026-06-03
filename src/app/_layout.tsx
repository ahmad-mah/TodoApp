import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { NavigationBar } from 'expo-navigation-bar';
import { Stack } from 'expo-router';


const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

function RootLayout() {
  const [loaded] = useFonts({
    ...Ionicons.font,
  });

  if (!loaded) {
    return null; // or splash screen
  }


  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>
        <NavigationBar style="inverted" />
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarStyle: 'dark',
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ConvexProvider>
    </ThemeProvider>
  );
}

export default RootLayout;
