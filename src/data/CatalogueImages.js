import furniture from '../images/Furniture.jpeg'
import lighting from '../images/Lighting.jpeg'
import artefacts from '../images/Artefacts.jpeg'
export const FURNITURE = (scale) => {
  return (
    [
      {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      },
      {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }, {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      },
      {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      },
      {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }, {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      },
      {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      }, {
        original: furniture,
        thumbnail: furniture,
        originalHeight: scale.imageHeight,
        originalWidth: scale.imageWidth,
      },
    ]
  )
};

export const LIGHTING = scale => {
  return ([{
    original: lighting,
    thumbnail: lighting,
    originalHeight: scale.imageHeight,
    originalWidth: scale.imageWidth,
  },
  {
    original: lighting,
    thumbnail: lighting,
    originalHeight: scale.imageHeight,
    originalWidth: scale.imageWidth,
  }, {
    original: lighting,
    thumbnail: lighting,
    originalHeight: scale.imageHeight,
    originalWidth: scale.imageWidth,
  },
  ])
};

export const ARTEFACTS = scale => {
  return ([
    {
      original: artefacts,
      thumbnail: artefacts,
      originalHeight: scale.imageHeight,
      originalWidth: scale.imageWidth,
    },
    {
      original: artefacts,
      thumbnail: artefacts,
      originalHeight: scale.imageHeight,
      originalWidth: scale.imageWidth,
    }, {
      original: artefacts,
      thumbnail: artefacts,
      originalHeight: scale.imageHeight,
      originalWidth: scale.imageWidth,
    },
  ])
};
