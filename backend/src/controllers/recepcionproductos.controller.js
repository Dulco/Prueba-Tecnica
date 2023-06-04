const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");
const recepcionproductos = require("../models").recepcionproductos;

module.exports = {
    async create(req, res) {
        const t = await sequelize.transaction();
        try {
            const { fecha, codigoprod, numidprov, numfactura, cantidad, lote, invima, vencimiento, descripcionestado } = req.body;
            const recepcion = await recepcionproductos.create({ fecha, codigoprod, numidprov, numfactura, cantidad, lote, invima, vencimiento, descripcionestado }, { transaction: t });
            await t.commit();
            return res.status(200).json({ recepcion });
        } catch (error) {
            await t.rollback();
            return res.status(error._statusCode ? error._statusCode : 500).json({ error: error._rawErrorMessage ? error._rawErrorMessage : error.message });
        }
    },
    async list(req, res) {
        try {
            const recepcionlist = await recepcionproductos.findAll();
            return res.status(200).json({
                recepcionlist: recepcionlist.map((item) => {
                    return {
                        id : item.id,
                        fecha: item.fecha,
                        codigoprod: item.codigoprod,
                        numidprov: item.numidprov,
                        numfactura: item.numfactura,
                        cantidad: item.cantidad,
                        lote: item.lote,
                        invima: item.invima,
                        vencimiento: item.vencimiento,
                        descripcionestado: item.descripcionestado
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
            const { fecha, codigoprod, numidprov, numfactura, cantidad, lote, invima, vencimiento, descripcionestado  } = req.body
            const { id } = req.params;
            const response = await recepcionproductos.update({ fecha, codigoprod, numidprov, numfactura, cantidad, lote, invima, vencimiento, descripcionestado  }, {
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

            const response = await recepcionproductos.destroy({
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