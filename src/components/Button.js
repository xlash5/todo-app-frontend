import styled from 'styled-components';
import Palette from '../constants/Palette';

export default styled.button`
  background: ${props => props.primary ? Palette.fourth : "white"};
  color: ${props => props.primary ? "white" : Palette.fourth};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid {Palette.fourth};
  border-radius: 3px;
  height: 40px;
`;