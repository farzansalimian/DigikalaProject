import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {
  getMovieCountry,
  getMovieCrew,
  getMovieDateOfRelease,
  getMovieDirector,
  getMovieLanguage,
  getMovieRating,
  getMovieTags,
  getMovieTitle,
} from '../utils/dataHelper/movies/moviesDataHelper';
import Chip from './Chip';
import Collapsible from 'react-native-collapsible';
import {ArrowIcon} from '../assets/svgIcons';
import Divider from './Divider';

const ARROW_ICON_SIZE = 30;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagChip: {
    marginRight: 4,
    marginVertical: 4,
    backgroundColor: '#FDEBD0',
  },
  arrowIcon: {
    width: ARROW_ICON_SIZE,
    height: ARROW_ICON_SIZE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    borderRadius: ARROW_ICON_SIZE / 2,
    marginLeft: 4,
  },
  text: {
    flexShrink: 1,
    color: '#17202A',
    fontSize: 16,
  },
  directorChip: {
    backgroundColor: '#EAEDED',
  },
  countryChip: {
    backgroundColor: '#FAD7A0',
  },
  languageChip: {
    backgroundColor: '#D5F5E3',
  },
});

function Movie(props) {
  const {data} = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{getMovieTitle(data)}</Text>

        <View style={styles.row}>
          <Text style={styles.text}>{getMovieRating(data)}</Text>

          <TouchableHighlight
            onPress={toggleCollapsed}
            underlayColor={'#FAF9F7'}
            style={styles.touchable}>
            <View style={styles.arrowIcon}>
              <ArrowIcon />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>{getMovieDateOfRelease(data)}</Text>
        <Text style={styles.text}>{getMovieCountry(data)}</Text>
      </View>

      <Collapsible collapsed={isCollapsed}>
        <View style={styles.chips}>
          {getMovieTags(data).map((tag) => (
            <Chip key={tag} text={tag} containerStyle={styles.tagChip} />
          ))}
        </View>

        <View style={styles.chips}>
          {getMovieCrew(data).map((crew) => (
            <Chip key={crew} text={crew} containerStyle={styles.tagChip} />
          ))}
        </View>

        <View style={styles.row}>
          <Chip
            containerStyle={styles.countryChip}
            text={getMovieCountry(data)}
          />
          <Chip
            containerStyle={styles.languageChip}
            text={getMovieLanguage(data)}
          />
        </View>

        <Chip
          containerStyle={styles.directorChip}
          text={getMovieDirector(data)}
        />
      </Collapsible>
      <Divider marginTop={8} marginBottom={8} />
    </View>
  );
}

Movie.defaultProps = {};
Movie.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default memo(Movie);
