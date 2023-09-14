(()=>{
    class Avenger{
        constructor(
            private name:string,
            public realName:string,
        ){
            console.log('Constructor avenger llamado');            
        }
        protected getFullname():string{
            return `${this.name} ${this.realName}`
        }
        getName(){
            return this.name;
        }
        setName(name:string){
            this.name = name;
        }
    }
    class xMen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:Boolean,
        ){
            super(name,realName);
        }
        public getFullnameDesdeXmen(): void {
            console.log( this.getFullname() );
            
        }

    }
    const wolverine = new xMen('Wolverine', 'Logan',true);
    wolverine.setName('logan');

    
})()