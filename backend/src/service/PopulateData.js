import fs from 'fs';

const PopulateData = async () => {
 
  const data = await fs.readFileSync('../list-articles.json'); 

  return JSON.stringify(data);
}

export default PopulateData;
