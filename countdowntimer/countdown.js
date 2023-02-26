class CountDown {

    constructor(expiredTime ,onRender ,onComplete){
        this.setExpiredTime(expiredTime);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }

    setExpiredTime(expiredTime){  
        const currentTime = new Date().getTime();
        this.RemainingTime = expiredTime.getTime() - currentTime;
        this.RemainingTime <= 0 ? this.completed() :this.start();
    }
   
    completed(){
        if (typeof this.onComplete  === 'function'){
            this.onComplete();
        }
    }
    start(){
        const timer = setInterval(()=>{
            this.RemainingTime -= 1000;
            if(this.RemainingTime <0){
                this.completed();
                clearInterval(timer);
           }
           else{
             this.update();
           }
        },1000);
    }

    getTime(){
        return {
            days: Math.floor(this.RemainingTime /1000/60/60/24),
            hours: Math.floor(this.RemainingTime/1000/60/60) %24,
            minutes :Math.floor(this.RemainingTime/1000/60) %60,
            seconds :Math.floor(this.RemainingTime/1000)%60
        }
    }

    update(){
        if(typeof this.onRender === 'function'){
            this.onRender(this.getTime());
        } 
    }
}