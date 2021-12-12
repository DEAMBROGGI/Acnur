// VER API TURISMO ARGENTINO Y DE FINTECH
// VARIABLES GLOBALES

// Grupo 1 = Fintech = 5
// Grupo 2 = Turismo = 7
// Grupo 3 = PetshopNaranja = 8
// Grupo 4 = Petshop = 8 

var globalJsonVar;
var list; 
var searchImput;
var propsSelected=[];
var arrayDatos;

// CARGA EL DOCUMENTO INICIAL
 $(document).ready(async function () {
       await callbackAjax(); //DETIENE LA EJECUCION HASTA RECIBIR LA RESPUESTA DE LA PROMESA
          $('#recoleccion').text('Cantidad de alumnos: ' + globalJsonVar.length); //RENDERIZAR CANTIDAD DE ALUMNOS
        
     })


// RENDERIZAR Y TOMA EL VALOR DE CHECKBOX
     $('.micheckbox').on('click', function() {
        if( $(this).is(':checked') ){
            //  checkbox ha sido seleccionado
            propsSelected.push( $(this).val())
       
        } else {
            //  checkbox ha sido deseleccionado
            
            propsSelected = propsSelected.filter(item =>item !== $(this).val() ) 
        }
        console.log(propsSelected)
    });

    //TRAE EL ARCHIVO curso.json Y LO GUARDA EL VARIABLE GLOBAL globalJsonVar
async function callbackAjax (){

   await $.ajax({
        url : "curso.json",
        type : "GET",
        success : function(response) {
            globalJsonVar = response.curso;
        }   
    });
    return globalJsonVar;
}

//TOMA EL VALOR QUE INGRESAMOS EN INPUT TEXT Y LO GUARDA EN VARIABLE GLOBAL searchImput
 function cambioDatos(event){
   searchImput = event.target.value
console.log(searchImput)
}

// RENDERIZA LA LISTA DE ALUMNOS
function List (){

    list = [] //LIMPIA LA VARIABLE 
    list = globalJsonVar //LE ASIGNA UN VALOR 
    
   
    if(inputSearch !== undefined) { // VA A INICIAR EL FILTRO SI EL INPUT TEXT ES "DIFERENTE" A UNDEFINED
        var inputSearch = searchImput.toLowerCase()  //PASA EL TEXTO DEL INPUT A MINUSCULA  
        //FILTRAMOS Y BUSCAMOS NOMBRE O APELLIDO QUE EMPIEZE CON EL VALOR ESTABLECIDO EN EL INPUT
        arrayDatos = list.filter(personas => personas.nombre.toLowerCase().startsWith(inputSearch) || personas.apellido.toLowerCase().startsWith(inputSearch) )}
    else{arrayDatos = globalJsonVar}


    var lista = $("#listadoAlumnos") //LLAMA AL OBJETO DE HTML = AL ID "LISTADO DE ALUMNOS"


lista.empty() //ELIMINO TODO LO QUE CONTENGA LA VARIABLE LISTA
$('#recoleccion').text('Cantidad de alumnos: ' + arrayDatos.length); //CANTIDAD DE ALUMNOS CON O SIN FILTRO

let filtradoPorProps;
if (propsSelected.length >0) { 
    filtradoPorProps =  globalJsonVar.map(item=>{nombre , ...myUpdatedObject} = item);
    console.log(filtradoPorProps)
}
//DEFINIA UN METODO PARA TRAES LAS PROPIEDADES MARCADAS EN LOS CHEKBOX
    arrayDatos.forEach(function(data,index){
        let datos = (function(){
            if(propsSelected.includes("Nombre")
            && propsSelected.includes("Apellido")
            && propsSelected.includes("Edad")){return data.nombre+ ", "+data.apellido+ ", "+data.edad} 
                if(propsSelected.includes("Nombre") 
                && propsSelected.includes("Apellido")){return data.nombre+ ", "+data.apellido}
                if (propsSelected.includes("Nombre")){return data.nombre}
                if(propsSelected.includes("Apellido")){return data.apellido}
                if(propsSelected.includes("Edad")){return data.edad}
                if(propsSelected.length === 0 ){return data.nombre+ ", "+data.apellido+", "+data.edad} 
                // SI propsSelected es === 0 implica que no tenemos nada seleccionado en el chechbox, entonces traer todos los datos
                console.log(propsSelected.length)
                
        })
       
        var linew = $("<li/>");    //CREO UN OBJETO LI DE HTML
        var contenido = document.createTextNode(datos()); //CREO EL CONTENIDO QUE VOY A COLOCAR EN ALGUN ELEMENTO DE HTML
        lista.append(linew); //COLOCO LA LISTA DENTRO DEL DIV
        linew.append(contenido); //COLOCO EL CONTENIDO DENTRO DE LA LISTA
        
        })


}           
  
        
       
   




