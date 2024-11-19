// Isola as variaveis definidas dentro do namespace, pois o typescript indica erro caso a variavel declarada ja for utilizada em outro arquivo
namespace casting{
    let idade: any = 25;
    (idade as number).toFixed(); // 'as' identifica a variavel para tal tipo, permitindo utilizar os métodos e atributos deste tipo

    let nome: string = 35 as unknown as string;
}