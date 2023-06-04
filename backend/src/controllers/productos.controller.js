const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");
const productos = require("../models").productos;

module.exports = {
    async create(req, res) {
        const t = await sequelize.transaction();
        try {
            const { codigo, nombre, descripcion, estado, nombrelab } = req.body;
            const producto = await productos.create({ codigo, nombre, descripcion, estado, nombrelab }, { transaction: t });
            await t.commit();
            return res.status(200).json({ producto });
        } catch (error) {
            await t.rollback();
            return res.status(error._statusCode ? error._statusCode : 500).json({ error: error._rawErrorMessage ? error._rawErrorMessage : error.message });
        }
    },
    async list(req, res) {
        try {
            const productoslist = await productos.findAll({
                order: [
                    ['id', 'ASC'],]
                });
            return res.status(200).json({
                productoslist: productoslist.map((item) => {
                    return {
                        id: item.id,
                        codigo: item.codigo,
                        nombre: item.nombre,
                        descripcion: item.descripcion,
                        estado: item.estado,
                        nombrelab: item.nombrelab,
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
            const { codigo, nombre, descripcion, estado, nombrelab  } = req.body
            const { id } = req.params;
            const response = await productos.update({ codigo, nombre, descripcion, estado, nombrelab  }, {
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

            const response = await productos.destroy({
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
