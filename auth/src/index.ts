import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());

app.get("/api/users/currentuser", (req, res) => {
    res.send("Hello :)")
})


app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log("Listening on port 3000")
});