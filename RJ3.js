class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = []
        this.#cpf = cpf

        Object.defineProperty(this, 'clienteDetalhes', {
            get: function(){                
                let dTelefones = ''
                this.telefones.forEach(function(telefone){
                    dTelefones += telefone.telefoneDetalhes + '\n'
                })

                return 'Nome: ' + this.nome +
                this.endereco.enderecoDetalhes +
                '\n' + dTelefones
            }
        })
    }

    #clienteDetalhesAlto(cDetalhesAlto){
        return cDetalhesAlto.toUpperCase()
    }

    mostrarCDetalhesAlto(){
        let telefoneDetalhesAlto = ''
        this.telefones.forEach(telefone => {
            telefoneDetalhesAlto += this.#clienteDetalhesAlto(telefone.telefoneDetalhes) + '\n'
        })

        return 'Nome: ' + this.#clienteDetalhesAlto(this.nome) +
        this.#clienteDetalhesAlto(this.endereco.enderecoDetalhes) +
        '\n' + this.#clienteDetalhesAlto(this.telefones.telefoneDetalhes)    
    }

    #clienteDetalhesBaixo(cDetalhesBaixo){
        return cDetalhesBaixo.toLowerCase()
    }

    mostrarCDetalhesBaixo(){
        let telefoneDetalhesBaixo = ''
        this.telefones.forEach(telefone => {
            telefoneDetalhesBaixo += this.#clienteDetalhesBaixo(telefone.telefoneDetalhes) + '\n'
        })

        return 'Nome: ' + this.#clienteDetalhesBaixo(this.nome) +
        this.#clienteDetalhesBaixo(this.endereco.enderecoDetalhes) +
        '\n' + this.#clienteDetalhesBaixo(this.telefones.telefoneDetalhes)    
    }

    get pegarCpf (){
        return this.#cpf
    }

}

class Telefone {
    constructor(DDD, numero){
        this.DDD = DDD
        this.numero = numero

        Object.defineProperty(this, 'telefoneDetalhes', {
            get: function(){
                return 'DDD: ' + this.DDD + ' Número: ' + this.numero
            }
        })
    }

    #telefoneDetalhesAlto(tDetahesAlto){
        return tDetahesAlto.toUpperCase()
    }

    mostrarTDetalhesAlto(){
        return 'DDD: ' + this.#telefoneDetalhesAlto(this.DDD) + 'Número: ' + this.#telefoneDetalhesAlto(this.numero)
    }

    #telefoneDetalhesBaixo(tDetahesBaixo){
        return tDetahesBaixo.toLowerCase()
    }

    mostrarTDetalhesBaixo(){
        return 'DDD: ' + this.#telefoneDetalhesBaixo(this.DDD) + 'Número: ' + this.#telefoneDetalhesBaixo(this.numero)
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        Object.defineProperty(this, 'enderecoDetalhes', {
            get: function(){
                return '\nEstado: ' + this.estado +
                ' Cidade: ' + this.cidade +
                ' Rua: ' + this.rua + 
                ' Número: ' + this.numero
            }
        })
    }

    #enderecoDetalhesAlto(eDetalhesAlto){
        return eDetalhesAlto.toUpperCase()
    }

    mostrarEDetalhesAlto(){
        return 'Estado: ' + this.#enderecoDetalhesAlto(this.estado) +
        'Cidade: ' + this.#enderecoDetalhesAlto(this.cidade) +
        'Rua: ' + this.#enderecoDetalhesAlto(this.rua) + 
        'Número: ' + this.#enderecoDetalhesAlto(this.numero)
    }

    #enderecoDetalhesBaixo(eDetalhesBaixo){
        return eDetalhesBaixo.toLowerCase()
    }

    mostrarEDetalhesBaixo(){
        return 'Estado: ' + this.#enderecoDetalhesBaixo(this.estado) +
        'Cidade: ' + this.#enderecoDetalhesBaixo(this.cidade) +
        'Rua: ' + this.#enderecoDetalhesBaixo(this.rua) + 
        'Número: ' + this.#enderecoDetalhesBaixo(this.numero)
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = []
        this.telefones = []

        Object.defineProperty(this, 'empresaDetalhes', {
            get: function(){
                let dTelefones = ''
                this.telefones.forEach(function(telefone){
                    dTelefones += telefone.telefoneDetalhes + '\n'
                })

                let dClientes = ''
                this.clientes.forEach(function(cliente){
                    dClientes += cliente.clienteDetalhes + '\n'
                })
                
                return 'Razão social: ' + this.razaoSocial +
                '\nNome Fantasia: ' + this.nomeFantasia +
                '\n' + dTelefones +
                '--------------\n' + dClientes 
            }
        })
    }

    #empresaDetalhesAlto(emDetalhesAlto){
        return emDetalhesAlto.toUpperCase()
    }

    mostrarEmDetalhesAlto(){
        let tDetalhesAlto = ''
        this.telefones.forEach(function(telefone){
            tDetalhesAlto += this.#empresaDetalhesAlto(telefone.telefoneDetalhes) + '\n'
        }, this) 
    
        let cDetalhesAlto = ''
        this.clientes.forEach(function(cliente){
            cDetalhesAlto += this.#empresaDetalhesAlto(cliente.clienteDetalhes) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#empresaDetalhesAlto(this.razaoSocial) +
        '\nNome Fantasia: ' + this.#empresaDetalhesAlto(this.nomeFantasia) +
        this.#empresaDetalhesAlto(this.endereco.enderecoDetalhes) +
        '\n' + tDetalhesAlto + 
        '--------------\n' + cDetalhesAlto;
    }

    #empresaDetalhesBaixo(emDetalhesBaixo){
        return emDetalhesBaixo.toLowerCase()
    }

    mostrarEmDetalhesBaixo(){
        let tDetalhesBaixo = ''
        this.telefones.forEach(function(telefone){
            tDetalhesBaixo += this.#empresaDetalhesBaixo(telefone.telefoneDetalhes) + '\n'
        }, this)
    
        let cDetalhesBaixo = ''
        this.clientes.forEach(function(cliente){
            cDetalhesBaixo += this.#empresaDetalhesBaixo(cliente.clienteDetalhes) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#empresaDetalhesBaixo(this.razaoSocial) +
        '\nNome Fantasia: ' + this.#empresaDetalhesBaixo(this.nomeFantasia) +
        this.#empresaDetalhesBaixo(this.endereco.enderecoDetalhes) +
        '\n' + tDetalhesBaixo + 
        '--------------\n' + cDetalhesBaixo;
    }   
}

let enderecoEmpresa = new Endereco("São Paulo", "São Paulo", "Rua das Inovações", 123)
let telefoneEmpresa1 = new Telefone(11, "1234-5678")
let telefoneEmpresa2 = new Telefone(11, "9876-5432")
let empresa = new Empresa("Tech Solutions", "Tech Sol", "12345678000199", enderecoEmpresa)
empresa.telefones.push(telefoneEmpresa1, telefoneEmpresa2)

let enderecoCliente1 = new Endereco("São Paulo", "São Paulo", "Avenida Paulista", 456)
let telefoneCliente1_1 = new Telefone(11, "3344-5566")
let telefoneCliente1_2 = new Telefone(11, "6677-8899")
let cliente1 = new Cliente("João Silva", "123.456.789-00", enderecoCliente1)
cliente1.telefones.push(telefoneCliente1_1, telefoneCliente1_2)

let enderecoCliente2 = new Endereco("Campinas", "São Paulo", "Rua Floriano Peixoto", 789)
let telefoneCliente2_1 = new Telefone(19, "2233-4455")
let telefoneCliente2_2 = new Telefone(19, "6677-8899")
let cliente2 = new Cliente("Maria Oliveira", "987.654.321-00", enderecoCliente2);
cliente2.telefones.push(telefoneCliente2_1, telefoneCliente2_2)

let enderecoCliente3 = new Endereco("Rio de Janeiro", "Rio de Janeiro", "Rua João Pessoa", 101)
let telefoneCliente3_1 = new Telefone(21, "5544-7788")
let telefoneCliente3_2 = new Telefone(21, "9988-6677")
let cliente3 = new Cliente("Carlos Souza", "112.233.445-66", enderecoCliente3)
cliente3.telefones.push(telefoneCliente3_1, telefoneCliente3_2)

let enderecoCliente4 = new Endereco("Fortaleza", "Ceará", "Rua das Laranjeiras", 202)
let telefoneCliente4_1 = new Telefone(85, "1122-3344")
let telefoneCliente4_2 = new Telefone(85, "5544-2211")
let cliente4 = new Cliente("Ana Costa", "321.654.987-00", enderecoCliente4)
cliente4.telefones.push(telefoneCliente4_1, telefoneCliente4_2)

let enderecoCliente5 = new Endereco("Belo Horizonte", "Minas Gerais", "Rua das Flores", 303)
let telefoneCliente5_1 = new Telefone(31, "8765-4321")
let telefoneCliente5_2 = new Telefone(31, "6543-2109")
let cliente5 = new Cliente("Lucas Martins", "654.321.987-00", enderecoCliente5)
cliente5.telefones.push(telefoneCliente5_1, telefoneCliente5_2)

empresa.clientes = [cliente1, cliente2, cliente3, cliente4, cliente5]

//Imprime detalhes da empresa
console.log(empresa.empresaDetalhes)

//Imprime detalhes da empresa em caixa alta
console.log(empresa.mostrarEmDetalhesAlto())

//Imprime detalhes da empresa em caixa baixa
console.log(empresa.mostrarEmDetalhesBaixo())
