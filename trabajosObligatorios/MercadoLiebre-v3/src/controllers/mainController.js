const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		const saleProducts = products.filter(producto => {
			return producto.category === 'in-sale'
		})
		const visitedProducts = products.filter(producto => {
			return producto.category === 'visited'
		})
		res.render('index', {
			saleProducts,
			visitedProducts,
			toThousand
		})
	},
	search: (req, res) => {
		const { keywords } = req.query;
		let resultados = products.filter(producto => {
			return producto.name.toLowerCase().includes(keywords.toLowerCase())
		})
		res.render('results', {
			resultados,
			toThousand

		})
	},
};

module.exports = controller;