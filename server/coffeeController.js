module.exports = {
  addCoffee: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { coffeeName, coffeePic, sidePic, price, description } = req.body;

    dbConnect
      .addCoffee([coffeeName, coffeePic, sidePic, price, description])
      .then(coffee => res.status(200).send(coffee))
      .catch(err => res.status(500).send(err));
  },

  getAllCoffee: (req, res, next) => {
    const dbConnect = req.app.get("db");

    dbConnect
      .getAllCoffee()
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },

  getDeathwish: (req, res, next) => {
    const dbConnect = req.app.get("db");

    dbConnect
      .getDeathwish()
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  }
};
