# Proyecto de Ejercicios de Funciones con TypeScript

Este proyecto contiene dos ejercicios prácticos para entender y practicar el uso de encapsulamiento en **TypeScript**.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (incluye npm): [Descargar Node.js](https://nodejs.org/)
- **Visual Studio Code**: [Descargar VSCode](https://code.visualstudio.com/)

## Instalación de TypeScript en Visual Studio Code

Sigue los siguientes pasos para instalar y configurar TypeScript en Visual Studio Code:

1. **Instalar Node.js**  
   Si no lo has hecho aún, instala Node.js desde el enlace proporcionado arriba. Esto también instalará npm, que usaremos para instalar TypeScript.

2. **Instalar TypeScript globalmente**  
   Abre una terminal en Visual Studio Code (o la terminal de tu sistema) y ejecuta el siguiente comando:
   ```bash
   npm install -g typescript
   ```
    Esto instalará TypeScript de manera global en tu sistema. Puedes verificar la instalación ejecutando:
    ```bash
    tsc -v
    ```
3. **Configurar un proyecto de TypeScript**
   En la carpeta raíz de tu proyecto, ejecuta:
   ```bash
   tsc --init
   ```

## Compilar archivos Typescript

Para compilar tus archivos .ts debes escribir el siguiente formato:
```bash
tsc <nombre_archivo>.ts
```
Esto generará un archivo con el mismo nombre en formato .js

Una vez tienes el archivo .js, solo queda compilarlo con node para poder ver el resultado en la terminal
```bash
node <nombre_archivo>.js
```

## Ejercicios para practicar encapsulamiento con TypeScript

### Ejercicio 1: Cuenta Bancaria

Crea una clase llamada `CuentaBancaria` que tenga las siguientes características:

- Un atributo **privado** `saldo` que solo pueda ser modificado dentro de la clase.
- Un método **público** `depositar(cantidad: number)` que permita sumar un valor al saldo si la cantidad es positiva.
- Un método **público** `retirar(cantidad: number)` que permita restar un valor del saldo solo si la cantidad no excede el saldo actual.
- Un método **público** `obtenerSaldo()` que devuelva el saldo actual de la cuenta.

El objetivo es proteger el atributo `saldo` para que no pueda ser modificado directamente desde fuera de la clase, pero permitir operaciones a través de métodos controlados.

### Ejercicio 2: Empleado y Gerente

Crea una clase base llamada `Empleado` que tenga lo siguiente:

- Un atributo **protegido** `salario`, que será accesible solo desde la clase `Empleado` y sus subclases.
- Un método **protegido** `obtenerSalario()` que retorne el valor del salario.

A continuación, crea una subclase llamada `Gerente` que extienda de `Empleado` y tenga lo siguiente:

- Un método **público** `mostrarSalario()` que imprima el salario en consola.

El objetivo es que el `salario` esté protegido para que solo las subclases (como `Gerente`) puedan acceder a él, y no pueda ser modificado o accedido directamente desde instancias fuera de la clase.

  

## Accede a la píldora sobre OOP Encapsulamiento en Typescript

Si deseas profundizar más en el tema de encapsulamiento en TypeScript, accede a la siguiente píldora educativa: [Pildora: Encapsulamiento en typescript](https://www.canva.com/design/DAGThh3ZyFg/_RksoRH95Z8Ab3WN0y6wEg/edit?utm_content=DAGThh3ZyFg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

![Pildora](./images/pildora.jpg)
