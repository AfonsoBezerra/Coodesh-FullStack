import fetch from "cross-fetch";
import Article from "../models/Article";

const ScriptInsertData = async () => { 
  const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles`;
  let countInsertion = apiUrl.length;
  let countInformationinsert = 1;

  try {
    const verify = await Article.find();  
    
    if(verify.length === 0) {
      console.log('Preenchendo as informações no banco, aguarde...');
      const getDataArticlesApi = await fetch(`${apiUrl}?_limit=${apiUrl.length}`);
      
      if( getDataArticlesApi.status >= 400 ) {
        throw new Error('Erro na requisição');
      }
      const response = await getDataArticlesApi.json();

      await response.map(async (data) => {                   

        let lauche = [];
        data.launches.map((e) => {
          lauche.push(e);
        });  
        
        let event = [];
        data.events.map((e) => {
          event.push(e)
        });

        let newArticle = new Article();
        newArticle.id = data.id;
        newArticle.title = data.title;
        newArticle.url = data.url;
        newArticle.imageUrl = data.imageUrl;
        newArticle.newsSite = data.newsSite;
        newArticle.summary = data.summary;
        newArticle.publishedAt = data.publishedAt;
        newArticle.updatedAt = data.updatedAt;
        newArticle.featured = data.featured;
        newArticle.lauches = lauche;
        newArticle.events = event; 
        
        await newArticle.save();

        console.log(`${countInformationinsert} dados inseridos no banco`);   

        countInsertion--; 
        countInformationinsert++;

        if(countInsertion === 0) {
          console.log('Inserções no banco concluídas');
        }        
      });  
    }      

    return;
    
  } catch ( e ) {
    console.error(e);
  }
}

export default ScriptInsertData;