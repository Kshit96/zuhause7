
function importAll(r) {
  return r.keys().map(r);
}

export const FURNITURE = (scale) => {
  const images = importAll(require.context('../images/categories/furniture', false, /\.(png|jpe?g|svg)$/));
  const furnitureObject = images.map((image)=>{
    return (
      {
        original: image.default,
        thumbnail: image.default,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }
    )
  })
  
  return furnitureObject;
};

export const LIGHTING = scale => {
  const images = importAll(require.context('../images/categories/lighting', false, /\.(png|jpe?g|svg)$/));
  const lightingObject = images.map((image)=>{
    return (
      {
        original: image.default,
        thumbnail: image.default,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }
    )
  })
  
  return lightingObject;
};

export const ARTEFACTS = scale => {
  const images = importAll(require.context('../images/categories/artefacts', false, /\.(png|jpe?g|svg)$/));
  const artefactsObject = images.map((image)=>{
    return (
      {
        original: image.default,
        thumbnail: image.default,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }
    )
  })
  return artefactsObject;
};
