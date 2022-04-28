import Article from '../models/Article';

class ShowAllArticles {
  async handle(req, res) {
    const { _page, _order } = req.query;

    let order = _order ? _order : -1;
    let page = _page ? ( _page ) : 1;
    let limit = 10;
    let skip = limit * (Number(page) - 1);

    const dataArticle = await Article.find()
                                      .sort({publishedAt: Number(order)})
                                      .skip(skip)
                                      .limit(limit);

    if(dataArticle) {
      return res.status(200).json(dataArticle);
    }

    return res.status(404).json({message: 'Não há informações cadastradas'});
  }
}

export default new ShowAllArticles();