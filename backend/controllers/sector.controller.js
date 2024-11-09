import { pool } from '../db.js';

export const getSectores = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT 
    id_sector,
    nombre,
    CASE 
        WHEN id_existencia IS NOT NULL THEN 'Sí'
        ELSE 'No'
    END AS id_existencia
FROM sector;`);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los sectores',
            error: error.message
        });
    }
};

export const filtrossector = async (req, res) => {
    const { id_sector } = req.body;
    console.log(id_sector);
    try {
        console.log("Ejecutando consulta SQL...");
        const [rows] = await pool.query(`
                                SELECT 
    tag.id_tag,
    activo.nombre AS nombre_activo,
    edificio.nombre AS nombre_edificio,
    piso.nombre AS nombre_piso,
    ubicacion.nombre AS nombre_ubicacion
FROM 
    tag
JOIN 
    activo ON tag.id_activo = activo.id_activo
JOIN 
    edificio ON tag.id_edificio = edificio.id_edificio
JOIN 
    piso ON tag.id_piso = piso.id_piso
JOIN 
    ubicacion ON tag.id_ubicacion = ubicacion.id_ubicacion
WHERE 
    tag.id_sector = ?;


  
        `, [id_sector]);
  
        console.log("Consulta ejecutada correctamente", rows);
        res.json(rows);
    } catch (error) {
        console.error("Error en el servidor:", error);
        return res.status(500).json({
            message: "Error al obtener filtro",
            error: error.message,
        });
    }
  };

export const getSector = async (req, res) => {
    const { id_sector } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM sector WHERE id_sector = ?', [id_sector]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el sector',
            error: error.message
        });
    }
};

export const createSector = async (req, res) => {
    const { id_sector, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO sector (id_sector, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_sector, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el sector',
            error: error.message
        });
    }
};

export const editSector = async (req, res) => {
    const { id_sector } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE sector SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_sector = ?',
            [nombre, id_existencia, id_sector]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM sector WHERE id_sector = ?', [id_sector]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el sector',
            error: error.message
        });
    }
};

export const deleteSector = async (req, res) => {
    const { id_sector } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM sector WHERE id_sector = ?', [id_sector]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        res.send('Sector eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el sector',
            error: error.message
        });
    }
};