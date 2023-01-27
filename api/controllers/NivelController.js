const database = require('../models')

class NivelController {
    static async listarNiveis(req, res){
        try{
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async listarNivelPorId(req, res) {
        const id = req.params.id
        try{
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)}
                })
                return res.status(200).json(umNivel)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastrarNivel(req, res) {
        const criarNivel = req.body
        try {
            const novoNivel = await database.Niveis.create(criarNivel)
            return res.status(200).json(novoNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 

    static async atualizarNivel(req, res){
        const atualizaNivel = req.body
        const id = req.params.id;
        try {
            await database.Niveis.update(atualizaNivel, { where: { id: Number(id) }})
            const NivelsAtualizados = await database.Niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(NivelsAtualizados)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagarNiveis(req, res){
        const id = req.params.id
        try{
            await database.Niveis.destroy({where: {id : Number(id)}})
            return res.status(200).send({message: 'Nivel removido com sucesso'})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NivelController