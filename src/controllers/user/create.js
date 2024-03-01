import userModel from "../../models/userModel.js"

const create = async (req, res) => {
    try {
        const dados = req.body
        const user = await userModel.createUser(dados)
        res.json({
            success: `usuario ${id} criado com sucesso`,
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