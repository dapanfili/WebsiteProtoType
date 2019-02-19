var calendar = new Calendar(2019,(new Date()).getMonth() + 1)

function calendarUpdate(){
    var daysList = document.getElementById("days");
    var dayCurr = calendar.getCurrDay();
    
    var monthCurr = calendar.getCurrMonth()+1;
    console.log(monthCurr);
    var monthSelected = document.getElementById("currSelectedMonth")

    //Set up month name and get month info
    monthSelected.innerHTML = calendar.getMonthName(calendar.month-1) + "<br><span style='font-size:18px'>"+calendar.year+"</span>";
    var numOfDays = calendar.getMonthLength();
    console.log(numOfDays);
    daysList.innerHTML = "";

    //Update Days of Month
    for (var dayNum = 1; dayNum <= numOfDays; dayNum++){
        var eventForm = "EventForm.html"
        var eventFormLink = document.createElement("a")
        
        var dayListItem = document.createElement("li");
        eventFormLink.setAttribute("href",eventForm)
        eventFormLink.setAttribute("target", "popup");
        
        dayListItem.id = "day_"+ dayNum;
        var text = document.createTextNode(dayNum)
        eventFormLink.appendChild(text);
        

        if (dayNum == dayCurr && monthCurr == calendar.month){
            var spanActive = document.createElement("div");
            spanActive.innerHTML = dayNum;
            dayListItem.appendChild(spanActive);
            }else{
                dayListItem.innerHTML = dayNum;
            }
            daysList.appendChild(eventFormLink);

        }
    }
    function next(){
        calendar.month = calendar.month + 1
        if(calendar.month ==13){
            calendar.month = 1;
            calendar.year = calendar.year + 1;
        }
        
        calendarUpdate();
    }
    function prev(){
        calendar.month = calendar.month - 1
        if(calendar.month ==0){
            calendar.month = 12;
            calendar.year = calendar.year - 1;
        }
        calendarUpdate();
    }


    calendarUpdate();

function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}