import styled from 'styled-components';
import Palette from '../constants/Palette';

export default styled.input`
    padding: 0.5em;
    color: ${Palette.seventh};
    background: ${Palette.second};
    border: none;
    border-radius: 3px;
    width: ${props => props.width ? props.width : "250px"};
    height: 25px;
    margin-bottom: 1em;
    margin-top: 10px;
`;