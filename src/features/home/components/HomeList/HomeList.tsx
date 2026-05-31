import { FlatList } from 'react-native';
import createHomeListStyles from './HomeList.styles';
import useTheme from '@/theme/useTheme';
import ListSeparator from '@/shared/components/ui/ListSeparator';
import HomeListItem from './HomeListItem';

const HomeList = () => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);
  return (
    //style vs content contairnestyle
    <FlatList
      data={['Learn Python', 'Subscribe to Codesistnecy']}
      style={styles.list}
      ItemSeparatorComponent={<ListSeparator height={20} />}
      renderItem={({ item }) => <HomeListItem text={item} />}
    ></FlatList>
  );
};

export default HomeList;
