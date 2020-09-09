import styled from "styled-components";

const StyledBox = styled.div`
    background: ${props => props.bgColor};
    height: ${props => props.height};
    width: ${props => props.width};
    display: ${props => props.display};
    margin:${props => props.margin} ;
    vertical-align: ${props => props.verticalAlign};
`;

export default StyledBox;

