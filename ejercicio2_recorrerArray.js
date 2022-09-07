
/*recorriendo array con for...of loop
La declaración for...of crea un bucle que itera a través de objetos iterables (incluyendo Array, Map, Set, el objeto Argumentos y así sucesivamente),
invocando un hook (función) de iteración con sentencias a ejecutar para el valor de cada propiedad distinta.*/

const capitalNames = [
    "Tokio",
    "Berlin",
    "Rio",
    "Denver",
    "Nairobi",
    "Bogota",
    "Marcella",
    "Moscu"
  ];
  
  const capitalNameCh = function (name) {
    for (let i of capitalNames) {
      console.log(i);
    }
  };
  capitalNameCh();

  /*recorriendo array con El método forEach() ejecuta la función indicada una vez por cada elemento del array.*/

  const capitalNamees = [
    "Tokio",
    "Berlin",
    "Rio",
    "Denver",
    "Nairobi",
    "Bogota",
    "Marcella",
    "Moscu"
  ];
  
  const capitalNameChecker = function (name) {
    capitalNamees.forEach(function (names) {
      console.log(names);
    });
  };
  
  capitalNameChecker();





