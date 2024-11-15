import { Router } from "express";
import { createActivo, deleteActivo, editActivo, getActivo, getActivos, getActivofiltro } from "../controllers/activo.controller.js";

const router = Router()

router.get('/activos', getActivos)
router.post('/activosfiltros', getActivofiltro)
router.get('/activo/:id_activo', getActivo)
router.post('/activo', createActivo)
router.patch('/activo/:id_activo', editActivo)
router.delete('/activo/:id_activo', deleteActivo)

export default router