const database = require('../models')

class TurmaController {
    static async listarTurmas(req, res){
        try{
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listaUmaTurmaPorId(req, res) {
        const id = req.params.id
        try{
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)}
                })
                return res.status(200).json(umaTurma)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarTurma(req, res) {
        const criarTurma = req.body
        try {
            const novaTurma = await database.Turmas.create(criarTurma)
            return res.status(200).json(novaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 

    static async atualizarTurma(req, res){
        const actualizarInfos = req.body
        const id = req.params.id;
        try {
            await database.Turmas.update(actualizarInfos, { where: { id: Number(id) }})
            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagarTurmas(req, res){
        const id = req.params.id
        try{
            await database.Turmas.destroy({where: {id : Number(id)}})
            return res.status(200).send({message: 'Turma removida com sucesso'})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmaController