import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs';

import api from '../../service/api';
import S from './styles';
import { IArticlesDTO, IContentArticlesPropsDTO } from '../../Dtos/ArticlesDTO';
import BoxSearchInformation from '../BoxSearchInformation';

const ContentArticles = ({sendSearch, sendListOrder}: IContentArticlesPropsDTO) => {

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState<number>(1)
  const [lisOrderSearch, setListOrderSearch] = useState<number>(-1);
  const [dataArticles, setDataArticles] = useState<IArticlesDTO[]>([]);
  const [buttonSearch, setButtonSearch] = useState<boolean>(true);
  const [boxInformation, setBoxInformation] = useState<boolean>(false);

  useEffect(() => {    
    getDataArticles();
  }, []);

  const getDataArticles = async () => {
    setLoading(true);
    const {data} = await api.get(`/articles?_page=${pageLoading}&_order=${lisOrderSearch}`);
    if(data) {
      setLoading(false);
      setButtonSearch(true);
      setDataArticles(data);
    }
    return;
  }

  // Call for search by input field
  useEffect(() => {
    if(sendSearch.length > 3) {
        setLoading(true);
        setDataArticles([]);

      const getSearchArticles = async () => {
        const {data} = await api.get(`/articles/${sendSearch}`);
        if(data.length > 0) {
          setBoxInformation(false);
          setLoading(false);
          setDataArticles(data);
          setButtonSearch(false);
          return;
        }
        setButtonSearch(false);
        setBoxInformation(true);
        setLoading(false);
        return;
      }
    getSearchArticles();
    return;
    }
    getDataArticles();
  }, [sendSearch]);

  // Call to list the articles in the selected order
  useEffect(() => { 
    setLoading(true);
    setDataArticles([]);
    const getOrderSelectedArticle = async () => {    
      if(sendListOrder === 'dec') {
        setPageLoading(1);
        setListOrderSearch(-1);
        return;
      }
  
      if(sendListOrder === 'asc') {
        setPageLoading(1);
        setListOrderSearch(1);
        return;
      }
    }    
    getOrderSelectedArticle();    
    getDataArticles();
  }, [sendListOrder, lisOrderSearch]);

  const handleLoadPlusArticles = async (page: number) => {
    setLoading(true);
    let count = page + 1;

    const {data} = await api.get(`/articles?_page=${count}&_order=${lisOrderSearch}`);
    if(data) {
      setPageLoading(count);
      setLoading(false);
      setDataArticles(oldArticles => [
        ...oldArticles,
        ...data
      ]);
    }
  }

  return (
    <S.Container>
      <S.BoxContent>
      {boxInformation &&
        <BoxSearchInformation />
      }
      {dataArticles.length > 0 && dataArticles.map((item, index) => {
        let verifyPositionCard = false;
        if(index % 2 === 0) {
          verifyPositionCard = true;
        }

        return (
          <S.BoxCard key={item.id} verifyPosition={verifyPositionCard} >
            <S.BoxImage>
              <S.ImageCard src={item.imageUrl} />
            </S.BoxImage>
            <S.BoxDescription verifyPosition={verifyPositionCard}>
              <S.TextTitle>
                {item.title.substring(0, 70)}
                {item.title.length > 70 ? '...' : '.'}
              </S.TextTitle>
              <S.BoxDateAndButton>
                <S.TextData>{dayjs(item.publishedAt).format('DD/MM/YYYY')}</S.TextData>
                <S.LinkToRedirectSite href={item.url} target="_blank">
                  <S.ButtonNewSite>New Site</S.ButtonNewSite>
                </S.LinkToRedirectSite>
              </S.BoxDateAndButton>
              <S.TextDescription>
                {item.summary.substring(0, 180)}
                {item.summary.length > 180 ? '...' : '.'}
              </S.TextDescription>
              <S.LinkToRedirectSite href={item.url} target="_blank">
                <S.ButtonShowPlus>Ver Mais</S.ButtonShowPlus>
              </S.LinkToRedirectSite>
            </S.BoxDescription>
          </S.BoxCard>
        )
      })}

      <S.BoxButtonLoad>
        {loading &&
          <S.IconloadArticles src='loading.gif' />
        }

        {buttonSearch &&
          <S.ButtonPlusArticles onClick={() => handleLoadPlusArticles(pageLoading)}>
            Carregar Mais
          </S.ButtonPlusArticles>
        }
      </S.BoxButtonLoad>     

      </S.BoxContent>
    </S.Container>
  );
}

export default ContentArticles;