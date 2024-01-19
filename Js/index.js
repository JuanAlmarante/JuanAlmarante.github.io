// const WEEK = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SÁBADO"];

// function updateTime() {
//     var ahora = new Date();

//     document.getElementById("time").innerText =
//             zeroPadding(ahora.getHours(), 2) + ":" +
//             zeroPadding(ahora.getMinutes(), 2) + ":" +
//             zeroPadding(ahora.getSeconds(), 2);

//     document.getElementById("date").innerText =
//             ahora.getFullYear() + "-" +
//             zeroPadding(ahora.getMonth(), + 1, 2) + "-" +
//             zeroPadding(ahora.getDate(), 2) + " " +
//         WEEK[ahora.getDay()];
// }

// updateTime();
// setInterval(updateTime, 1000);

// function zeroPadding(num, digit) {
// return String(num).padStart(digit,'0');
// }
// function mostrarHora() {
//         var ahora = new Date();
//         var hora = ahora.getHours();
//         var minuto = ahora.getMinutes();
//         var segundo = ahora.getSeconds();
//         hora = hora + ":" + minuto + ":" + segundo;
//         document.getElementById("horaActual").innerHTML = hora;
//        }
       
//        mostrarHora(); // Ejecuta la función para mostrar la hora actual
//        setInterval(mostrarHora, 1000); // Actualiza la hora cada segundo (1000 milisegundos)