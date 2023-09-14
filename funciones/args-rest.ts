(()=>{
    const fullName = (firstname:string,...restArgs:string[] )=>{
        return `${firstname} ${restArgs.join(' ')}`
    }
    const superman = fullName('clark', 'joseph', 'kent');
})()