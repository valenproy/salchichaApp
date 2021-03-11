

function validacion ()  {
if(document.form.email.value===''){
    document.form.email.focus()
    console.log('el campo email esta vasio')
    return false
}


if(document.form.nombre.value===''){
    document.form.nombre.focus()
console.log('el campo nombre esta vasio')
}

console.log('soy la funcion validacion')
return false

}
