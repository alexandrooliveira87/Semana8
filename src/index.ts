import "reflect-metadata";
import express from "express"
import {AppDataSource} from "./data-source"

import cors from "cors"

import userRouter from "./routes/user.routes";
import productRouter from "./routes/product.routes";

const app = express()

app.use(cors()) // Permite que o express entenda requisições de outros domínios

app.use(express.json()) // Permite que o express entenda JSON

app.use("/users", userRouter)
app.use("/products", productRouter)

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("O servidor está rodando em http://localhost:3000")
    })
}).catch(error => console.log(error))

