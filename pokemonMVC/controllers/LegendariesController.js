const LegendariesService = require('../services/LegendariesService')

const controller = {
    index: (req,res)=>{
      var {name} = req.query;

      if (name === undefined){
        name = "MewTwoo"
      }
      
      const legendary = LegendariesService.listPokemonData(name);

      return res.render('legendaries',{
        legendary
      });
    }
}

module.exports = controller;