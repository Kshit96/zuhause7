import {Row} from 'antd';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
display: flex;

@media only screen and (min-width: 768px) {
    height: 768px!important;
    width: 100%;
  }

@media only screen and (min-width: 992px) {
    height: 768px;
    width: 100%;
  }

@media only screen and (min-width: 1200px) {
  height: 768px;
  width: 100%;
}

@media only screen and (min-width: 1600px) {
  height: 1080px;
  width: 100%;
}
`

export const FullWidthRow = styled(Row)`
width: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`