const create = (req, res) => {
    const product = req.body
    res.json({message: 'esta é a rota POST para /product/', product})
}

export default create