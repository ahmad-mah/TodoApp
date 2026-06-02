import EmptyState from '@/shared/components/EmptyState';
import ListSeparator from '@/shared/components/ListSeparator';
import useTheme from '@/theme/useTheme';
import { useEffect, useRef } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useTodos } from '../../api/useTodos';
import createHomeListStyles from './HomeList.styles';
import HomeListItem from './HomeListItem';

const HomeList = () => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);

  const todos = useTodos();
  const isLoading = todos === undefined;

  const previousFirstId = useRef<string | null>(null);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    const firstId = todos?.[0]?._id;

    if (!firstId) return;

    const isNewItem = previousFirstId.current && previousFirstId.current !== firstId;

    if (isNewItem) {
      requestAnimationFrame(() => {
        listRef.current?.scrollToOffset({
          offset: 0,
          animated: true,
        });
      });
    }

    previousFirstId.current = firstId;
  }, [todos?.[0]?._id]);
  return (
    <Animated.FlatList
      ref={listRef}
      decelerationRate="fast"
      overScrollMode="always"
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      bounces={true}
      alwaysBounceVertical={true}
      itemLayoutAnimation={LinearTransition.springify()}
      data={todos}
      style={styles.list}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      ItemSeparatorComponent={() => <ListSeparator height={20} />}
      renderItem={({ item }) => <HomeListItem item={item} />}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={50} color={colors.primary} />
          </View>
        ) : (
          <EmptyState />
        )
      }
    ></Animated.FlatList>
  );
};

export default HomeList;
