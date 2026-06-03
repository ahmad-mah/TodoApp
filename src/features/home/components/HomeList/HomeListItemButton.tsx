import IconButton from '@/shared/components/IconButton';
import { Keyboard } from 'react-native';

type props = {
  text: string;
  color: string[];
  iconName: string;
  onPress?: () => void;
};

const HomeListItemButton = ({ color, iconName, onPress, text }: props) => {
  return (
    <IconButton
      variant="button"
      iconName={iconName}
      label={text}
      gradientColors={color}
      onPress={() => {
        onPress?.();
        Keyboard.dismiss();
      }}
    />
  );
};

export default HomeListItemButton;
