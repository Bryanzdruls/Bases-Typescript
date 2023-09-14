(()=>{
    type Avenger = {
        name: string,
        weapon: string,

    }
    const ironman:Avenger={
        name:'Tony Stark',
        weapon: 'Armor Suit',
    }
    const spiderman:Avenger={
        name:'Peter Parker',
        weapon: 'Spider Habilities',
    }
    
    const capAmerica:Avenger={
        name:'Steven Rogers',
        weapon: 'Shield',
    }
    const avengers:Avenger[] = [ironman,spiderman,capAmerica];

    for (const avenger of avengers) {
        console.log(avenger);        
    }
})()