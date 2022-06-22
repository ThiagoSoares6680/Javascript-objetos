class ContaBancaria {
    constructor(agencia,numero,tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;

    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }


    sacar(valor){
        if(valor > this._saldo){
            return "Valor de saque maior que o saldo!"
        }
        this._saldo = this._saldo - valor
        return this._saldo

    }
 
    depositar(valor){
        if(valor == 0){
            return "Verifique o valor a ser depositado!"
        }else {
            this._saldo = valor + this._saldo
            return this._saldo
        }
    }
    transferir(valor){
        if(valor < this._saldo){
            this._saldo = this._saldo - valor
            return this._saldo
        }else {
            return "Valor mair que Saldo!"
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this.cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
} 
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero ){
        super(agencia, numero );
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor > this._saldo){
            return "Valor de saque maior que o saldo!"
        }
        else if(valor > 500){
            return "operação negada!"
        }else {
            this._saldo = this._saldo - valor;
            return this._saldo
        }
    }
}  