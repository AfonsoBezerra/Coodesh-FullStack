class InitialRoute {
  
  async handle(req, res) {
    const message = 'Fullstack Challenge 2021 🏅 - Space Flight News';

    return res.status(200).json({ message });
  }
}

export default new InitialRoute();