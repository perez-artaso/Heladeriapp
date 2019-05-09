export class Helado {
    id: number;
    sabor: String;
    tipo: String;
    kilos: number;
    foto: string;

    constructor(id, sabor, tipo, kilos, foto) {
        this.id = id;
        this.sabor = sabor;
        if (tipo !== '0' && tipo !== '1') {
            this.tipo = tipo;
        } else if (tipo === '0') {
            this.tipo = 'Agua';
        } else if (tipo === '1') {
            this.tipo = 'Crema';
        }
        this.kilos = kilos;
        this.foto = foto;
    }
}
