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
async function List (){

    list = [] //LIMPIA LA VARIABLE 
    list = globalJsonVar //LE ASIGNA UN VALOR 
    
    if(searchImput !== undefined) { // VA A INICIAR EL FILTRO SI EL INPUT TEXT ES "DIFERENTE" A UNDEFINED
        var inputSearch = searchImput.toLowerCase()  //PASA EL TEXTO DEL INPUT A MINUSCULA  
        //FILTRAMOS Y BUSCAMOS NOMBRE O APELLIDO QUE EMPIEZE CON EL VALOR ESTABLECIDO EN EL INPUT
        arrayDatos = list.filter(personas => personas.nombre.toLowerCase().includes(inputSearch) || personas.apellido.toLowerCase().includes(inputSearch) )}
    else{arrayDatos = globalJsonVar}
    console.log(arrayDatos)
    

     var lista = $("#listadoAlumnos") //LLAMA AL OBJETO DE HTML = AL ID "LISTADO DE ALUMNOS"

     lista.empty() //ELIMINO TODO LO QUE CONTENGA LA VARIABLE LISTA
     $('#recoleccion').text('Cantidad de alumnos: ' + arrayDatos.length); //CANTIDAD DE ALUMNOS CON O SIN FILTRO 




    


metodoTres();


function metodoUno(){
//DEFINIA UN METODO PARA TRAES LAS PROPIEDADES MARCADAS EN LOS CHEKBOX
    arrayDatos.forEach(function(data,index){
        let datos = (function(){
            if(propsSelected.includes("nombre")
            && propsSelected.includes("apellido")
            && propsSelected.includes("edad")){return data.nombre+ ", "+data.apellido+ ", "+data.edad} 
                if(propsSelected.includes("nombre") 
                && propsSelected.includes("apellido")){return data.nombre+ ", "+data.apellido}
                if (propsSelected.includes("nombre")){return data.nombre}
                if(propsSelected.includes("apellido")){return data.apellido}
                if(propsSelected.includes("edad")){return data.edad}
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

function metodoDos(){
    // DESESTRUCTURACION DE ARRAY CON PROPS DEFINIDAS
    var data = [];

    // BUSCO Y SEPARO LA PROP NOMBRE
    let nombre=[]
    if(propsSelected.includes("nombre")){   
        
            for (const  {nombre: n} of globalJsonVar) {
            nombre.push(n);
            data.push(nombre) 
                }
               
            console.log(nombre)}
           // console.log(data)

    //BUSCO Y SEPARO LA PROP APELLIDO        
    let apellido=[]
    if(propsSelected.includes("apellido")){   
            
                for (const {apellido: n } of globalJsonVar) {
                apellido.push(n);
                data.push(apellido) 
                    }
                   
                console.log(apellido[10])
            }

    // BUSCO Y SEPARO LA PROP NACIONALIDAD
    let nacionalidad=[]
    if(propsSelected.includes("nacionalidad")){   
            
                for (const {nacionalidad: n} of globalJsonVar) {
                nacionalidad.push(n) ;
                data.push(nacionalidad)
                    }
                    
               // console.log(nacionalidad)
            }

    // BUSCO Y SEPARO LA PROP EDAD            
    let edad=[]
    if(propsSelected.includes("edad")){   
            
                for (const {edad: n} of globalJsonVar) {
                edad.push(n) ;
                data.push(edad)
                    }
               // console.log(edad)
            }

    // BUSCO Y SEPARO LA PROP GRUPO            
    let grupo=[]
    if(propsSelected.includes("grupo")){   
            
                for (const {grupo : n} of globalJsonVar) {
                grupo.push(n) ;
                data.push(grupo)
                    }
                   
                //console.log(grupo)
            }
let datat = []


nombre.forEach((currentValue, index) => {
    datat.push({
    id: index+1,
    nombre: currentValue, 
    apellido: apellido[index],
    })
    
  });
console.log(datat)

  
        var linew = $("<li/>");    //CREO UN OBJETO LI DE HTML
        var contenido = datat.map(item =>{
            let nombre = item.nombre
            //console.log(item.nombre)
         document.createTextNode(nombre); //CREO EL CONTENIDO QUE VOY A COLOCAR EN ALGUN ELEMENTO DE HTML
        })
        lista.append(linew); //COLOCO LA LISTA DENTRO DEL DIV
        linew.append(contenido); //COLOCO EL CONTENIDO DENTRO DE LA LISTA


}
function metodoTres(){

//VER DESESTRUCTURACION DE ARRAY
        
let todos;
let nombre=[];
let apellido=[];
let edad = [];
let nacionalidad = [];
let grupo = []

propsSelected.map(item =>{
  
    for (const {[item]: n} of globalJsonVar) {
    if(item === "nombre"){nombre.push(n)};
    if(item === "apellido"){apellido.push(n)};
    if(item === "edad"){edad.push(n)};
    if(item === "nacionalidad"){nacionalidad.push(n)};
    if(item === "grupo"){grupo.push(n)}
    else todos = globalJsonVar;
        }
        

     
})
console.log(nombre)  
console.log(apellido)
console.log(nacionalidad)  
console.log(edad)
console.log(grupo)



}








}   

// APLICAR CLEAR A CHECKBOX  
function clearCheck(){
    let data =  document.querySelectorAll('input[type=checkbox]')
    console.log(data)
    for (let i = 0; i < data.length; i++) {
    data[i].checked = false
   propsSelected =[]
   
}
console.log(propsSelected)
}        
       
   




