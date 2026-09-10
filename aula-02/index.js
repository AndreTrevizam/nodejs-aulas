/*
0. Obter um usuario
1. Obter um numero de telefone de um usuario a partir de seu Id
2. Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Dezin',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      numero: '1100000000',
      ddd: 17
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'rua dos bobos',
      numero: 0
    })
  }, 2000)
}

function resolverUsuario(erro, usuario) {
  console.log(usuario)
}

obterUsuario(function resolverUsuario(erro, usuario) {
  if (erro) {
    console.error('deu ruim pai usuario ta zuado', erro)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error('deu ruim pai telefone ta zuado', erro1)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error('deu ruim pai endereco ta zuado', erro2)
        return
      }

      console.log(`Nome: ${usuario.nome}, endereço: ${endereco.rua}, telefone: ${telefone.numero}`)
    })
  })
})

// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco(usuario.id)

// console.log(telefone)