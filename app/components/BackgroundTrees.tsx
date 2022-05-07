import { View, Image } from "react-native";
import React from "react";
import { useStyles } from "../styles/config/styles";

const tree = require("../../assets/common/tree.png");

const BackgroundTrees = (): JSX.Element => {
  const styles = useStyles();

  return (
    <View style={styles.treeContainer}>
      <Image source={tree} />
      <Image source={tree} style={styles.middleTree} />
      <Image source={tree} />
    </View>
  );
};

export default BackgroundTrees;
