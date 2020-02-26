const mongoose = require("mongoose");
const product = mongoose.model("Product"); //impota o model

module.exports = {
  //metodo que retorna todos os reg do bd
  async index(req, res) {
    const {page = 1} = req.query;
    const produtos = await product.paginate({}, {page, limit:10});
    return res.json(produtos);
  },

  //retorna um
  async show(req, res) {
    const produto = await product.findById(req.params.id);
    return res.json(produto);
  },

  //cria dados
  async store(req, res) {
    const produto = await product.create(req.body);
    return res.json(produto);
  },

  async update(req, res){
      const produto = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      return res.json(produto);
  },

  async destroy(req, res){
      await product.findByIdAndDelete(req.params.id);
      res.send();
  }
};
