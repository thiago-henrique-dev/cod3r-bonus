const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(values))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola: function () {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class

class Animal {}
class Cachorro extends Animal {
    falar(){
        return "AUAU"
    }

}

console.log(new Cachorro().falar())