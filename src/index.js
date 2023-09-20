import express from "express";
import productRouter from "./router/product.routes.js";
import CartRouter from "./router/cart.routes.js";
import { engine } from "express-handlebars";
import * as path from "path"
import __dirname from "./utils.js";
import ProductManager from "./controllers/ProductManager.js";
import { Server } from 'socket.io'

const app = express();
const httpServer = app.listen(8080, () => console.log( "servidor en el puerto 8080" ));

const socketServer = new Server(httpServer);  



const product = new ProductManager(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/products", productRouter)
app.use("/api/cart", CartRouter)

//Handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))

//static
app.use("/", express.static(__dirname + "/public"))

app.get("/", async (req,res) => {
    let allProducts = await product.getProducts()
    res.render("partials/home",{
        title: "Cuarta Entrega | Handlebars",
        products : allProducts
    })
})

app.get("/:id", async (req,res) => {
    console.log(req.params)
    let prod = await product.getProductsById(req.params.id)
    res.render("partials/realTimeProducts",{
        title: "Cuarta Entrega | Handlebars",
        products : prod
    })
})


