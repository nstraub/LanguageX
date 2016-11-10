import 'babel-polyfill';
import express from 'express';
import userRoutes from './routes/user-routes';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
app.use('/users', userRoutes);

function runServer() {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/languageX');
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
