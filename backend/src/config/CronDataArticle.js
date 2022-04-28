import fetch from "cross-fetch";
import { CronJob } from "cron"; 

import Article from "../models/Article";

const CronArticle = new CronJob('0 0 9 * * *', async () => {

    let countInsertionBefore = await Article.count({ id: {$gt: 0} });
    const { id } = await Article.findOne({ id: {$gt: 0} }).sort({ id: -1 });
    
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles`;
    let countInsertionAfter = apiUrl.length;

    const getDataArticlesApi = await fetch(`${apiUrl}?_limit=${apiUrl.length}`);
    const response = await getDataArticlesApi.json();

    if( getDataArticlesApi.status >= 400 ) {
      throw new Error('Erro na requisição');
    }
    
    try {

      if(countInsertionAfter > countInsertionBefore) {
      
        const dataArticle = response.filter(obj => obj.id > id);
  
        await dataArticle.map(async (data) => {
  
          let lauche = [];
          data.launches.map((e) => {
            lauche.push(e);
          });  
          
          let event = [];
          data.events.map((e) => {
            event.push(e)
          });
  
          const updateArticle = new Article();
          updateArticle.id = data.id;
          updateArticle.title = data.title;
          updateArticle.url = data.url;
          updateArticle.imageUrl = data.imageUrl;
          updateArticle.newsSite = data.newsSite;
          updateArticle.summary = data.summary;
          updateArticle.publishedAt = data.publishedAt;
          updateArticle.updatedAt = data.updatedAt;
          updateArticle.featured = data.featured;
          updateArticle.lauches = lauche;
          updateArticle.events = event; 
          
          await updateArticle.save();
  
          console.log('update performed in '+ new Date());
        });      
      }
    } catch (err) {
      console.log(err);
      return;
    }
  });

export default CronArticle;