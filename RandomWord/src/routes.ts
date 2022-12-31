import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'This server uses GraphQL on /graphql' });
});

export default routes;
