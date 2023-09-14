"use strict";
(() => {
    const a = 10;
    let b;
    const sayHello = (msg) => {
        console.log(msg);
    };
    sayHello('no');
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        spiderman: 'Tom Holland',
        activo: true,
        poder: 1500
    };
    const { poder, activo } = avengers;
    const printAvengers = ({ spiderman }) => {
        console.log(spiderman);
    };
    printAvengers(avengers);
    const avengerArr = ['cap america', 'Ironman', 'Hulk'];
    const [, ironman] = avengerArr;
    console.log(ironman);
})();
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armor Suit',
    };
    const spiderman = {
        name: 'Peter Parker',
        weapon: 'Spider Habilities',
    };
    const capAmerica = {
        name: 'Steven Rogers',
        weapon: 'Shield',
    };
    const avengers = [ironman, spiderman, capAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = 'brian';
    const getName = () => {
        console.log(nombre);
    };
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
    }
    class xMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeXmen() {
            console.log(this.getFullname());
        }
    }
    const wolverine = new xMen('Wolverine', 'Logan', true);
    wolverine.setName('logan');
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.aveAge = 35;
    const antman = new Avenger('Ironman', 'ironman', 'tony montana');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
    }
    class xMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeXmen() {
            console.log(this.getFullname());
        }
    }
    const wolverine = new xMen('Wolverine', 'Logan', true);
    wolverine.setName('logan');
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Brian');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Brian');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Brian', 'Torres');
})();
(() => {
    const fullName = (firstname, ...restArgs) => {
        return `${firstname} ${restArgs.join(' ')}`;
    };
    const superman = fullName('clark', 'joseph', 'kent');
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `El mundo ha sido salvado`;
    let myfunction;
    myfunction = addNumber;
    console.log(myfunction(1, 2));
})();
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activateBatignal = () => {
        return 'batiseñal activada';
    };
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad']
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Hola Mundo');
})();
(() => {
    let isActive = false;
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(` I'm ${batman} `);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map