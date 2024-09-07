
class University {
    constructor(private name:string, private dept: string){}
    graduation(year:number) :void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu : University = new University("MIU", "MSD")
miu.graduation(2021);