const mongoose = require("mongoose");

const instituiçãoSchema = mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
      nomeDaInstituição: {
        type: String,
        required: true,
        unique: true,
      },
      cidadeDaInstituição: {
        type: String,
        required: true,
        unique: true,  
      },
      procedimentosOferecidos: {
        type: String,
        required: true,
        unique: true,  
      },
      endereço: {
        type: String,
        required: true,
      },
      telefone: {
        type: String,
        required: true,
      },
      email: {
          type: String,
          required: true,
      },
      site: {
        type: String,
        required: true,
      },
    },
    { timestamp: true }
  );

const Model = mongoose.model("instituição", instituiçãoSchema);

module.exports = Model;