const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");
const provedores = require("../models").provedores;

module.exports = {
    async create(req, res) {
        const t = await sequelize.transaction();
        try {
            const { idtype, numid, nombre, direccion, nombrecontacto, celcontacto } = req.body;
            const provedor = await provedores.create({ idtype, numid, nombre, direccion, nombrecontacto, celcontacto }, { transaction: t });
            await t.commit();
            return res.status(200).json({ provedor });
        } catch (error) {
            await t.rollback();
            return res.status(error._statusCode ? error._statusCode : 500).json({ error: error._rawErrorMessage ? error._rawErrorMessage : error.message });
        }
    },
    async list(req, res) {
        try {
            const provedoreslist = await provedores.findAll();
            return res.status(200).json({
                provedoreslist: provedoreslist.map((item) => {
                    return {
                        id : item.id,
                        idtype: item.idtype,
                        numid: item.numid,
                        nombre: item.nombre,
                        direccion: item.direccion,
                        nombrecontacto: item.nombrecontacto,
                        celcontacto: item.celcontacto
                    }
                })
            });
        } catch (e) {

            return res
                .status(e._statusCode ? e._statusCode : 500)
                .json({ error: e._rawErrorMessage ? e._rawErrorMessage : e.message });
        }

    },

    async update(req, res) {
        const t = await sequelize.transaction();
        try {
            const { idtype, numid, nombre, direccion, nombrecontacto, celcontacto  } = req.body
            const { id } = req.params;
            const response = await provedores.update({ idtype, numid, nombre, direccion, nombrecontacto, celcontacto  }, {
                where: {
                    id
                }
            })
            await t.commit();
            return res.status(200).json({ response: response[0] === 1 ? "Registro actualizado con exito" : "Registro no encontrado" });
        } catch (e) {
            await t.rollback();
            return res
                .status(e._statusCode ? e._statusCode : 500)
                .json({ error: e._rawErrorMessage ? e._rawErrorMessage : e.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const response = await provedores.destroy({
                where: {
                    id
                }
            })
    
            return res.status(200).json({ response: response === 1 ? "Registro eliminado con exito" : "Registro no encontrado" });
        } catch (e) {
            return res
                .status(e._statusCode ? e._statusCode : 500)
                .json({ error: e._rawErrorMessage ? e._rawErrorMessage : e.message });
        }
    },
}


