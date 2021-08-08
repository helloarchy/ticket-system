import express from "express";

const router = express.Router();

router.get('/api/users/current-user', (req, res) => {
    console.log("Hello again :)")
});

export { router as currentUserRouter };