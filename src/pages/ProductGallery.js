import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

const StyledImageGallery = styled(ImageGallery)`
.image-gallery-thumbnails{
    overflow: scroll!important;
}
`

const ProductGallery = props =>{
    return(
         <StyledImageGallery 
         items={props.images}
         thumbnailPosition='bottom'
         autoplay='true'
         lazyload='true'
         disableThumbnailScroll='true' />
    )
};

export default ProductGallery;