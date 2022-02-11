import React from 'react';
import ImageGallery from 'react-image-gallery';

const ProductGallery = props =>{
    return(
         <ImageGallery 
         items={props.images}
         thumbnailPosition='bottom'
         autoplay='true'
         lazyload='true'
         disableThumbnailScroll='false' />
    )
};

export default ProductGallery;