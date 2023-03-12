
let arreglo = [
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_701445-MLA48048696977_102021-O.webp',
    nombre: 'Moto G20',
    precio: 42000
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_615787-MLA53225354281_012023-O.webp',
    nombre: 'Samsung Galaxy A04',
    precio: 67900
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_681864-MLA51186332985_082022-O.webp',
    nombre: 'Moto G42',
    precio: 77900
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_628410-MLA54073127628_022023-O.webp',
    nombre: 'Moto E22',
    precio: 46500
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_611053-MLA53418294189_012023-O.webp',
    nombre: 'LG Kite',
    precio: 39000
  }
]



function render(num) {
  var code = '';
	var codeRender = '<div id="Card"> <div id="Content"> <div class="col-xs-3"> <div class="Cardd"> <img id="imagen" src="https://http2.mlstatic.com/D_NQ_NP_701445-MLA48048696977_102021-O.webp"> <p></p> <p>Motorola G20</p> <p Class="Price">$42000</p> </div></div></div></div>'
  // lo que no se como poner los div uno debajo de otro para que queden mas legibles
	// si doy enter me pone error en el codigo. Entonces los puse uno a continuacion de otro 

	for (var i = 0; i < num; i++) {
    code += codeRender;
  }
	// document.getElementById('container').innerHTML = code;
}

  // Llamamos a la función para generar n bloques de código repetido
  render(4);

