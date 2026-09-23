const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback) {
  const lista = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    if (!result) continue
    lista.push(item)
  }

  return lista
}

async function main() {
  try {
    const { results } = await obterPessoas('a')

    // const familiaLars = results.filter(function (item) {
    //   const result = item.name.toLowerCase().includes('lars') !== false
    //   return result
    // })

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`${index}`, lista.length)
      return item.name.toLowerCase().includes('lars') !== false
    })

    const names = familiaLars.map(pessoa => pessoa.name)
    console.log('names', names)
  } catch (error) {
    console.error('deu ruim', error)
  }
}

main()