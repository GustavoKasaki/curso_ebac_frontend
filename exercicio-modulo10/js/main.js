$(document).ready(function() {

    $('#carousel').slick({
        autoplay: true,
        arrows: false   
    })

    const behavior = function(val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },

    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        },
        placeholder: '(00) 00000-0000 ou (00) 0000-0000'
    };
    
    $('#telefone').mask(behavior, options);

    /* obsoleto (substituido pelo evento acima - possibilita input de numeros fixo e celular)
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    */
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: (`Insira seu nome`),
            email: (`Insira seu e-mail`),
            telefone: (`Insira seu telefone/celular`),
            endereco: (`Insira seu endereço`),
            cep: (`Insira seu CEP`),
            cpf: (`Insira seu CPF`),
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})