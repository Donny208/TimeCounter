weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

start = new Date("July 7, 2019 09:00:00")
end = new Date("Aug 24, 2019 18:00:00")


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
