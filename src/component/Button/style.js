import styled from "styled-components";

const getButtonBackGround = (props) => {
    switch (props.type) {
        case "search":
            return "linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%)";
        case "search-header": 
            return "#032541";
        case "language":
            return "#032541"
        default:
            return ""
    }
}

const getButtonPadding = (props) => {
    switch (props.type) {
        case "search": 
            return "10px 26px";
        case "genre":
            return "4px 12px";
            case "language":
            return "2px";
        default:
            return ""
    }
}

const getButtonColor = (props) => {
    switch (props.type) {
        case "search": 
            return "#fff";
        case "search-header":
            return "#01B4E4"
        case "language":
            return "#fff";
        default: 
            return "" 
    }
}

const getFontSize = (props) => {
    switch (props.type) {
        case "search-header":
            return "1.4rem";
        case "language": 
            return "1rem";
        default:
            return ""
    }
}

export const ButtonWrapper = styled.button`
background: ${(props) => getButtonBackGround(props)};
background-color: ${(props) => (props.active ? "#01B4E4" : "none")};;
padding: ${(props) => getButtonPadding(props)};
color: ${(props) => getButtonColor(props)};
border: 0px;
font-size: ${(props) => getFontSize(props)};
cursor: pointer;
`;
