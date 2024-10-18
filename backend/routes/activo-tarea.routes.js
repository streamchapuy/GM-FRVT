import { Router } from "express";
import { createActivoTarea, deleteActivoTarea, editActivoTarea, getActivoTarea, getActivoTareas } from "../controllers/activo-tarea.controller.js";

const router = Router()

router.get('/activo-tareas', getActivoTareas)
router.get('/activo-tarea/:id_activo_tarea', getActivoTarea)
router.post('/activo-tarea', createActivoTarea)
router.patch('/activo-tarea/:id_activo_tarea', editActivoTarea)
router.delete('/avtivo-tarea/:id_activo_tarea', deleteActivoTarea)

export default router