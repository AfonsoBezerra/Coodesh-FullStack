import styled from "styled-components";

import { theme } from "../../styles/global";

export default {
  Container: styled.div`
    display: flex;
    height: 100px;
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  TextInformationSearch: styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
    color: ${theme.colors.colorPrimary};
  `,
}