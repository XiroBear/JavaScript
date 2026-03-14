Hasta ahora, nuestro código se ejecuta línea por línea, de arriba hacia abajo, sin excepción. Pero, ¿qué pasa si queremos que nuestro programa tome decisiones basadas en ciertas condiciones? Aquí es donde entran las estructuras condicionales.

La estructura más básica e importante es el bloque if... else (si... si no).

Para que la computadora tome una decisión, necesita comparar cosas. Para esto utilizamos los Operadores de Comparación, que siempre nos devolverán un valor Booleano (true o false):

    > : Mayor que
    < : Menor que
    >= : Mayor o igual que
    <= : Menor o igual que
    === : Estrictamente igual a (Compara tanto el valor como el tipo de dato. En JavaScript, siempre te recomendaré usar tres signos de igual en lugar de dos == para evitar errores).
    !== : Estrictamente diferente de

La sintaxis del condicional es la siguiente:
Se escribe la palabra if, seguida de paréntesis () que contienen la condición a evaluar. Si esa condición es true, se ejecutará el código dentro de las llaves {}. Si es false, el código pasará al bloque else (si existe) y ejecutará esas otras llaves.

## Ejemplos Prácticos
Observa cómo el programa decide qué mensaje mostrar en la consola basándose en la edad:

    let edadUsuario = 16;
    const mayoriaDeEdad = 18;

    // El programa evalúa: ¿Es 16 mayor o igual a 18? (Esto es false)
    if (edadUsuario >= mayoriaDeEdad) {
        // Si fuera true, se ejecuta esta línea:
        console.log("Eres mayor de edad. Puedes entrar al sistema.");
    } else {
        // Como es false, el programa salta aquí y ejecuta esta línea:
        console.log("Lo siento, eres menor de edad. Acceso denegado.");
    }

    // Ejemplo con operador de igualdad estricta
    let colorSemaforo = "verde";

    if (colorSemaforo === "verde") {
        console.log("Puedes avanzar.");
    } else {
        console.log("Debes detenerte.");
    }

## Ejercicio

Es tu turno de enseñarle a la computadora a decidir. Tu misión es:

    Declara una variable llamada temperatura y asígnale un valor numérico (por ejemplo, 32).
    Escribe una estructura condicional if... else.
    La regla es: Si la temperatura es mayor a 30, imprime en consola "Hace mucho calor, toma agua.".
    Si no lo es (es decir, en el else), imprime en consola "El clima está agradable.".
    Cambia el valor de tu variable temperatura (prueba con 25 y con 35) y ejecuta tu código para asegurarte de que ambos mensajes funcionan correctamente según el número.