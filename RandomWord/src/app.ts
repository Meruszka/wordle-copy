import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { wordSchema } from './types/word/wordSchema';
import resolvers from './types/word/wordResolver';
import cors from 'cors';

import routes from './routes';

class App {
    public app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private async middlewares() {
        const server = new ApolloServer({ typeDefs: wordSchema, resolvers: resolvers });
        await server.start();

        this.app.use(
            express.json(),
            cors({
                origin: 'http://localhost:3000'
            }),
            expressMiddleware(server),
            );
    }

    private routes() {
        this.app.use(routes);
    }

}

export default new App().app;
