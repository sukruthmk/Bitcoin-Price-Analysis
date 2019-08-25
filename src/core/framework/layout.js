import Styled from "styled-components";

export const MainContainer = Styled.div`
    padding: 30px;
    border: ${props => (props.border ? props.border : "none")};
`;

export const PadContainer = Styled.div`
    padding-top: ${props => (props.top ? props.top : "none")};
    padding-bottom: ${props => (props.bottom ? props.bottom : "none")};
    padding-left: ${props => (props.left ? props.left : "none")};
    padding-right: ${props => (props.right ? props.right : "none")};
`;

export const SubText = Styled.div`
    color: #8c8c8c;
    font-size: ${props => (props.font ? props.font : "12pt")};
    font-weigtht: 200;
`;
