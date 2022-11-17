const apiUrl = 'http://localhost:3000/inmuebles/';
const apiStatus = 'http://localhost:3000/inmuebles/?estado=';
const apiType = 'http://localhost:3000/inmuebles/?tInmueble=';
const apiSearch = 'http://localhost:3000/inmuebles/?q=';
const apiId = 'http://localhost:3000/inmuebles/?id=';

const divInmuebles = document.getElementById('div-inmuebles');
const formPrincipal = document.getElementById('form-principal');
const selectType = document.getElementById('select-type');
const selectStatus = document.getElementById('select-status');
const txtSearch = document.getElementById('search');
const logo = document.getElementById('logo');
const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');
const boton = document.getElementById('agregar');


//Consulta de api, traer inmuebles
const getInmuebles = async (apiUrl) => {
    const peticion = await fetch(apiUrl);
    const data = await peticion.json();

    try {
        if (data.length > 0) {
            divInmuebles.innerHTML = ``
            data.forEach(element => {
                const { id, nombre, ubicacion, area, nHabitacion, nBanios, tInmueble, estado, precio, parqueadero, infoPropietario, imagenInmueble, descripcion } = element;
                const divNuevo = document.createElement('div');

                divNuevo.innerHTML = `
                <a class="link-propiedad" href="inmueble.html?id=${id}&nombre=${nombre}&ubicacion=${ubicacion}&area=${area}&habitacion=${nHabitacion}&banios=${nBanios}&tipo=${tInmueble}&estado=${estado}&precio=${precio}&parqueadero=${parqueadero}&info=${infoPropietario}&imagen=${imagenInmueble}&descripcion=${descripcion}">
                <div id=${id} class="properties hola" style="background-image: url(${imagenInmueble});">
                        <div>
                                <p class="type">${tInmueble}</p>
                                <p class="for-sale">${estado}</p>
                                <p class="price">${precio}</p>
                            </div>
                            <p class="location">${nombre}</p>
                            <p class="adress">${ubicacion}</p>
                            <p class="seller">${infoPropietario}</p>
                            <p class="time">4 month ago</p>
                            <hr>
                            <img class="img-area" src="./img/icon1.png" alt="">
                            <p class="area">${area}</p>
                            <img class="img-park" src="./img/icon2.png" alt="">
                            <p class="park">${parqueadero}</p>
                            <img class="img-bathroom" src="./img/icon3.png" alt="">
                            <p class="bathroom">${nBanios}</p>
                            <img class="img-room" src="./img/icon4.png" alt="">
                            <p class="room">${nHabitacion}</p>
                        </div>
                    </a>
                `
                divNuevo.classList.add('div-principal');
                divInmuebles.appendChild(divNuevo)
            });
        } else {
            Swal.fire({
                icon: 'Warning',
                title: 'Ingrese un dato correcto',
                text: 'Intente de nuevo más tarde',
                confirmButtonText: 'Aceptar'
            })
        }
    } catch (error) {
        Swal.fire({
            icon: 'Warning',
            title: 'Ingrese un dato correcto',
            text: 'Intente de nuevo más tarde',
            confirmButtonText: 'Aceptar'
        })
    }
}

getInmuebles(apiUrl);

formPrincipal.addEventListener('submit', (e) => {
    e.preventDefault();

    const type = selectType.value;
    const status = selectStatus.value;
    const search = (txtSearch.value).toUpperCase();

    if (type && type !== '') {
        getInmuebles(apiType + type);
        type.value = '';
    } else if (status && status !== '') {
        getInmuebles(apiStatus + status);
        status.value = '';
    } else if (search && search !== '') {
        getInmuebles(apiSearch + search);
        search.value = '';
    } else {
        window.location.reload();
    }
})

logo.addEventListener('click', () => {
    window.location.reload()
})