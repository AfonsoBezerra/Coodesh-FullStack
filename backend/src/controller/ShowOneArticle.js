import Article from "../models/Article";

class ShowAllArticles {
  async handle(req, res) {
    const { title } = req.params;

    const article = await Article.find({ $text: { $search: title } });

    if (article) {
      return res.status(200).json(article);
    }

    return res.status(404).json({ message: 'Não há informações cadastradas' });
  }
}

export default new ShowAllArticles();