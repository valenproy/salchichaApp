
var eleForm = document.getElementById('mensajeForm')
eleForm.style.display='none'

function validacion ()  {
eleForm.style.display='none'

    if(document.form.email.value===''){
    document.form.email.focus()
    eleForm.style.display='inline'
    eleForm.innerHTML='el campo email es requerido'
    
    return false
}


if(document.form.nombre.value===''){
    document.form.nombre.focus()
    eleForm.style.display='inline'
    eleForm.innerHTML='el campo nombre es requerido'

    return false
}
if(document.form.comentarios.value===''){
document.form.comentarios.focus()
eleForm.style.display='inline'
eleForm.innerHTML='el campo comentario es requerido'
return false
}


return false

}
