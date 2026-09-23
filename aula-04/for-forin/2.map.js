const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for (let i = 0; i <= this.length - 1; i++) {
    const resultado = callback(this[i], i)
    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado
}

async function main() {
  try {
    const result = await service.obterPessoas('a')
    // const names = []
    // result.results.forEach(function (item) {
    //   names.push(item.name)
    // })

    // const names = result.results.map(function (pessoa) {
    //   return pessoa.name
    // })

    // const names = result.results.map(pessoa => pessoa.name)

    const names = result.results.meuMap(function (pessoa, indice) {
      return `${indice} - ${pessoa.name}`
    })
    console.log('names', names)
  } catch (error) {
    console.error('deu ruim', error)
  }
}

main()