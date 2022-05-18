import { Image, View } from 'react-native';
import React from 'react';

// components

// types

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const BackgroundTrees = (): JSX.Element => {
  return (
    <View style={styles.c_bgt_treeContainer}>
      <Image source={assets.common.tree} />
      <Image source={assets.common.tree} style={styles.c_bgt_middleTree} />
      <Image source={assets.common.tree} />
    </View>
  );
};

export default BackgroundTrees;
