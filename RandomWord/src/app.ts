import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './types/word/wordSchema';
import root from './types/word/wordResolver';


import routes from './routes';

class App {
    public server;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.server.use(express.json());
        this.server.use('/graphql', graphqlHTTP({
            graphiql: true,
            rootValue: root,
            schema: schema
            }));
    }

    private routes() {
        this.server.use(routes);
    }
}

export default new App().server;
