const instituiçãoModel = require("../models/instituiçãoModel");

// - Filtros, o primeiro lista todas instituições, o segundo as encontra por modalidade de atendimento.
const findAllInstituições = async (req, res) => {  
  try {
    AllInstituições = await instituiçãoModel.find();
    res.status(200).json(allOngs);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

const findInstituiçãoPorModalidade = async (req, res) => {
  try {
  const filtroModalidade = req.query.modalidade.toLowerCase()
    findInstituiçãoPorModalidade = await instituiçãoModel.find({modalidade: filtroModalidade})
    res.status(200).json(findmodali);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
}; 

//Funções outras.
const addNewInstituição = async (req, res) => {  
  try {
    console.log
    const {
      _id:
      nomeDaInstituição,
      cidadeDaInstituição,
      procedimentosOferecidos,
      endereço,
      telefone,
      email,
      site,
    } = req.body;
    const newInstituição = new InstituiçãoModel({
      _id:
      nomeDaInstituição,
      cidadeDaInstituição,
      procedimentosOferecidos,
      telefone,
      endereço,
      email,
      site,
    });

    const savedInstituição = await newInstituição.save();

    res.status(201).json({ message: "Parabéns! Uma nova instituição foi adicionada ao database.", savedInstituição });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  };
};

const updateInstituição = async (req, res) => {  
  try {
    const {
      _id:
      nomeDaInstituição,
      cidadeDaInstituição,
      procedimentosOferecidos,
      endereço,
      telefone,
      email,
      site,
    } = req.body;
    const updateInstituição = await instituiçãoModel.findByIdAndUpdate(req.params.id, {
      _id:
      nomeDaInstituição,
      cidadeDaInstituição,
      procedimentosOferecidos,
      telefone,
      endereço,
      email,
      site,
    });

    res.status(200).json({ message: "As informações da instituição foram atualizadas com sucesso!" });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteInstituição = async (req, res) => {  
  try {
    const { id } = req.params;
    const deleteInstituição = await instituiçãoModel.findByIdAndDelete(id);
    const message = `A seguinte instituição: ${deleteInstituição.nomeDaInstituição}, foi deletada com sucesso`;
    res.status(200).json({ message });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
    findAllInstituições,
    findInstituiçãoPorModalidade,
    addNewInstituição,
    updateInstituição,
    deleteInstituição,
};