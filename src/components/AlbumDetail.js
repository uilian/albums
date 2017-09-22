import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    thumbStyle,
    thumbContainerStyle,
    descriptionContainerStyle,
    descriptionTextStyle,
    coverStyle
  } = styles;

  const {
    title,
    artist,
    thumbnail_image: thumbnail,
    image: cover,
    url
  } = album;

  return (
    <Card>
      <CardSection>
        <View style={thumbContainerStyle}>
          <Image style={thumbStyle} source={{ uri: thumbnail }} />
        </View>
        <View style={descriptionContainerStyle}>
          <Text style={descriptionTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={coverStyle} source={{ uri: cover }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  descriptionContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  descriptionTextStyle: {
    fontSize: 18
  },
  thumbStyle: {
    height: 50,
    width: 50
  },
  thumbContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  coverStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


export default AlbumDetail;
