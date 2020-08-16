//Search for button add-time
document.querySelector("#add-time")
  //When click will call the function
  .addEventListener('click', cloneField)


//Function to clone fields
function cloneField() {
  //console.log("")
  //Duplicate fields
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean: true or false

  //limpar os campos 
  const fields = newFieldContainer.querySelectorAll('input')

  /* Manual reset fields
  fields[0].value = ""
  fields[1].value = ""*/

  fields.forEach(function (field) {
    //Take the field and clean
    field.value = ""
  })

  //Show on page
  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}