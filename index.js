import express from 'express';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';


const app = express();

app.get('/', (req, res) => {
    res.send('Graphql is amazing!');
});

const root = { hello: () => "Hi, I'm Lai Anh" };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running on server localhost:8080/graphql'));