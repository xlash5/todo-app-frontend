import styled from 'styled-components';
import Palette from '../constants/Palette';

export default styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    align-items: ${props => props.itemsCenter ? 'start' : 'center'};
    width: ${props => props.width ? props.width : '350px'};
    height: ${props => props.height ? props.height : '34%'};
    margin-bottom: 50px;
    background-color: ${Palette.fifth};
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 100px;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 10px 7px ${Palette.sixth}; 
    box-shadow: 0px 0px 10px 7px ${Palette.sixth};
`;