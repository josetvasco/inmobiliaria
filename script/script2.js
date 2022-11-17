//Creamos la instancia
const datos = window.location.search;

const parametros = new URLSearchParams(datos);


let id = parametros.get('id');
let nombre = parametros.get('nombre');
let ubicacion = parametros.get('ubicacion');
let area = parametros.get('area');
let habitacion = parametros.get('habitacion');
let banios = parametros.get('banios');
let tipo = parametros.get('tipo');
let estado = parametros.get('estado');
let precio = parametros.get('precio');
let parqueadero = parametros.get('parqueadero');
let infoPropietario = parametros.get('info');
let imagen = parametros.get('imagen');
let descripcion = parametros.get('descripcion');


const divClick = document.getElementById('div-click')
const logo = document.getElementById('logo');


const divNuevoClick = document.createElement('div');
divNuevoClick.innerHTML = `  
    <div class="hot-deal-2">
    <div class="property-block">
        <div class="property-img">
            <img src="${imagen}" alt="">
        </div>
        <div class="property-features">
            <h3>${nombre}</h3>
            <h2>${ubicacion}</h2>
            <h3>Colombia</h3>
            <p>${precio}</p>
                <div>
                    <img src="./img/icon1.png" alt="">
                    <p>${area}</p>
                </div>
                <div>
                    <img src="./img/icon4.png" alt="">
                    <p>${habitacion}</p>
                    <p>Beds</p>
                </div>
                <div>
                    <img src="./img/icon3.png" alt="">
                    <p>${banios}</p>
                    <p>Bath</p>
                </div>
                <div>
                    <img src="./img/icon2.png" alt="">
                    <p>${parqueadero}</p>
                    <p>Garage</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="tabla-datos">
    <p class="titulo-tabla">Información de la propiedad</p>
    <table>
        <tr>
            <th>ID</th>
            <td>${id}</td>
        </tr>
        <tr>
            <th>Ciudad</th>
            <td>${nombre}</td>
        </tr>
        <tr>
            <th>Ubicacion</th>
            <td>${ubicacion}</td>
        </tr>
        <tr>
            <th>Area</th>
            <td>${area}</td>
        </tr>
        <tr>
            <th>N° Habitaciones</th>
            <td>${habitacion}</td>
        </tr>
        <tr>
            <th>N° Baños</th>
            <td>${banios}</td>
        </tr>
        <tr>
            <th>N° Parquedero</th>
            <td>${parqueadero}</td>
        </tr>
        <tr>
            <th>Tipo</th>
            <td>${tipo}</td>
        </tr>
        <tr>
            <th>Estado</th>
            <td>${estado}</td>
        </tr>
        <tr>
            <th>Precion</th>
            <td>${precio}</td>
        </tr>
        <tr>
            <th>Información Propietario</th>
            <td>${infoPropietario}</td>
        </tr>
        <tr>
            <th>Descripción</th>
            <td>${descripcion}</td>
        </tr>

    </table>
    </div>
    <div class="div-favorito">
    <a href="#" class="agregar-favoritos">Agregar Favoritos</a>
    </div>
`

divClick.appendChild(divNuevoClick)

logo.addEventListener('click', () => {
    location.href = '../index.html';
})


//Agrendo a favoritos

divClick.addEventListener('click', (e) => {
    e.preventDefault();

    const inmuebleSeleccionado = e.target.parentElement;

    if (e.target.classList.contains('agregar-favoritos')) {
        let _inm = localStorage.getItem("Inmuebles") // undefined // nullables

        let inmueble;

        if (_inm == undefined) {
            inmueble = []
        } else {
            inmueble = JSON.parse(_inm)
        }

        e.preventDefault()

        let nuevoInmueble = {
            id: id,
            ciudad: nombre,
            ubicacion: ubicacion,
            area: area,
            nHabitacion: habitacion,
            nBanios: banios,
            tInmueble: tipo,
            estado: estado,
            precio: precio,
            parqueadero: parqueadero,
            imagen: imagen,
        }
        inmueble.push(nuevoInmueble)

        let respuestasJSON = JSON.stringify(inmueble)

        localStorage.setItem("Inmuebles", respuestasJSON)
    }
})




