
var eleForm = document.getElementById('mensajeForm')
eleForm.style.display='none'

function callphp(objForm){
    console.log('recibiendo el ojeto form en la funcion callphp',objForm)
    let data = {nombre:'valen'}

    fetch('https://example.com/profile', { method: 'POST', 
     headers: { 'Content-Type': 'application/json', }, 
     body: JSON.stringify(data), }) 
     .then(response => response.json()) 
     .then(data => { console.log('Success:', data); }) 
     .catch((error) => { console.error('Error:', error); });

     return false

}



function validacion ()  {
  var objForm = {email:'',nombre:'',comentarios:''}
  
    eleForm.style.display='none'

    if(document.form.email.value===''){
    document.form.email.focus()
    eleForm.style.display='inline'
    eleForm.innerHTML='el campo email es requerido'
    return false
    } else  {
    objForm.email=document.form.email.value    
    console.log(document.form.email.value)
    }


if(document.form.nombre.value===''){
    document.form.nombre.focus()
    eleForm.style.display='inline'
    eleForm.innerHTML='el campo nombre es requerido'
    return false
} else {
objForm.nombre=document.form.nombre.value  
    console.log(document.form.nombre.value)

}



if(document.form.comentarios.value===''){
document.form.comentarios.focus()
eleForm.style.display='inline'
eleForm.innerHTML='el campo comentario es requerido'
return false
} else {
    objForm.comentarios=document.form.comentarios.value 
    console.log(document.form.comentarios.value)

}

console.log('este es el ojeto formulario',objForm)
return callphp(objForm)

}

