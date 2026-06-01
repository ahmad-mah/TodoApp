import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import createHomeListStyles from './HomeList.styles';
import useTheme from '@/theme/useTheme';
import ListSeparator from '@/shared/components/ui/ListSeparator';
import HomeListItem from './HomeListItem';
import { useTodos } from '../../api/useTodos';

const HomeList = () => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);

  const todos = useTodos();
  const isLoading = todos === undefined;

  return (
    <FlatList
      data={todos}
      style={styles.list}
      contentContainerStyle={{
        flex: 1,
      }}
      ItemSeparatorComponent={<ListSeparator height={20} />}
      renderItem={({ item }) => <HomeListItem text={item.text} />}
      ListEmptyComponent={
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={50} color={colors.primary} />
          </View>
        ) : (
          <Text
            style={{
              color: colors.text,
              fontSize: 40,
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            No todos yet!
          </Text>
        )
      }
    ></FlatList>
  );
};

export default HomeList;
