const {Router} = require ('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
    .get('/niveis', NivelController.listarNiveis)
    .get('/niveis/:id', NivelController.listarNivelPorId)
    .post('/niveis', NivelController.cadastrarNivel)
    .put ('/niveis/:id', NivelController.atualizarNivel)
    .delete('/niveis/:id', NivelController.apagarNiveis)

module.exports = router