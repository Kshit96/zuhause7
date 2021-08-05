import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

const StyledImageGallery = styled(ImageGallery)`
.image-gallery-content{

}
`

const ProductGallery = props =>{
    return(
         <StyledImageGallery 
         items={props.images}
         thumbnailPosition='left'
         autoplay='true' />
    )
};

export default ProductGallery;