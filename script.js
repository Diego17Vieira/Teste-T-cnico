//GET ALL
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

fetch(
  'https://test-mais-a-educacao-v1.herokuapp.com?token=yourFullName',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

//GET ONE
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

fetch(
  'https://test-mais-a-educacao-v1.herokuapp.com/5kvm2o7K75lVJvSwvfYs?token=yourFullName',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

//PUT CREATE
var raw =
  '{\r\n	"name": "Nome",\r\n	"planet": "Nome Planeta",\r\n	"birthDate": "26/04/1994",\r\n    "description": "Descrição da Motivação para entrar na aliança"\r\n}'

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
}

fetch(
  'https://test-mais-a-educacao-v1.herokuapp.com?token=yourFullName',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

//PUT UPDATE
var raw =
  '{\r\n	"name": "Nome",\r\n	"planet": "Nome Planeta",\r\n	"birthDate": "26/04/1995",\r\n    "description": "Descrição da Motivação para entrar na aliança"\r\n}'

var requestOptions = {
  method: 'PUT',
  body: raw,
  redirect: 'follow'
}

fetch(
  'https://test-mais-a-educacao-v1.herokuapp.com/5kvm2o7K75lVJvSwvfYs?token=yourFullName',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

//DEL DELETE
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
}

fetch(
  'https://test-mais-a-educacao-v1.herokuapp.com/5kvm2o7K75lVJvSwvfYs?token=yourFullName',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
