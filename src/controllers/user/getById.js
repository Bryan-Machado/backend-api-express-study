const getById = (req, res) => {
    const id = req.params.id
    res.json({message: 'esta é a rota para /user/id   ID = ' + id})
}

export default getById