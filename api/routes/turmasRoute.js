const {Router} = require ('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
    .get('/turmas', TurmaController.listarTurmas)
    .get('/turmas/:id', TurmaController.listaUmaTurmaPorId)
    .post('/turmas', TurmaController.cadastrarTurma)
    .put ('/turmas/:id', TurmaController.atualizarTurma)
    .delete('/turmas/:id', TurmaController.apagarTurmas)

module.exports = router