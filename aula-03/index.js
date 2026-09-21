const EventEmmiter = require('events')

class MeuEmissor extends EventEmmiter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
  console.log('Um usuario clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)

const stdin = process.stdin.resume()
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function (valor) {
      // console.log(`Voce digitou: ${valor.toString().trim()}`)
      return resolve(valor)
    })

  })
}

main().then(function (resultado) {
  console.log('resultado', resultado.toString())
})
