const products = require("../data/products")

const indexController ={
    index:(req,res) =>{
        const saleProducts = products.filter((product)=>{
            return product.category === "in-sale"
        });
        const visitedProducts = products.filter((product)=>{
            return product.category === "visited"
        });

        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        res.render('index', {
            saleProducts,
            visitedProducts,
            toThousand
        });
    },
};

module.exports = indexController;