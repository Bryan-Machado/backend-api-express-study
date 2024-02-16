const create = (req, res) => {
    const user = req.body
    res.json({message: 'esta é a rota POST para /user/', user})
}

export default create