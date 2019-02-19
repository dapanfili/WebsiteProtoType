class Calendar{
    constructor(year = 1980, month = 0){
        this.DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]
        this.MONTHSNAME = new Array();
        this.MONTHSNAME[0] = "January"
        this.MONTHSNAME[1] = "February"
        this.MONTHSNAME[2] = "March"
        this.MONTHSNAME[3] = "April"
        this.MONTHSNAME[4] = "May"
        this.MONTHSNAME[5] = "June"
        this.MONTHSNAME[6] = "July"
        this.MONTHSNAME[7] = "August"
        this.MONTHSNAME[8] = "September"
        this.MONTHSNAME[9] = "October"
        this.MONTHSNAME[10] = "November"
        this.MONTHSNAME[11] = "December"
        this.month = month;
        this.year = year;
        this.date = new Date(year, month -1,1)
        
    }

    getCurrDay(){
        return (new Date()).getDate();
    }
    getCurrMonth(){
        return (new Date()).getMonth();
    }
    getMonthName(month = 0){
        return this.MONTHSNAME[month];
    }
    getMonthLength(){
        console.log(this.year);
        console.log(this.month);
        return new Date(this.year, this.month, 0).getDate();

    }

}