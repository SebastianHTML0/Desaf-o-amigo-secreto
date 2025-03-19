let listaAmigos = []; // Lista para almacenar los amigos ingresados

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtenemos el valor del input
    const amigo = inputAmigo.value.trim(); // Limpiamos los espacios extra

    // Verificamos si el nombre ingresado no está vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Verificamos si el amigo ya está en la lista
    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya está en la lista. Intenta con otro.");
        inputAmigo.value = ""; // Limpiamos el campo de texto para que el usuario ingrese un nuevo nombre
        return;
    }

    // Agregamos el amigo a la lista
    listaAmigos.push(amigo);

    // Actualizamos la interfaz con el nuevo amigo
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML += `<li>${amigo}</li>`;

    // Limpiamos el input para que el usuario pueda agregar otro nombre
    inputAmigo.value = "";
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    // Verificamos si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Elegimos un amigo aleatorio
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    // Mostramos el resultado en la interfaz
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    // Eliminamos el amigo sorteado de la lista para que no se repita
    listaAmigos.splice(random, 1);

    // Si ya no hay más amigos en la lista, lo informamos
    if (listaAmigos.length === 0) {
        alert("Ya no quedan más amigos por sortear.");
    }
}
