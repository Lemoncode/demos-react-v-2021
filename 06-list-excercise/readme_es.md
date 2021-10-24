# Ejercicio

Vamos a refactorizar este layout, en vez de usar tablas, vamos a usar CSS-Grid.

A tener en cuenta:

Parte de la carpeta _06-list-refactor_.

Podemos usar estilos, lo tenemos preconfigurado en webpack y el fichero del que puedes tirar para añadirlos es _styles.css_.

Como usar estilos en react:

Por ejemplo tenemos en _styles.css_ la siguiente clase:

```css
.my-text {
  color: blue;
}
```

En el JSX debemos usar el atributo _className_ (_class_ es una palabra reservada de XML),
con lo que sería algo así como:

```diff
export const App = () => {
  return (
    <>
+      <h1 className="my-text">prueba</h1>
      <MemberTable />
    </>
  );
};
```

¿Qué pasa si queremos añadir más de un estilo?

por ejemplo en nuestro CSS tenemos, otra clase

```css
.my-font {
  font-family: sans-serif;
}
```

Como quedaría el componente:

```diff
export const App = () => {
  return (
    <>
-      <h1 className="my-text">prueba</h1>
+      <h1 className="my-text my-font">prueba</h1>
      <MemberTable />
    </>
  );
};
```

Más info: https://es.reactjs.org/docs/faq-styling.html

# Pista
