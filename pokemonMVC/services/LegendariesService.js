const LegendaryModel = require('../models/LegendaryModel')


const LegendariesService = {
    listLegendaries: ()=>{

        const mewtwo = new LegendaryModel(1, 'MewTwoo', '/images/mew.svg' ,'mewtwoo','bla bla mew lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Pyschic',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');
        
        const moltres = new LegendaryModel(2, 'Moltres', '/images/moltres.svg' ,'moltres', 'bla bla bla moltres ipsum  bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Flame',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');

        const articuno = new LegendaryModel(3, 'Articuno', '/images/articuno.svg' ,'articuno', 'bla bla bla articuno ipsum  bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Bird',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');

        const zapdos = new LegendaryModel(4, 'Zapdos', '/images/zapdos.svg' ,'zapdos', 'bla bla bla zapdos  ipsum  bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Bird',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');

        const diance = new LegendaryModel(5, 'Diance', '/images/diance.svg' ,'diance', 'bla bla  ipsum diance bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Bird',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');

        const xerneas = new LegendaryModel(6, 'Xerneas', '/images/xerneas.svg' ,'xerneas', 'bla xerneas bla  ipsum diance bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum', 'Bird',
        '1000,000','1000,000','1000,000','1000,000','1000,000','1000,000');

        return [mewtwo, moltres, articuno, zapdos, diance, xerneas];
    },

    listPokemonData: (pokemonName)=>{

       pokemonName = pokemonName.toLowerCase();
        
       const pokemonList = LegendariesService.listLegendaries();

       const pokemon = pokemonList.find(item => item.slug === pokemonName);

       return pokemon;
       
    }
}

module.exports = LegendariesService;