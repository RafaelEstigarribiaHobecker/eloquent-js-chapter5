# 📘 Eloquent JavaScript - Capítulo 5: Funciones de Orden Superior

Este repositorio contiene mis soluciones estructuradas a los retos del Capítulo 5 del libro *Eloquent JavaScript*.

El objetivo principal de esta práctica no fue solo resolver los algoritmos, sino aplicar principios de diseño de software (inspirados en *A Philosophy of Software Design* de John Ousterhout), enfocándome en crear **Módulos Profundos** y mantener una estricta **Separación de Responsabilidades**.

## 🚀 Ejercicios Resueltos

### 1. Aplanamiento (`aplanamiento.js`)
Transformación de una matriz bidimensional (array de arrays) en un único array plano.
* **Técnica:** Uso del método nativo `.reduce()` en combinación con `.concat()`.
* **Decisión de Diseño:** Implementado utilizando funciones clásicas (`function`) en lugar de *arrow functions* para priorizar la legibilidad y cimentar las bases lógicas del flujo de datos a través del parámetro `acumulador`.

### 2. Tu Propio Ciclo (`tu-propio-bucle.js`)
Ingeniería inversa de un ciclo `for` tradicional, encapsulando su lógica en una función de orden superior.
* **Técnica:** Creación de una función `loop` que recibe 4 argumentos: un valor inicial, una función de prueba (test), una función de actualización (update) y una función de cuerpo (body).
* **Decisión de Diseño:** Abstracción pura. El motor del ciclo funciona independientemente de lo que haga la función de cuerpo (ej. imprimir en consola o guardar en base de datos), logrando un código altamente modular y escalable.

## 🛠️ Tecnologías
* Vanilla JavaScript (ES6+)
* Node.js / Entorno de Navegador

---
*Práctica de desarrollo enfocada en código limpio, modularidad y bases sólidas de programación.*