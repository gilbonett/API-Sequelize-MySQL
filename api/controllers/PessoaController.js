const database = require('../models')

class PessoaController {
    static async listarPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listaUmaPessoaPorId(req, res) {
        const id = req.params.id
        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)}
                })
                return res.status(200).json(umaPessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarPessoa(req, res) {
        const criarPessoa = req.body
        try {
            const novaPessoa = await database.Pessoas.create(criarPessoa)
            return res.status(200).json(novaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 

    static async atualizarPessoa(req, res){
        const actualizarInfos = req.body
        const id = req.params.id;
        try {
            await database.Pessoas.update(actualizarInfos, { where: { id: Number(id) }})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagarPessoas(req, res){
        const id = req.params.id
        try{
            await database.Pessoas.destroy({where: {id : Number(id)}})
            return res.status(200).send({message: 'Pessoa removida com sucesso'})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async listaMatricula(req, res) {
        const {estudanteId, matriculaId} = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
                })
                return res.status(200).json(umaMatricula)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarMatricula(req, res) {
        const {estudanteId} = req.params
        const novaMatricula = {...req.body, estudante_id : Number(estudanteId)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 

    static async atualizarMatricula(req, res){
        const actualizarInfos = req.body
        const {estudanteId, matriculaId} = req.params

        try {
            await database.Matriculas.update(actualizarInfos, { 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }})
            const matriculaAtualizada = await database.Matriculas.findOne({where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagarMatricula(req, res){
        const {estudanteId, matriculaId} = req.params
        try{
            await database.Matriculas.destroy({where: {id : Number(matriculaId)}})
            return res.status(200).send({message: 'Matricula removida com sucesso'})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }



}

module.exports = PessoaController