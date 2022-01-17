import styled from 'styled-components';
import Palette from '../constants/Palette';

export default styled.div`
    display: flex;
    flex: 1;
    min-height: 100vh;
    background-color: ${Palette.first};
    justify-content: ${props => props.center ? "center" : "start"};
`;