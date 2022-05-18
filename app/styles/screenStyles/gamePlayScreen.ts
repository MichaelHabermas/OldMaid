import { Dimensions } from "react-native";

export const gamePlayScreen = {
  gps_options_button: {
    position: 'absolute',
    top: '7%',
    left: '3%',
  },
  gps_card: {
    resizeMode: 'contain',
    width: '15%',
  },
  gps_pair_container:{
    position: 'absolute',
    resizeMode: 'center',
    top: Dimensions.get('window').height / 2,
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    
  },
  gps_pair_left: {
    position: 'absolute',
    // top: '50%',
    left: '40%',
    transform: [{rotate: '-10deg'}], 
  },
  gps_pair_right: {
    position: 'absolute',
    // top: '50%',
    right: '40%',
    transform: [{rotate: '10deg'}],
  },
  gps_opponent: {
    position: 'absolute',
    top: '10%'
  },
  gps_player: {
    position: 'absolute',
    bottom: '10%'
  },
};