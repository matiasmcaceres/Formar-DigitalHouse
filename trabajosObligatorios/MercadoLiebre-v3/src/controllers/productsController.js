const fs = require('fs');
const path = require('path');

const {getProducts,setProducts} = require("../data/products")

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const productId = req.params.productId;

		let resultado = products.find(producto => {
			return producto.id === +productId
		})
		res.render('detail', {
			resultado,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const { name, price, discount, category, description, image } = req.body;

		let lastId = 0;
		products.forEach((product) => {
			if (product.id > lastId) {
				lastId = product.id
			}
		})
		const id = lastId + 1;

		const newProduct = {
			id,
			name,
			price: +price,
			discount: +discount,
			category,
			description,
			image: image || 'default-image.png'  /* si image es undefined poner la imagen por defecto 'default-image.png' */
		}

		/* pusheo el nuevo producto a la base de datos */
		products.push(newProduct);
		
		/* sobreescribe los cambios en el archivo JSON */
		setProducts(products)

		res.redirect('/')/* redirecciona la ruta */
	},

	// Update - Form to edit
	edit: (req, res) => {
		const { productId } = req.params;

		let producto = products.find(producto => {
			return +productId === producto.id
		})
		res.render('product-edit-form', {
			producto
		})
	},
	// Update - Method to update
	update: (req, res) => {
		const { name, price, discount, category, description, image } = req.body;
		const { productId } = req.params;

		const updatedProduct = {
			id: +productId,
			name,
			price: +price,
			discount: +discount,
			category,
			description,
			image: image || 'default-image.png'
		}
		products.forEach((product, index/* index es la posicion del array */) => {
			if (product.id === +productId) {
				products.splice(index, 1, updatedProduct)/* (empalme)splice:(posicion del array que afecta , cantidad de elementos a eliminar , contenido a agregar o remplazar)*/
			}
		})

		setProducts(products);

		res.redirect('/products/detail/' + productId)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const { productId } = req.params;

		const productFilter = products.filter((product) => {
			return product.id !== +productId;
		})

		setProducts(productFilter);

		res.redirect('/')
	}
};

module.exports = controller;