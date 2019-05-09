export class Helado {
    id: number;
    sabor: String;
    tipo: String;
    kilos: number;
    foto: string;

    constructor(id, sabor, tipo, kilos, foto) {
        this.id = id;
        this.sabor = sabor;
        this.tipo = tipo;
        this.kilos = kilos;
        this.foto = foto;
    }
}
