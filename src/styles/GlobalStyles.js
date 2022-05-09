import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

const AppStyles = styled.div`
	background: white;
`;

export { GlobalStyle, AppStyles };
