(()=>{
    const addNumber =(a:number, b:number) => a + b ;
    const greet =(name:string) => `hola ${name}` ;
    const saveTheWorld = () => `El mundo ha sido salvado`;

    let myfunction: (x:number,y:number) => number ;
    
    myfunction =addNumber;
    console.log( myfunction(1,2) );
    
    /*myfunction =greet;
    console.log( myfunction('Brian') );
    
    myfunction =saveTheWorld;
    console.log( myfunction );*/
})()