import styled from "styled-components";
import { theme } from "../../styles/global";

export default {
  BoxContainer: styled.header`
    display: flex;
    flex: 1;
    height: auto;
  `,
  BoxHeader: styled.section`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding-bottom: 10px;
    margin-left: 5%;
  `,
  BoxForm: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 5px 0 5px;
    height: 130px;

    @media(max-width: 768px) {
      flex-direction: column;
    }
  `,
  BoxInput: styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px 5px;
    border: 1px solid ${theme.colors.colorPrimaryOpacity};
    background-color: ${theme.colors.backgroundPrimary};
    margin-right: 20px;
    border-radius: 5px;
    max-height: 40px;
  `,
  InputSearch: styled.input`
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.colorPrimary};
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    width: 300px;
    height: 30px;
    border: none;
    outline: none;

    @media(max-width: 768px) {
      flex: 1;
    }
  `,
  ButtonIconInput: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${theme.colors.colorPrimary};
    border: none;
    cursor: pointer;

    div {
      width: 20px;
      height: 20px;
      color: ${theme.colors.backgroundPrimary};
    }
  `,
  BoxButtonsSelector: styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 768px) {
      margin-top: 10px;
      align-items: flex-end;
      margin-right: 20px;
    }
  `,
  BoxButtonSelector: styled.div`
    display: flex;
    width: 120px;
    border: 1px solid ${theme.colors.colorPrimaryOpacity};    
    border-radius: 5px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  `,
  ButtonSelect: styled.button`    
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.colorPrimary};
    font-size: 18px;
    height: 40px;
    flex: 1;
    border: none;
    cursor: pointer;
  `,
  BoxIconSelect: styled.div`
    width: 20px;
    height: 20px;
    color: ${theme.colors.colorPrimary};
  `,
  BoxGroupButtonsSelector: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
  `,
  ButtonAscSelector: styled.button`
    width: 120px;
    height: 40px;
    background-color: ${theme.colors.backgroundPrimary};
    border: 1px solid ${theme.colors.colorPrimaryOpacity};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${theme.colors.colorPrimary};
    font-size: 16px;    
    cursor: pointer;
    transition: all ease 0.3s;

    :hover {
      box-shadow: 0px -1px 2px ${theme.colors.colorPrimary};
    }
  `,
  ButtonDecSelector: styled.button`
    width: 120px;
    height: 40px;
    background-color: ${theme.colors.backgroundPrimary};
    border: 1px solid ${theme.colors.colorPrimaryOpacity};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: -1px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${theme.colors.colorPrimary};
    font-size: 16px;
    cursor: pointer;
    transition: all ease 0.3s;

    :hover {
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }
  `,
  BoxLogoAndTitle: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  BoxLogoHeader: styled.div`
    display: flex;
    border: 1px solid ${theme.colors.colorPrimary};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    overflow: hidden;
  `,
  ImageHeader: styled.img`
    width: 60px;
    height: 60px;
  `,
  TextHeader: styled.p` 
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${theme.colors.colorPrimary};
    font-size: 38px;
  `,
}