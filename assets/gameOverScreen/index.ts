import { ImageSourcePropType } from 'react-native';

const cow: ImageSourcePropType = require('./cow_gos.png');
const gameOverHeader: ImageSourcePropType = require('./game_over_message.png');
const milkMaid: ImageSourcePropType = require('./milk_maid_gos.png');
const playAgainBtn: ImageSourcePropType = require('./play_again_button.png');
const stars: ImageSourcePropType = require('./group_stars.png');
const winMessage: ImageSourcePropType = require('./win_message.png');
const loseMessage: ImageSourcePropType = require('./lose_message.png');

export const gameOverScreen = {
   cow,
   gameOverHeader,
   loseMessage,
   milkMaid,
   playAgainBtn,
   winMessage,
   stars,
};
