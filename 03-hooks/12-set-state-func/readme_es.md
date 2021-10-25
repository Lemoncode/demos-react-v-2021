# 12 set state func

## Resumen

Este ejemplo toma como punto de partida el ejemplo _11-use-context_.

Una tema importante a tener en cuenta con los hooks y los componentes funcionales
es que las funciones se ejecutan una vez y se mueren (los hooks nos sirven como almacenes de datos entre otras cosas),
pero si hacemos una llamada asíncrona en esa función, por el principio de closure cuando se invoque dicha función, los
datos que tendremos serán los valores de dicha ejecución (se queda zombies)

Veamos esto con un ejemplo.

## Pasos

Si vienes del ejemplo _useContext_ acuerdate de quitar de _app_ la instanciación del _provider_ y
el componente extra que creaste.

Sustituimos _demo.tsx_ por el siguiente contenido:

_./src/demo.tsx_

```tsx
import React from "react";

export const MyComponent: React.FC = () => {
  const [numero, setNumero] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setNumero(numero + 1);
    }, 1500);
    setNumero(1);
  }, []);

  return (
    <>
      <h4>El numero: {numero}</h4>
    </>
  );
};
```

¿Es normal lo que está pasando? A primera vista después de un segundo y medio, el valor que se muestra
debería de ser _2_, ¿Qué pasa? Que en el callback cuando tira de closure de esa ejecución, el valor
de número es _0_.

¿Como podemos corregir esto? la función _setState_ trae una segunda firma en la que podemos pasarle
una función:

```diff
  React.useEffect(() => {
    setTimeout(() => {
-      setNumero(numero + 1);
+      setNumero((numero) => numero + 1);

    }, 1500);
    setNumero(1);
  }, []);
```

Cuando la invocamos de esta manera, el hook de _setState_ se asegura de traernos el último valor.

## Pasos

Arrancamos con

Saltamos a 98-excercises - chat.
