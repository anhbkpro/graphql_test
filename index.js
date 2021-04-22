import express from 'express';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';


const app = express();

app.get('/', (req, res) => {
    res.send('Graphql is amazing!');
});

const root = { friend: () => {
    return {
        "id": 123456789,
        "firstName": "Lai",
        "lastName": "Anh",
        "gender": "Male",
        "email": [
            {email: "me@me.com"},
            {email: "another@me.com"}
        ]
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running on server localhost:8080/graphql'));
