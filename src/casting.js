"use strict";
// Isola as variaveis definidas dentro do namespace, pois o typescript indica erro caso a variavel declarada ja for utilizada em outro arquivo
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // 'as' identifica a variavel para tal tipo, permitindo utilizar os métodos e atributos deste tipo
    let nome = 35;
})(casting || (casting = {}));
