(()=>{
    type Avengers ={
        nick: string;
        ironman: string;
        spiderman: string;
        activo: boolean;
        poder: number;
    }
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        spiderman: 'Tom Holland',
        activo: true,
        poder:1500
    }
    const {poder,activo} =avengers
    
    const printAvengers =({spiderman}:Avengers) => {
        console.log(spiderman);
        
    }
    printAvengers(avengers);

    const avengerArr:string[] = ['cap america','Ironman','Hulk']

    const [,ironman] = avengerArr
    console.log(ironman);
    
})()