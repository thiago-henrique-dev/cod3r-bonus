const pessoa = {
    saudacao: 'Bomdia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoas = pessoa.falar
falar()

const falarDePesssoa = pessoa.bind(pessoa)
falarDePessoa()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()