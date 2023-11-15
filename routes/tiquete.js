import { Router } from "express";
import httpTiquete from "../controllers/tiquete.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersTiquete from "../helpers/tiquete.js";

const router = new Router();

router.get("/all", httpTiquete.getAllTiquete)

router.get("/buscar/:id", httpTiquete.getTiqueteId)

router.get("/filtrarFechas/:fechaA/:fechaB", httpTiquete.getFiltroFechas)

router.get("/asientosOcupados/:id/:fecha_salida", httpTiquete.getAsientosOcupados)

router.post("/guardar", [
    check("num_asiento", "Debe ingresar un asiento").notEmpty(),
    check("num_asiento", "Debe ingresar un asiento").custom(helpersTiquete.validarAsiento),
    check("vendedor", "Debe ingresar el id del vendedor").isMongoId(),
    check("ruta", "Debe ingresar el id del ruta").isMongoId(),
    check("cliente", "Debe ingresar el id del cliente").isMongoId(),
    check("fecha_salida", "La fecha es obligatoria").notEmpty(),
    validarCampos
], httpTiquete.postTiquete); 

// router.get("/buscar/:cedula", httpTiquete.getTiqueteCedula);

// router.get("/buscar/:id",  httpTiquete.getTiqueteId)

router.delete("/borrar/:id",  httpTiquete.deleteTiqueteId);

router.put("/editar/:id",  httpTiquete.putTiquete)

router.put("/inactivar/:id", httpTiquete.putTiqueteInactivar)

router.put("/activar/:id", httpTiquete.putTiqueteActivar)


export default router