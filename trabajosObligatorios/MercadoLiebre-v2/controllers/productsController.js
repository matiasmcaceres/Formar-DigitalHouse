const products = require("../data/products")

const productsController ={
    detail:(req,res) =>{
        const id = req.params.id
        const product = products.find(product => {
            return product.id === +id
        });
        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


        res.render('productsDetail',{
            product,
            toThousand,
        });
    }
}

module.exports = productsController;