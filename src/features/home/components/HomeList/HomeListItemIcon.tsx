import IconButton from '@/shared/components/IconButton';

type props = {
  color: string;
  iconName: string;
  onPress?: () => void;
};

const HomeListItemIcon = ({ color, iconName, onPress }: props) => {
  return <IconButton variant="icon" iconName={iconName} color={color} onPress={onPress} />;
};

export default HomeListItemIcon;
