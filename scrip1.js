//
let blackListImei=['Q3RgNM2B4XRCvRY','nrSGjR83onPFvQ','Td677ApO321KPx','DU7qQQT8qTZlWC','ilvZPY73MG69'];
let equipos=[];
let tecnicos=[];
let repuestos=[];
let Reparaciones=[];

class Equipo{
    constructor (nSerie, imei, marca, modelo,propietario,estado ){
        this.nSerie=nSerie;
        this.imei =imei;
        this.marca = marca;
        this.modelo = modelo;
        this.propietario = propietario;
        this.estado = estado;
        this.validacion=false;
        this.primeraRevisio=false;
        this.autorizacion = false;
        this.pago=false;
    }

}

class Tecnico{
    constructor(nombreCompleto, sk_android, sk_ios ){
        this.nombreCompleto= nombreCompleto;
        this.sk_android=sk_android;
        this.sk_ios=sk_ios;
    }

}

class repuesto{
    constructor(id,codigo,descripcion, existencia, precio   ){
        this.id =id;
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.existencia = existencia;
        this.precio= precio;
    }
}

class Reparacion{
    constructor(codigo, autorizacionEscrita,fecha, estado , id_cliente,id_equipo,id_respuesto, ){
        this.codigo=codigo;
        this.fecha=fecha;
        this.estado=estado;
        this.autorizacionEscrita=autorizacionEscrita;

    }
}
