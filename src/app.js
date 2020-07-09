const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

const julia = {
    name: 'Isabel Domingues',
    age: 27,
    height: 1.57,
    weight: '60kg',
    hair: 'Médio, Preto (Ruivo tingido)',
    eyes: 'Mel',
    job: 'Perita Criminal',
    //
    strength: 2,
    stamina: 1,
    dexterity: 1,
    speed: 2,
    //
    int: 2,
    perception: 3,
    charisma: 1,
    guile: 1,
    //
    driving: 0,
    search: 3,
    reading: 1,
    sneak: 1,
    stealing: 1,
    listening: 3
};

const caio = {
    name: 'Lucas Trado',
    age: 23,
    height: 1.79,
    weight: '70kg',
    hair: 'Curto, Castanho',
    eyes: 'Castanhos',
    job: 'Comerciante',
    //
    strength: 0,
    stamina: 1,
    dexterity: 2,
    speed: 2,
    //
    int: 2,
    perception: 1,
    charisma: 1,
    guile: 2,
    //
    driving: 1,
    search: 1,
    reading: 5,
    sneak: 3,
    stealing: 1,
    listening: 2
}

const rebeca = {
    name: 'Alice Waldorf',
    age: 22,
    height: 1.70,
    weight: '62kg',
    hair: 'Curto, Preto (Tingido)',
    eyes: 'Verdes',
    job: 'Bailarina',
    //
    strength: 2,
    stamina: 3,
    dexterity: 2,
    speed: 2,
    //
    int: 2,
    perception: 2,
    charisma: 2,
    guile: 2,
    //
    driving: 4,
    search: 2,
    reading: 2,
    sneak: 1,
    stealing: 2,
    listening: 2
}

const guihard = {
    name: 'Prado Inagawa',
    age: 19,
    height: 1.65,
    weight: '65kg',
    hair: 'Dreadlocks curtos',
    eyes: 'Escuras',
    job: 'Membro da Yakuza',
    //
    strength: 1,
    stamina: 0,
    dexterity: 2,
    speed: 2,
    //
    int: 2,
    perception: 1,
    charisma: 0,
    guile: 2,
    //
    driving: 0,
    search: 1,
    reading: 0,
    sneak: 3,
    stealing: 1,
    listening: 3
}

app.post('/sendpassword', (req, res) => {
    const { password } = req.body;

    if (password === 'jambo123') {
        return res.json(julia);
    }

    if (password === 'babosa45') {
        return res.json(caio);
    }

    if (password === 'pitaia00') {
        return res.json(rebeca);
    }

    if (password === 'tulipa51') {
        return res.json(guihard);
    }

    return res.status(400).json({ ok: false });
});

app.get('/profile', (req, res) => {
    return res.json({ ok: true });
});

app.listen(process.env.PORT || 3333);