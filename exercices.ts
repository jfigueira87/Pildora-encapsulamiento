// Exercise 01. Private

class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }

    public obtenerSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(1000);
//cuenta.saldo;  // Error: 'saldo' es privado
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());  // Salida: 1500



//Exercise 02. Protected

class Empleado {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    protected obtenerSalario(): number {
        return this.salario;
    }
}

class Gerente extends Empleado {
    constructor(salario: number) {
        super(salario);
    }

    public mostrarSalario(): void {
        console.log(`El salario es: ${this.obtenerSalario()}`);
    }
}

const gerente = new Gerente(5000);
// gerente.salario;  // Error: 'salario' es protegido
gerente.mostrarSalario();  // Salida: El salario es: 5000
