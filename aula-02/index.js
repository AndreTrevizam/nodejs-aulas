/*
0. Obter um usuario
1. Obter um numero de telefone de um usuario a partir de seu Id
2. Obter o endereco do usuario pelo Id
*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Dezin',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        numero: '1100000000',
        ddd: 17
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'rua dos bobos',
      numero: 0
    })
  }, 2000)
}

// 1o passo adicionar a palavra async -> automaticamente ela retornara uma promise
main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterEnderecoAsync(usuario.id),
      obterTelefone(usuario.id)
    ])

    const endereco = resultado[0]
    const telefone = resultado[1]

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.numero}
      Endereco: ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('deu ruim', error)
  }
}

// const usuarioPromise = obterUsuario()
// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id)
//       .then(function resolverTelefone(resultado) {
//         return {
//           usuario: {
//             id: usuario.id,
//             nome: usuario.nome
//           },
//           telefone: resultado
//         }
//       })
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     console.log(`Nome: ${resultado.usuario.nome}
//       Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: ${resultado.telefone.ddd} ${resultado.telefone.numero}`)
//   })
//   .catch(function (error) {
//     console.error('deu pau', error)
//   })

// function resolverUsuario(erro, usuario) {
//   console.log(usuario)
// }

// obterUsuario(function resolverUsuario(erro, usuario) {
//   if (erro) {
//     console.error('deu ruim pai usuario ta zuado', erro)
//     return
//   }

//   obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
//     if (erro1) {
//       console.error('deu ruim pai telefone ta zuado', erro1)
//       return
//     }

//     obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//       if (erro2) {
//         console.error('deu ruim pai endereco ta zuado', erro2)
//         return
//       }

//       console.log(`Nome: ${usuario.nome}, endereço: ${endereco.rua}, telefone: ${telefone.numero}`)
//     })
//   })
// })

// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco(usuario.id)

// console.log(telefone)