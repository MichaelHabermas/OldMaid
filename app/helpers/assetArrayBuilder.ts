export interface IAsset {
  id: number;
  name: string;
  image: any;
}

const assetArrayBuilder = (assetCollection) => {
  let assetArr: IAsset[] = [];
  let currentId: number = 0;

  for (let asset in assetCollection) {
    let assetObj: IAsset = {
      id: currentId,
      name: `${asset}`,
      image: assetCollection[asset],
    };
    assetArr.push(assetObj);
    currentId++;
  }

  return assetArr;
};

export default assetArrayBuilder;
