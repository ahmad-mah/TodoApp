import { ColorScheme } from '@/theme/types';

const createTabBarOptions = (colors: ColorScheme, insets: any) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textMuted,
  // so the gradient works
  sceneStyle: {
    backgroundColor: 'transparent',
  },

  tabBarStyle: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    height: insets.bottom + 70,
    paddingBottom: insets.bottom,
    backgroundColor: colors.bg,
    paddingTop: 10,
  },

  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600' as const,
  },
});

export default createTabBarOptions;
