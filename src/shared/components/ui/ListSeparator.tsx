import { View } from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

const ListSeparator = ({ height, width }: Props) => {
  if (!height && !width) return null;

  return (
    <View
      style={{
        height,
        width,
      }}
    />
  );
};

export default ListSeparator;