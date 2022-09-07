
/**Programa que dada una capital indique si se trata de uno de los elegidos por el profesor de la casa de papel para alguno 
 * de los miembros de su equipo o no*/

//first version

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
  
  const capitalNameChecker = function (name) {
    for (var i = 0; i < capitalNames.length; i++) {
      if (name == capitalNames[i]) {
        return "The name " + name + " is part of the paper house team.";
      } else if (name !== capitalNames[i]) {
        return "The name is not part of the paper house team.";
      }
    }
  };
  console.log(capitalNameChecker("Tokio"));
  


