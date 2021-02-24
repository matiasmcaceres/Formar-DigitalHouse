const fs = require('fs');

const products = {
  getProducts: JSON.parse(fs.readFileSync(`${__dirname}/productsDataBase.json`, 'utf-8')),

  setProducts: (data) => {
    fs.writeFileSync(`${__dirname}/productsDataBase.json`, JSON.stringify(data, null, 2), 'utf-8');/* El "null, 2"  Hacen que el documento JSON al sobreescribirle nueva informacion, este tenga formato para que sea mas legible */
  },
}

module.exports = products;