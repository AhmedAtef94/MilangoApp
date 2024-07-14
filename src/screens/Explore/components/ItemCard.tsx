import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Item} from '../../../types';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {kFormatter} from '../../../utils/formatNumber';

export interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.container}>
        <View style={styles.trendTitle}>
          <Text style={styles.trend}>Trending repository</Text>
          <View style={styles.star}>
            <Icon size={20} style={styles.image} name="star-outline" />
            <Text style={styles.textstar}>Star</Text>
            <View style={styles.starRate}>
              <Text>{kFormatter(item.stargazers_count)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleBar}>
          <Icon
            size={22}
            color={'#2b1190'}
            style={styles.image}
            name="book-multiple-outline"
          />
          <Text style={styles.title}>{item.full_name}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.update}>
          <Text>{`Updated ${moment(item.updated_at).fromNow()}`}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  container: {
    padding: 20,
  },
  trendTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trend: {
    color: '#000000',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRate: {
    backgroundColor: '#D8D8D8',
    borderRadius: 5,
    padding: 5,
    marginLeft: 8,
    color: '#2b1190',
  },

  image: {
    width: 20,
    height: 20,
  },
  titleBar: {
    flexDirection: 'row',
    marginVertical: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'blue',
    marginLeft: 10,
  },
  update: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#1CE3D6',
    borderTopWidth: 1,
    paddingTop: 20,
  },
  repoImage: {
    height: 200,
  },
  description: {
    color: '#020008',
  },
  language: {
    color: '#2b1190',
  },
  textstar: {
    color: '#2b1190',
  },
});
