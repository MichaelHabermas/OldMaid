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
    left: '40%',
    transform: [{rotate: '-10deg'}], 
  },
  gps_pair_right: {
    position: 'absolute',
    right: '40%',
    transform: [{rotate: '10deg'}],
  },
  gps_character: {
    position: 'relative',
  },  
  gps_opponent_contents: {
    position: 'absolute',
    top: '25%',
    width: '100%',
    alignItems: 'center',
  },
  gps_opponent_character: {
    position: 'absolute',
    bottom: '110%',
  },
  gps_opponent_cards_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  gps_player_contents: {
    position: 'absolute',
    bottom: '25%',
    width: '100%',
    alignItems: 'center',
  },
  gps_player_character: {
    position: 'absolute',
    top: '110%',
  },
  gps_player_cards_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
};