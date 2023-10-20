import { Router } from "express";
import httpTiquete from "../controllers/tiquete.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";

const router = new Router();

router.get("/all", httpTiquete.getAllTiquete)

router.get("/buscar/:id", httpTiquete.getTiqueteId)

router.get("/filtrarFechas/:fechaA/:fechaB", httpTiquete.getFiltroFechas)

router.post("/guardar", [
    check("vendedor", "Debe ingresar el id del vendedor").isMongoId(),
    check("ruta", "Debe ingresar el id del ruta").isMongoId(),
    check("cliente", "Debe ingresar el id del cliente").isMongoId(),
], httpTiquete.postTiquete);

// router.get("/buscar/:cedula", httpTiquete.getTiqueteCedula);

// router.get("/buscar/:id",  httpTiquete.getTiqueteId)

router.delete("/eliminar/:cedula",  httpTiquete.deleteTiquete);

router.put("/editar/:id",  httpTiquete.putTiquete)

router.put("/desactivar/:id", httpTiquete.putTiqueteInactivar)

router.put("/activar/:id", httpTiquete.putTiqueteActivar)


export default router