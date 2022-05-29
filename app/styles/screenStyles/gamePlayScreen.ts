import { Dimensions } from 'react-native';

export const gamePlayScreen = {
   gps_options_button: {
      position: 'absolute',
      top: '7%',
      left: '3%',
   },
   gps_card: {
      resizeMode: 'contain',
      width: '15%',
      marginHorizontal: '-2%',
      shadowOffset: {
         width: 5,
         height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      overflow: 'visible',
   },
   gps_pair_container: {
      position: 'absolute',
      resizeMode: 'center',
      top: Dimensions.get('window').height / 2,
      transform: [{ translateY: '-50%' }], // Why does this work but not for translateX??
      width: '100%',
      height: 100,
   },
   gps_passed_queen: {
      position: 'absolute',
      left: Dimensions.get('window').width / 2,
      transform: [{ translateX: -20 }], // TODO: This should NOT be hard coded
   },
   gps_pair_left: {
      position: 'absolute',
      left: '40%',
      transform: [{ rotate: '-10deg' }],
   },
   gps_pair_right: {
      position: 'absolute',
      right: '40%',
      transform: [{ rotate: '10deg' }],
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
   },
};
