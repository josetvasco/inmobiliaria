const logo = document.getElementById('logo');
const tableFavoritos = document.getElementById('table-favoritos')

let respuestasJson = localStorage.getItem("Inmuebles")
let respuestas = JSON.parse(respuestasJson)

console.log(respuestasJson)
console.log(respuestas)

respuestas.forEach(element => {

    const { ciudad, ubicacion, area, estado, nBanios, nHabitacion, parqueadero, precio, tInmueble } = element

    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${ciudad}</td>
    <td>${ubicacion}</td>
    <td>${area}</td>
    <td>${nHabitacion}</td>
    <td>${nBanios}</td>
    <td>${parqueadero}</td>
    <td>${tInmueble}</td>
    <td>${estado}</td>
    <td>${precio}</td>
    `
    tableFavoritos.appendChild(tr)
});

logo.addEventListener('click', () => {
    location.href = '../index.html';
})