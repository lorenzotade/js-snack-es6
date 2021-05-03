$(function(){

  // creo array di oggetti auto
  const arrAuto = [
    {
      marca: 'Tesla',
      modello: 'Model S',
      alimentazione: 'elettrico'
    },
    {
      marca: 'Tesla',
      modello: 'Model X',
      alimentazione: 'elettrico'
    },
    {
      marca: 'Fiat',
      modello: 'Panda',
      alimentazione: 'benzina'
    },
    {
      marca: 'Ford',
      modello: 'Puma',
      alimentazione: 'diesel'
    },
    {
      marca: 'Volkswagen',
      modello: 'Polo',
      alimentazione: 'metano'
    },
    {
      marca: 'Mercedes-Benz',
      modello: 'Classe A',
      alimentazione: 'diesel'
    },
    {
      marca: 'Volvo',
      modello: 'V90',
      alimentazione: 'diesel'
    },
    {
      marca: 'Maserati',
      modello: 'Ghibli',
      alimentazione: 'benzina'
    },
    {
      marca: 'Toyota',
      modello: 'Auris',
      alimentazione: 'benzina'
    },
    {
      marca: 'Chevrolet',
      modello: 'Matiz',
      alimentazione: 'GPL'
    }
  ]; //end arrAuto

  // filtro l'array creandone tre diversi suddividendo 
  // le auto per alimentazione
  const autoBenzina = arrAuto.filter((auto) => auto.alimentazione === 'benzina');
  const autoDiesel = arrAuto.filter((auto) => auto.alimentazione === 'diesel');
  const autoAltro = arrAuto.filter((auto) => auto.alimentazione != 'benzina' && auto.alimentazione != 'diesel');
  
  // punto alle liste html
  let listaBenzina = $('#benzina');
  let listaDiesel = $('#diesel');
  let listaAltro = $('#altro');

  // chiamo la funzione per stampare gli array nelle
  // liste html
  printAuto(autoBenzina, listaBenzina);
  printAuto(autoDiesel, listaDiesel);
  printAuto(autoAltro, listaAltro);
  
  /* FUNCTION */

  // funzione che prende un array e un target,
  // destruttura l'oggetto auto e crea un template li
  // appendendolo al target 
  function printAuto(arr, target) {
    arr.forEach((auto) => {
      let {marca, modello, alimentazione} = auto;

      let html = 
      `
      <li>
        Marca: ${marca}<br>
        Modello: ${modello}<br>
        Alimentazione: ${alimentazione}
      </li><br>
      `;
    
      target.append(html);
    });
  } //end function printAuto

}); //end document ready


