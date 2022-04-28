import styled from "styled-components";

import { theme } from "../../styles/global";

type ICardProps = {
  verifyPosition: boolean;
}

export default {
  Container: styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    border-top: 2px solid ${theme.colors.colorActiveOpacity};
    margin-top: 40px;
  `,
  BoxContent: styled.div`
    width: 55%;
    padding: 50px 0;

    @media(max-width: 1250px) {
      width: 85%;
    }
  `,
  BoxCard: styled.div<ICardProps>`
    display: flex;
    flex: 1;
    flex-direction: ${({verifyPosition}) => verifyPosition ? 'row' : 'row-reverse'};
    height: 220px;
    margin-bottom: 60px;

    @media(max-width: 768px) {
      flex-direction: column;
      height: 380px;
    }
  `,
  BoxImage: styled.div`
    width: 280px;
    height: 220px;
    overflow: hidden;
    box-shadow: 2px 4px 5px ${theme.colors.colorSecundary};

    @media(max-width: 768px) {
      width: 100%;
      height: 160px;
    }
  `,
  ImageCard: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  BoxDescription: styled.div<ICardProps>`
    display: flex;
    position: relative;
    flex: 1;
    height: 220px;
    flex-direction: column;
    margin-left: ${({verifyPosition}) => verifyPosition ? 40 : 0}px;
    margin-right: ${({verifyPosition}) => verifyPosition ? 0 : 40}px;

    @media(max-width: 768px) {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 20px;
      height: auto;
    }
  `,
  TextTitle: styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    color: ${theme.colors.colorPrimary};

    @media(max-width: 768px) {
      font-size: 16px;
    }
  `,
  BoxDateAndButton: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
  TextData: styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
    color: ${theme.colors.colorActive};
  `,
  LinkToRedirectSite: styled.a`
    text-decoration: none;
  `,
  ButtonNewSite: styled.button`
    width: 80px;
    height: 22px;
    background-color: ${theme.colors.colorActive};
    color: ${theme.colors.backgroundPrimary};
    border: none;
    border-radius: 3px;
    margin-top: 2px;
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.colorActiveOpacity};
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }
  `,
  TextDescription: styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;

    @media(max-width: 768px) {
      font-size: 14px;
    }
  `,
  ButtonShowPlus: styled.button`
    position: absolute;
    bottom: 0;
    width: 120px;
    height: 40px;
    background-color: ${theme.colors.colorPrimary};
    color: ${theme.colors.backgroundPrimary};
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }

    @media(max-width: 768px) {
      width: 100%;
    }
  `,
  BoxButtonLoad: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;   
  `,
  IconloadArticles: styled.img`
    width: 100px;
    height: 100px;
    transform:  rotate(90deg);
    margin: 20px 0;
  `,
  ButtonPlusArticles: styled.button`
    width: 180px;
    height: 40px;
    background-color: ${theme.colors.colorActive};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${theme.colors.backgroundPrimary};
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;

    :hover {
      background-color: ${theme.colors.colorActiveOpacity};
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }
  `,
}