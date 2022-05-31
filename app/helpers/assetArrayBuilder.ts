import { IImageAsset } from '../contexts/gameContext/gameInterfaces';

const assetArrayBuilder = (assetCollection): IImageAsset[] => {
   let assetArr: IImageAsset[] = [];
   let currentId: number = 0;

   for (let asset in assetCollection) {
      let assetObj: IImageAsset = {
         id: `${asset}${currentId}`,
         name: `${asset}`,
         image: assetCollection[asset],
      };
      assetArr.push(assetObj);
      currentId++;
   }

   return assetArr;
};

export default assetArrayBuilder;
