weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

start = new Date("July 7, 2019 09:00:00")
end = new Date("Aug 25, 2019 17:00:00")

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getCurrent(r=5){
	now = new Date()
	curTime = now-start
	finalTime = end-start
	current = curTime/finalTime*100
	return round(current,r)
}

function getPer(d,r=5){
	find = new Date(d)
	curTime = find-start
	finalTime = end-start
	current = curTime/finalTime*100
	return round(current,r)
}

function solveTime(time, f = true){
	finalTime = end-start
	findTime = (time*finalTime)/100
	day = new Date(findTime+start.getTime())
	if(!f){
		return day
	}else{
		return time+"% Will Happen On "+weekday[day.getDay()]+" "+month[day.getMonth()]+" "+day.getDate()+" "+day.getFullYear()+" "+day.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+" and "+day.getMilliseconds()+" millisecond(s)."
	}
}

function getDays(r=5){
	now = new Date()
	timeRemaining = end-now
	toDays = timeRemaining/(1000*60*60*24)
	
	return round(toDays,r);
}

function getHours(r=5){
	now = new Date()
	timeRemaining = end-now
	toDays = timeRemaining/(1000*60*60)
	
	return round(toDays,r);
}

function getMinutes(r=5){
	now = new Date()
	timeRemaining = end-now
	toDays = timeRemaining/(1000*60)
	
	return round(toDays,r);
}

function getSeconds(r=5){
	now = new Date()
	timeRemaining = end-now
	toDays = timeRemaining/(1000)
	
	return round(toDays,r);
}

function getFull(){
	now = new Date()
	timeRemaining = end-now
	days = timeRemaining/(1000*60*60*24)
	
	hours = days - Math.floor(days);
	decimalPlaces = days.toString().split('.')[1].length;
	hours = JSON.parse(hours.toFixed(decimalPlaces))*24;
	
	mins = hours - Math.floor(hours);
	decimalPlaces = hours.toString().split('.')[1].length;
	mins = JSON.parse(mins.toFixed(decimalPlaces))*60;
	
	secs = mins - Math.floor(mins);
	decimalPlaces = mins.toString().split('.')[1].length;
	secs = JSON.parse(secs.toFixed(decimalPlaces))*60;
	
	//return Math.trunc(JSON.parse(days))+":"+Math.trunc(JSON.parse(hours))+":"+Math.trunc(JSON.parse(mins))+":"+Math.trunc(JSON.parse(secs));
	return Math.trunc(JSON.parse(days))+" days, "+Math.trunc(JSON.parse(hours))+" hours, "+Math.trunc(JSON.parse(mins))+" minutes, and "+Math.trunc(JSON.parse(secs))+" seconds remaining.";
}
