import React, {useRef} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {Dimensions, StyleSheet, View} from 'react-native';
import Loading from './Loading';
const {width} = Dimensions.get('window');
const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
function List(props) {
  const {
    extendedState,
    items,
    rowRenderer,
    itemHeight,
    canChangeSize,
    forceNonDeterministicRendering,
    isLoading,
    onEndReached,
    isSearchActive,
    noRowRenderer,
  } = props;

  const listRef = useRef(null);
  const layoutProvider = useRef(
    new LayoutProvider(
      (index) => 0,
      (type, dim) => {
        dim.width = width;
        dim.height = itemHeight;
      },
    ),
  );

  // Show spinner when more data is loading
  const renderFooter = () => {
    return isLoading ? <Loading /> : null;
  };

  const isListEmpty = !items || items.length === 0;

  // Show spinner if list is empty and data is loading
  if (isLoading && isListEmpty) {
    return <Loading />;
  }
  // Place holder when there is no result and search is active
  if (isSearchActive && isListEmpty && !isLoading) {
    return noRowRenderer();
  }
  if (isListEmpty) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <RecyclerListView
        keyboardShouldPersistTaps="always"
        extendedState={extendedState}
        ref={listRef}
        layoutProvider={layoutProvider.current}
        dataProvider={dataProvider.cloneWithRows(items)}
        rowRenderer={rowRenderer}
        forceNonDeterministicRendering={forceNonDeterministicRendering}
        canChangeSize={canChangeSize}
        renderFooter={renderFooter}
        onEndReached={onEndReached}
      />
    </View>
  );
}

List.defaultProps = {
  extendedState: null,
  itemHeight: 64,
  canChangeSize: false,
  forceNonDeterministicRendering: false,
  isLoading: false,
  isSearchActive: false,
};
List.propTypes = {
  isSearchActive: PropTypes.bool,
  rowRenderer: PropTypes.func.isRequired,
  extendedState: PropTypes.instanceOf(Array),
  items: PropTypes.instanceOf(Array).isRequired,
  itemHeight: PropTypes.number,
  canChangeSize: PropTypes.bool,
  forceNonDeterministicRendering: PropTypes.bool,
  isLoading: PropTypes.bool,
  onEndReached: PropTypes.func.isRequired,
  noRowRenderer: PropTypes.func.isRequired,
};
export default List;
