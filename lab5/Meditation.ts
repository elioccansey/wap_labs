export class Meditation {
    constructor(private time:number){}
    start(){
        const initialDuration = this.time;
        const timerId = setInterval(()=>{
            console.log(this.time--);
            if(this.time == 0){
                console.log("Jay Guru Dev");
                clearInterval(timerId)
                return;
            }
        }, initialDuration)
    }

}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
