import express,{Application} from "express";
import path from "path";
import cors from 'cors';
import HandleError from "../error/errorHandel";
import router from "../routes/v1";

const app:Application = express()

app.use(cors({
    origin: '*'
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount api v1 routes
app.use('/v1', router);

// BASE ERROR HANDELING
app.use(HandleError.returnError);


export default app;