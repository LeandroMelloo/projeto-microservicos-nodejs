import express, { Request, Response, NextFunction } from 'express'; // gerenciador de rotas HTTP

const app = express(); // instanciando o express

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'executando...' });
});

app.listen(3000, () => console.log('Aplicação executando na porta 3000!'));

