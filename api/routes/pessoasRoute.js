const {Router} = require ('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.listarPessoas)
    .get('/pessoas/:id', PessoaController.listaUmaPessoaPorId)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .put ('/pessoas/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/:id', PessoaController.apagarPessoas)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.cadastrarMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)

module.exports = router