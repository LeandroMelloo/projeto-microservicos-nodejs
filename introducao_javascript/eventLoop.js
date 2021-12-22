function eventLoop() {
    var a = 1;
    var b = 2;
    var c = 3;

    console.log(a);

    setTimeout(() => {
        console.log(b);
    }, 10000); // espera 10000 milesegundo, para depois ser impresso

    console.log(c);
}

eventLoop(); // vai executar a função e imprimir -> 1, 3, 2