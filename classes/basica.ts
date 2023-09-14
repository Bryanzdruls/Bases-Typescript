(()=>{
    class Avenger{
        static aveAge:number=35;
        /*private name: string;
        public  team: string;
        public  realName?: string;
       
        constructor(name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
        }*/

        constructor(
            private name: string,
            public  team: string,
            public  realName?: string,
        ){}

        public bio(){
            return `${this.name} (${this.team})`
        }
    }
    const antman:Avenger = new Avenger('Ironman','ironman','tony montana');
    
})()