const cat5 = {
  Soap: {
    HimalayaSoap: {
      toxic_ingredients: ['Fragrances', 'Tetrasodium EDTA', 'Cosmetic Colours'],
      title: ['Himalaya Soap'],
      image: require('./assets/Images/Soapimg/Himalaya_Soap-removebg-preview.png'),
      url:
        'https://www.amazon.in/Himalaya-Herbals-Turmeric-125gm-Value/dp/B011C1B2XY/ref=sr_1_9?dchild=1&keywords=Himalaya+Soap&qid=1624066741&sr=8-9',
    },
    LuxSoap: {
      toxic_ingredients: [
        'Fragrances',
        'PEG',
        'Tetrasodium EDTA',
        'Methylchloroisothiazolinone',
        'Cosmetic Colours',
      ],
      title: ['Lux Soap'],
      image: require('./assets/Images/Soapimg/Lux_Soap-removebg-preview.png'),
      url:
        'https://www.amazon.in/DPCOLLECTIONS-Strawberry-Cream-Soap-Each/dp/B08RXTBX6G/ref=sr_1_20?dchild=1&keywords=Lux+Soap&qid=1624066778&sr=8-20',
    },
    Santoor: {
      toxic_ingredients: ['Fragrances', 'Cosmetic Colours'],
      title: ['Santoor'],
      image: require('./assets/Images/Soapimg/Santoor-removebg-preview.png'),
      url:
        'https://www.amazon.in/Santoor-Sandal-Turmeric-Soap-100g/dp/B00O30EUGS/ref=sr_1_17?dchild=1&keywords=Santoor&qid=1624066805&sr=8-17',
    },
    FiamadiWills: {
      toxic_ingredients: [
        'Propylene Glycol',
        'PEG',
        'Fragrances',
        'BHT',
        'Cosmetic Colours',
      ],
      title: ['Fiama di Wills'],
      image: require('./assets/Images/Soapimg/Fiama_di_Wills-removebg-preview.png'),
      url:
        'https://www.amazon.in/Fiama-Gel-Blackcurrant-Bearberry-Pack/dp/B0845CMQCK/ref=sr_1_13?dchild=1&keywords=Fiama+di+Wills&qid=1624066854&sr=8-13',
    },
    Dettol: {
      toxic_ingredients: ['Fragrances', 'Tetrasodium EDTA', 'PEG', 'Trideceth'],
      title: ['Dettol'],
      image: require('./assets/Images/Soapimg/Dettol-removebg-preview.png'),
      url:
        'https://www.amazon.in/Dettol-Original-Soap-75g-Pack/dp/B078KHP29L/ref=sr_1_5?dchild=1&keywords=Dettol&qid=1624066891&sr=8-5',
    },
    Pears: {
      toxic_ingredients: [
        'Propylene Glycol',
        'PEG',
        'Fragrances',
        'Tetrasodium EDTA',
        'BHT',
        'Cosmetic Colours',
      ],
      title: ['Pears'],
      image: require('./assets/Images/Soapimg/Pears-removebg-preview.png'),
      url:
        'https://www.amazon.in/Pears-Pure-Gentle-Soap-125g/dp/B0744KM1FV/ref=sr_1_5?dchild=1&keywords=Pears&qid=1624066921&sr=8-5',
    },
    Lifebuoy: {
      toxic_ingredients: ['Fragrances', 'Tetrasodium EDTA'],
      title: ['Lifebuoy'],
      image: require('./assets/Images/Soapimg/Lifebuoy-removebg-preview.png'),
      url:
        'https://www.amazon.in/Lifebuoy-Bath-Soap-Total-4Nx125g/dp/B06XGBSS48/ref=sr_1_11?dchild=1&keywords=Lifebuoy+soap&qid=1624066975&sr=8-11',
    },
    ParkAvenue: {
      toxic_ingredients: ['Fragrances', 'BHT', 'Cosmetic Colours'],
      title: ['Park Avenue'],
      image: require('./assets/Images/Soapimg/Park_Avenue-removebg-preview.png'),
      url:
        'https://www.amazon.in/Park-Avenue-Good-Morning-Soap/dp/B094N3C7G7/ref=sr_1_8?dchild=1&keywords=Park+Avenue+soap&qid=1624066999&sr=8-8',
    },
    Vivel: {
      toxic_ingredients: ['Fragrances', 'Tetrasodium EDTA', 'BHT'],
      title: ['Vivel'],
      image: require('./assets/Images/Soapimg/Vivel-removebg-preview.png'),
      url:
        'https://www.amazon.in/Vivel-Aloe-Vera-Satin-Vitamin/dp/B01M0TK5AP/ref=sr_1_5?dchild=1&keywords=Vivel&qid=1624067031&sr=8-5',
    },
    Hamam: {
      toxic_ingredients: [
        'Fragrances',
        'Tetrasodium EDTA',
        'Mythylchlorosiothiazolinone',
        'Cosmetic Colours',
      ],
      title: ['Hamam'],
      image: require('./assets/Images/Soapimg/Hamam-removebg-preview.png'),
      url:
        'https://www.amazon.in/Hamam-Neem-Tulsi-Aloevera-Soap/dp/B079RL9BGB/ref=sr_1_1?dchild=1&keywords=Hamam&qid=1624067774&sr=8-1',
    },
    Cinthol: {
      toxic_ingredients: ['BHT', 'Cosmetic Colours'],
      title: ['Cinthol'],
      image: require('./assets/Images/Soapimg/Cinthol-removebg-preview.png'),
      url:
        'https://www.amazon.in/Cinthol-Original-Soap-100gm/dp/B0041RQCXC/ref=sr_1_17?dchild=1&keywords=Cinthol&qid=1624067803&sr=8-17',
    },
    Rexona: {
      toxic_ingredients: [
        'Fragrances',
        'Tetrasodium EDTA',
        'Cosmetic Colours',
        'Mythylchlorosiothiazolinone',
      ],
      title: ['Rexona'],
      image: require('./assets/Images/Soapimg/Renxona-removebg-preview.png'),
      url:
        'https://www.amazon.in/Rexona-Soap-Coconut-Olive-4x100g/dp/B078T4KPBQ/ref=sr_1_5?dchild=1&keywords=Rexona+soap&qid=1624067846&sr=8-5',
    },
    Liril: {
      toxic_ingredients: [
        'Fragrances',
        'Tetrasodium EDTA',
        'Cosmetic Colours',
        'Mythylchlorosiothiazolinone',
      ],
      title: ['Liril'],
      image: require('./assets/Images/Soapimg/Liril-removebg-preview.png'),
      url:
        'https://www.amazon.in/Liril-2000-Lime-Rush-75gm/dp/B007ATN74U/ref=sr_1_7?dchild=1&keywords=Liril+soap&qid=1624067892&sr=8-7',
    },
    Medimix: {
      toxic_ingredients: ['Fragrances', 'Cosmetic Colours'],
      title: ['Medimix'],
      image: require('./assets/Images/Soapimg/Medimix-removebg-preview.png'),
      url:
        'https://www.amazon.in/Medimix-Ayurvedic-Classic-Herbs-Soap/dp/B000LD54VQ/ref=sr_1_45?dchild=1&keywords=Medimix+soap&qid=1624155607&sr=8-45',
    },
    Dove: {
      toxic_ingredients: ['Fragrances', 'Tetrasodium EDTA'],
      title: ['Dove'],
      image: require('./assets/Images/Soapimg/Dove-removebg-preview.png'),
      url:
        'https://www.amazon.in/Dove-Cream-Beauty-Bathing-Free/dp/B008KH5FBE/ref=sr_1_15?dchild=1&keywords=Dove+soap&qid=1624155659&sr=8-15',
    },
    MysoreSandalSoap: {
      toxic_ingredients: ['Tetrasodium EDTA', 'Fragrances', 'Cosmetic Colours'],
      title: ['Mysore Sandal Soap'],
      image: require('./assets/Images/Soapimg/Mysore_Sandal_Soap-removebg-preview.png'),
      url:
        'https://www.amazon.in/MYSORE-SANDAL-Mysore-Sandal-Soap/dp/B0019D5N1S/ref=sr_1_14?dchild=1&keywords=Mysore+Sandal+soap&qid=1624155727&sr=8-14',
    },
    Chandrika: {
      toxic_ingredients: ['Fragrances', 'Cosmetic Colours'],
      title: ['Chandrika'],
      image: require('./assets/Images/Soapimg/Chandrika-removebg-preview.png'),
      url:
        'https://www.amazon.in/Chandrika-Ayurvedic-Soap-75g-Pack/dp/B07BDP1KZD/ref=sr_1_9?dchild=1&keywords=%3AChandrika+soap&qid=1624155783&sr=8-9',
    },
    Margo: {
      toxic_ingredients: ['Fragrances', 'Cosmetic Colours'],
      title: ['Margo'],
      image: require('./assets/Images/Soapimg/Margo-removebg-preview.png'),
      url:
        'https://www.amazon.in/Margo-Soap-Neem-5x100g-Promo/dp/B078FBC7CS/ref=sr_1_8?dchild=1&keywords=Margo+soap&qid=1624155824&sr=8-8',
    },
    LeverAyush: {
      toxic_ingredients: ['Incomplete Ingredients'],
      title: ['Lever Ayush'],
      image: require('./assets/Images/Soapimg/Lever_Ayush-removebg-preview.png'),
      url:
        'https://www.amazon.in/Lever-Ayush-Purifying-Turmeric-Soap/dp/B09334YDF9/ref=pd_sbs_4/262-7751232-4478412?pd_rd_w=HK0CC&pf_rd_p=18688541-e961-44b9-b86a-bd9b8fa83027&pf_rd_r=1A6VFX78634BM0ENHK6Z&pd_rd_r=3b269491-9958-4e13-99ce-64c3b82ea35c&pd_rd_wg=J8Qdp&pd_rd_i=B09334MSGG&psc=1',
    },
    Biotique: {
      toxic_ingredients: ['Incomplete Ingredients'],
      title: ['Biotique'],
      image: require('./assets/Images/Soapimg/Biotique-removebg-preview.png'),
      url:
        'https://www.amazon.in/Biotique-Almond-Nourishing-Body-Soap/dp/B007E9JIAS/ref=sr_1_4?dchild=1&keywords=Biotique+soap&qid=1624155963&s=beauty&sr=1-4',
    },
    Nivea: {
      toxic_ingredients: ['Fragrances'],
      title: ['Nivea'],
      image: require('./assets/Images/Soapimg/Nivea-removebg-preview.png'),
      url:
        'https://www.amazon.in/Nivea-Creme-Care-Soap-125g/dp/B01IVBWACA/ref=sr_1_6?dchild=1&keywords=Nivea+soap&qid=1624156007&s=beauty&sr=1-6',
    },
    PatanjaliHaldiChandhan: {
      toxic_ingredients: ['Fragrances', 'Cosmetic Colours'],
      title: ['PatanjaliHaldiChandhan'],
      image: require('./assets/Images/Soapimg/patanjali_haldi_chandhan-removebg-preview.png'),
      url:
        'https://www.amazon.in/Patanjali-Haldi-Chandan-Soap-150g/dp/B01LXIGF65/ref=sr_1_4?dchild=1&keywords=patanjali+haldi+chandan+soap&qid=1624156039&s=beauty&sr=1-4',
    },
  },
};
export default cat5;
