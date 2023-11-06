import express from 'express';

const router = express.Router();

const stage3Maze = [
    ['se', 'ew', 'sew', 'ew', 'sew', 'ew', 'sew', 'ew', 'w'],
    ['ns', '', 'n', '', 'ns', '', 'ns', 'ns', 's'],
    ['ne', 'ew', 'ew', 'sw', 'ns', '', 'ns', '', 'ns'],
    ['', 'Xs', '', 'ns', 'ne', 'ew', 'new', 'ew', 'nsw'],
    ['e', 'new', 'ew', 'nw', '', '', '', '', 'n']
];

router.get('/1', (request, response) => {
    response.render('stage1');
});

router.get('/2', (request, response) => {
    response.render('stage2');
});

router.get('/3', (request, response) => {
    let current = { x: 0, y: 0 };
    let finalDirections = { n: false, s: false, e: false, w: false };
    for (let i = 0; i < stage3Maze[current.y][current.x].split('').length; i++) {
        finalDirections[stage3Maze[current.y][current.x].split('')[i]] = true;
    }

    response.render('stage3', { directions: finalDirections, invalid: false, flag: '' });
});

router.get('/3/:directions', (request, response) => {
    let directions = request.params.directions;
    if (request.params.directions == null) {
        directions = '';
    }

    let current = { x: 0, y: 0 };
    let invalid = false;
    for (let i = 0; i < directions.length; i++) {
        if (stage3Maze[current.y][current.x].includes(directions[i])) {
            switch (directions[i]) {
                case 'n':
                    current.y--;
                    break;
                case 's':
                    current.y++;
                    break;
                case 'e':
                    current.x++;
                    break;
                case 'w':
                    current.x--;
                    break;
            }
        } else {
            invalid = true;
        }
    }

    let finalDirections = { n: false, s: false, e: false, w: false };
    let flag = '';
    for (let i = 0; i < stage3Maze[current.y][current.x].split('').length; i++) {
        finalDirections[stage3Maze[current.y][current.x].split('')[i]] = true;
        if (stage3Maze[current.y][current.x].split('')[i] == 'X') {
            flag = 'flag{1t5_l1k3_a_c0rn_m4z3_32901}';
        }
    }

    response.render('stage3', { directions: finalDirections, invalid, flag });
});

router.get('/4', (request, response) => {
    response.render('stage4');
});

router.get('/5', (request, response) => {
    response.render('stage5');
});

export default router;