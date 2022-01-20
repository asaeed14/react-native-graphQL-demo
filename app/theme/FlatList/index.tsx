/* eslint-disable no-param-reassign */
import isEqual from 'lodash/isEqual';
import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import Dimensions from 'theme/Dimensions';
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from 'recyclerlistview';

const dataSourceFactory: any = new DataProvider((r1, r2) => !isEqual(r1, r2));

interface FlatListProps {
  ref?: (...args: any[]) => any;
  data: any[];
  style?: object | any[];
  contentContainerStyle?: object;
  renderItem: (...args: any[]) => any;
  onEndReachedThreshold?: number;
  onEndReached?: (...args: any[]) => any;
  ListFooterComponent?: (...args: any[]) => any;
  onRefresh?: (...args: any[]) => any;
  refreshing?: boolean;
  windowSize?: number;
  itemWidth?: number;
  itemHeight: number;
  forceNonDeterministicRendering?: boolean;
}

const FlatList: React.FC<FlatListProps> = ({
  data,
  renderItem,
  contentContainerStyle,
  itemHeight,
  style,
  windowSize = 1,
  ref = () => null,
  refreshing = false,
  onRefresh = () => null,
  onEndReached = () => null,
  onEndReachedThreshold = 1,
  ListFooterComponent = () => null,
  itemWidth = Dimensions.screenWidth,
  forceNonDeterministicRendering = false,
  // ...props
}) => {
  const [dataProvider, setDataProvider] = useState<any>(null);

  useEffect(() => {
    setDataProvider(dataSourceFactory.cloneWithRows(data));
  }, [data]);

  const [layoutProvider, setLayoutProvider] = useState<any>(null);
  useEffect(() => {
    setLayoutProvider(
      new LayoutProvider(
        () => 0,
        (_type, dim) => {
          dim.width = itemWidth;
          dim.height = itemHeight;
        },
      ),
    );
  }, [itemWidth, itemHeight]);
  return dataProvider && layoutProvider ? (
    <RecyclerListView
      testID="listView"
      ref={ref}
      rowRenderer={renderItem}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      forceNonDeterministicRendering={forceNonDeterministicRendering}
      style={style}
      contentContainerStyle={contentContainerStyle}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
      renderFooter={ListFooterComponent}
      renderAheadOffset={windowSize}
      scrollViewProps={{
        refreshControl: onRefresh ? (
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        ) : null,
        // ...props,
      }}
      // {...props}
    />
  ) : null;
};
export default FlatList;
