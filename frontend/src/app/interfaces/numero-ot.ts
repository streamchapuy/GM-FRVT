export interface NumeroOT {
    id_ot: number;
    id_tag: number;
    id_usuarios: number;
    id_estado: number;
    descripcion: string;
    fecha_creacion: Date;
    fecha_finalizacion?: Date;
    tiempo_inicio?: Date;
    tiempo_finalizacion?: Date;
     
}