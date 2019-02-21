//Due to current month being a month ahead have to set up dates a month ahead.
jsonEvents = `[
    {
        "scheduleDate":"2019-03-18",
        "name":"Art Supplies 9AM - 3PM"
   
    },   
	{	
        "scheduleDate":"2019-03-18",
        "name":"Kitchen Stuff 10AM - 4PM"
   
    }, 
	{	
        "scheduleDate":"2019-04-19",
        "name":"Art Supplies 9AM - 3PM"
   
    }, 
	{	
        "scheduleDate":"2019-04-01",
        "name":"Pots 9AM - 3PM"
   
    }, 
	{	
        "scheduleDate":"2019-04-01",
        "name":"Pens 9AM - 3PM"
   
    }, 
	{	
        "scheduleDate":"2019-04-02",
        "name":"Art Supplies 10AM - 4PM"
   
    }, 
	{	
        "scheduleDate":"2019-04-03",
        "name":"Stapler 9AM - 3PM"
   
    }


    
]`;

function getEvent(){
	var events = JSON.parse(jsonEvents);
	return events;
}

class ObjEvent{
	constructor(name = "unkown",scheduleDate = new Date()){
		this.scheduleDate = scheduleDate
		this.name = name;
	}
}


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
        this.events = getEvent();
        
    }
	
	getEventDay(day){
        var dayEvents = new Array();
        var indexOf = 0;
        for(var index in this.events){
            var date = new Date(this.events[index].scheduleDate);
            if(day == date.getDate() && this.year == date.getFullYear() && this.month == date.getMonth()){
                dayEvents[indexOf] = this.events[index];
                indexOf++;
            }
        }
        return dayEvents;
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