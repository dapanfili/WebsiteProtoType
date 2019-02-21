var calendar = new Calendar(2019,(new Date()).getMonth() + 1)

getEvent();
console.log(getEvent());

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
            

        
	//Set up Events
	var eventsPerDay = calendar.getEventDay(dayNum);
	console.log("EVENTS ",eventsPerDay)
	if(eventsPerDay.length >0){
		eventFormLink.setAttribute("data_toggle","tooltip");
		eventFormLink.setAttribute("title","show all")
	}
	
	//Add event to Calendar
	// ADD Events to Calendar
        for(var i in eventsPerDay){
            var divEvent = document.createElement("div");
            divEvent.event = eventsPerDay[i];
            if(i % 2 == 0){
                divEvent.className = divEvent.event.type+"_even";
            }else{
                divEvent.className = divEvent.event.type+"_odd";
            }
            divEvent.innerHTML = eventsPerDay[i].name;
            divEvent.addEventListener("click",function(evnt){
                openModel(evnt.target);
            })
            eventFormLink.appendChild(divEvent);
        }
        eventFormLink.events = eventsPerDay;
        eventFormLink.addEventListener("click",function(evnt){
            console.log("click me " + evnt.target.innerHTML);
            if(evnt.target.id.includes("day")){
                console.log("Date Clicked There are "+evnt.target.events.length+" Events for this day");
            }
        });
	
	daysList.appendChild(eventFormLink);
    }
}

	//Click of Next Button
    function next(){
        calendar.month = calendar.month + 1
        if(calendar.month ==13){
            calendar.month = 1;
            calendar.year = calendar.year + 1;
        }
        
        calendarUpdate();
    }

	//Click of Prev Button
    function prev(){
        calendar.month = calendar.month - 1
        if(calendar.month ==0){
            calendar.month = 12;
            calendar.year = calendar.year - 1;
        }
        calendarUpdate();
    }

//Get Modal
// Get the modal
var modal = document.getElementById('modalForEvent');
var divDate = document.getElementById("modelDate");
var buttonPopup = document.getElementById("popupButton");
var divName = document.getElementById("modelName");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModel(element) {
    var date = new Date(element.event.scheduleDate);
    
    nameDiv.innerHTML = element.event.name;
	divDate.innerHTML = element.event.scheduleDate
    if(element.event.type == "event"){
        buttonPopup.setAttribute("value", "Go To This Event Page");
    }else{
        buttonPopup.setAttribute("value", "Go To This Class Page");
    }
    
    modal.style.display = "block";
}





//Call the Calendar update function
  calendarUpdate();
