<<<<<<< HEAD
let json = $.getJSON('http://slack-server.elasticbeanstalk.com/calendar/NY/2', function(data) {
     console.log(data);
});

// array of keys / dates
let dates = Object.keys(json);
console.log(dates)

//original object > keys (days) : array of objects


	


class Calendar {
  //do something with the data here
  constructor(schedule) {

  }
}

class Event {
  constructor(data) {
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.description = data.description;
  }
}

class Day {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.addEvent = (eventData) => {
      this.events.push(new Event(eventData));
    }
    this.orderEvents = () => {
      //go through events and sort them by start and end time
    }
  }
}

class Week {
  constructor(number) {
    this.days = [];
    this.addDay = (name) => {
      const day = new Day(name);
      this.days.push(day);
    }
  }
}

$(document).on('ready', () => {
  const title = $('<h1>').text('Social Calendar');
  $('body').append(title);
  console.log(title);

  // Make an AJAX request to the server, then do something with the result!
});
=======
// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement('div');
title.innerHTML = 'Social Calendar';
document.body.appendChild(title);

// schedule is a array. 
// rearrange data structure, making a object with day keys and then weeks being subkeys pointing at an array of stuff (ordered list)

function dataRestructure(oldFormat){
  	const eventContainer = {
  	  Monday: {},
  	  Tuesday: {},
  	  Wednesday: {},
  	  Thursday: {},
  	  Friday: {}
    }; 
 
	for(let i = 0; i < oldFormat.length; i++){
  	  let day = oldFormat[i].day;
  	  let week = oldFormat[i].week;
  	  let challenge = oldFormat[i].challenge;
  	  let unit = oldFormat[i].unit; 
  	  let goals = oldFormat[i].goals; 

  	  if(!eventContainer[day][week]){
  	  	eventContainer[day][week] = {'goals': []}
  	  }

  	  eventContainer[day][week].goals.push(goals); 
  	  eventContainer[day][week].unit = unit;
  	  eventContainer[day][week].challenge = challenge; 
  	}

  	return eventContainer; 
}

// let schedule = [
// { week: 1, day: "Monday", unit: 1},
// { week: 2, day: "Monday", unit: 2},
// { week: 2, day: "Tuesday", unit: 3},
// { week: 3, day: "Monday", unit: 4},
// { week: 3, day: "Wednesday", unit: 5},
// { week: 3, day: "Friday", unit: 6}
// ];

let formattedData = dataRestructure(schedule)
 console.log('formated', formattedData);
 console.log('schedule', schedule);




>>>>>>> 96c0e2a3de40f6e74c1fcc32ce73e7aa872ae39c
