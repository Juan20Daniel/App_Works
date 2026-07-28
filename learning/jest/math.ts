export class Contador {

    private valor = 0;

    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    obtenerValor() {
        return this.valor;
    }

}