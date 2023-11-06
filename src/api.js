import express, { request } from 'express';

const router = express.Router();

router.post('/check-stage2', (request, response) => {
    if (!request.body || !request.body.password || !request.body.wtf || request.body.wtf.length != 15) {
        response.status(403).send('You need to send some right data to check for the flag!');
        return;
    }

    response.status(200).send('flag{t00_m4ny_l3tt3r5_83201}');
});

router.get('/stage4-flag', (request, response) => {
    response.status(200).send('flag{l0t5_0f_c0l0r5_s0rry_21023}');
})

export default router;