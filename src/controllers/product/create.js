import productModel from "../../models/productModel.js"

const create = async (req, res) => {
    try {
        const dados = req.body
        const user = await productModel.createUser(dados)
        res.json({
            success: `produto ${id} encontrado com sucesso`,
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'oops, erro no servidor, tente novamente!'
        })
    }
}

export default create