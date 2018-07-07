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
      .catch(err => res.status(500).send(err));
  },

  updateDeathwish: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { coffee_name, coffee_pic, side_pic, description } = req.body;

    dbConnect
      .updateDeathwish([coffee_name, coffee_pic, side_pic, description])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  deleteDeathwish: (req, res, next) => {
    const dbConnect = req.app.get("db");

    dbConnect
      .deleteDeathwish()
      .then(() => res.status.send(200))
      .catch(() => res.status(500).send());
  }
};
