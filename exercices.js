// Exercise 01. Private
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldoInicial) {
        this.saldo = saldoInicial;
    }
    CuentaBancaria.prototype.depositar = function (cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    };
    CuentaBancaria.prototype.obtenerSaldo = function () {
        return this.saldo;
    };
    return CuentaBancaria;
}());
var cuenta = new CuentaBancaria(1000);
// cuenta.saldo;  // Error: 'saldo' es privado
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // Salida: 1500
// //Exercise 02. Protected
// class Empleado {
//     protected salario: number;
//     constructor(salario: number) {
//         this.salario = salario;
//     }
//     protected obtenerSalario(): number {
//         return this.salario;
//     }
// }
// class Gerente extends Empleado {
//     constructor(salario: number) {
//         super(salario);
//     }
//     public mostrarSalario(): void {
//         console.log(`El salario es: ${this.obtenerSalario()}`);
//     }
// }
// const gerente = new Gerente(5000);
// // gerente.salario;  // Error: 'salario' es protegido
// gerente.mostrarSalario();  // Salida: El salario es: 5000
