import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ColorScheme } from '@/theme/types';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/theme/useTheme';

type props = {
  color: string;
  iconName: string;
};

const HomeListItemIcon = ({ color, iconName }: props) => {
  const { colors } = useTheme();
  const styles = createStyle(colors);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.iconContainer, backgroundColor: color }}
    >
      <Ionicons name={iconName as any} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default HomeListItemIcon;

const createStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    iconContainer: {
      height: 38,
      width: 38,
      borderRadius: 26,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: colors.text,
      fontSize: 16,
    },
  });
