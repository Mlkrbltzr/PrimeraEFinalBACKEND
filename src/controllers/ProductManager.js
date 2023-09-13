import { promises as fs} from 'fs'

class ProductManager {
    constructor () {
        this.patch = "./src/models/products.json"
    }

    writeProducts = async (product) => {
        let products = await fs.readFile(this.patch, "utf-8")
        let productsParse = JSON.parse(products)
        let productAll = [...productsParse, product]
        await fs.writeFile(this.patch,JSON.stringify(productAll))
        return "Producto Agregado"
    };

    getproducts = async () =>
}
export default ProductManager

