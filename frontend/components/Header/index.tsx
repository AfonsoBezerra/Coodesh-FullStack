import React, {useState, KeyboardEvent} from 'react';

import { IconSearch, IconSelector } from '../Icons';
import S from './styles';
import { ISearchHeaderPropsDTO } from '../../Dtos/ArticlesDTO';

const Header = ({ openSearch, sendListOrderArticles }: ISearchHeaderPropsDTO) => {

  const [ search, setSearch ] = useState<string>('');
  const [ visible, setVisible ] = useState<boolean>(false);

  const handleSearchArticle = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {      
      setSearch('');
      openSearch(search);
    }
  }

  const handleSearchArticleButton = () => {
    setSearch('');
    openSearch(search);
  }

  const handleVisibleButtonsSelectorOrder = () => {
    setVisible(!visible);
  }

  const handleSelectOrderArticle = (info: string) => {
    if(info) {
      sendListOrderArticles(info);
      setVisible(false);
    }
  }
  
  return (
    <S.BoxContainer>
      <S.BoxHeader>

        <S.BoxForm>

          <S.BoxInput>
            <S.InputSearch 
              placeholder='Search' 
              onKeyDown={handleSearchArticle} 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <S.ButtonIconInput onClick={handleSearchArticleButton}>
              <div>
                <IconSearch />
              </div>
            </S.ButtonIconInput>
          </S.BoxInput>

          <S.BoxButtonsSelector>
            <S.BoxButtonSelector>
              <S.ButtonSelect onClick={handleVisibleButtonsSelectorOrder}>
                Sort
              </S.ButtonSelect>
              <S.BoxIconSelect>
                <IconSelector />
              </S.BoxIconSelect>
            </S.BoxButtonSelector>

            {visible &&
              <S.BoxGroupButtonsSelector>
                <S.ButtonAscSelector onClick={() => handleSelectOrderArticle('asc')}>
                  Mais Antigas
                </S.ButtonAscSelector>
                <S.ButtonDecSelector onClick={() => handleSelectOrderArticle('dec')}>
                  Mais Novas
                </S.ButtonDecSelector>
              </S.BoxGroupButtonsSelector>
            }
          </S.BoxButtonsSelector>

        </S.BoxForm>
        
        <S.BoxLogoAndTitle>
          <S.BoxLogoHeader> 
            <S.ImageHeader src='/rocket.png' />
          </S.BoxLogoHeader>          
          <S.TextHeader>Space Flight News</S.TextHeader> 
        </S.BoxLogoAndTitle>
        
      </S.BoxHeader>
    </S.BoxContainer>
  );
}

export default Header;