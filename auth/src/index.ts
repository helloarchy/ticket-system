import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';

import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/signup";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter)
app.use(signInRouter)
app.use(signUpRouter)
app.use(signOutRouter)

// For all non implemented routes, 404
app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log("Listening on port 3000")
});