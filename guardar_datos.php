<?php
$servername = "localhost";
$username = " COPUESRZA, INC.";
$password = "tu_contraseña";
$database = "tu_base_de_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// PARA VERIFICAR LA CONEXION
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// OBTENER LOS DATOS DEL FORMULARIO
$nombre = $_POST['nombre'];
$pastor = $_POST['pastor'];
$iglesia = $_POST['iglesia'];
$correo = $_POST['correo'];
$numero = $_POST['numero'];
$mensaje = $_POST['mensaje'];

// CUNSULTA DEL SQL
$sql = "INSERT INTO usuarios (nombre, pastor, iglesia, correo, numero, mensaje) 
        VALUES ('$nombre', '$pastor', '$iglesia', '$correo', '$numero', '$mensaje')";

// PARA EJECUTAR LA CUNSULTA
if ($conn->query($sql) === TRUE) {
    echo "¡Registro exitoso!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// PARA CERRAR LA CONEXION
$conn->close();
?>