// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista_amigos=[];
function agregarAmigo(){
	let amigo= document.getElementById('amigo').value;
	if(amigo == ''){
		alert("Por favor, inserte un nombre.");
	}else{
		lista_amigos.push(amigo);
		//para limpiar despues de eingresar un amigo 
		document.getElementById('amigo').value = '';
		mostrarAmigos();
	}

}

function limpiar_amigos(){
	let contenedorAmigos= document.getElementById('listaAmigos');
	contenedorAmigos.innerHTML='';
}
function limpiar_amigos_Invisible(){
	let amigoInvisible= document.getElementById('resultado');
	amigoInvisible.innerHTML='';
}

function mostrarAmigos(){
	let contenedorAmigos= document.getElementById('listaAmigos');
	//limpiando lo que sera la vieja lista de amigos
	limpiar_amigos();
	//encaso de querer agregar mas amigos
	limpiar_amigos_Invisible();

	lista_amigos.forEach(elemento => {
		let amigo = document.createElement('li');
		amigo.innerHTML=`<p>${elemento}</p>`;
		contenedorAmigos.appendChild(amigo);
	});
}

function sortearAmigo(){
	let respuesta= document.getElementById('resultado');
	if(lista_amigos.length === 0){
		respuesta.innerHTML='<p>No hay amigos para sortear un amigo Invisible</p>';
	}
	else{
		limpiar_amigos();
		let posicionSorteada = Math.floor(Math.random()* lista_amigos.length);
		let amigoInvisible = lista_amigos[posicionSorteada];
		respuesta.innerHTML= `<p>Amigo invisible: ${amigoInvisible}</p>`;
	}
}