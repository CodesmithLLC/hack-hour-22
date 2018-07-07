const DAYS = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
};

const MONTHS = {
  'jan': 0,
  'feb': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11
};

function parseDates(str) {
  var date, ampm, times, month, dayOfMonth, day, hour, min;
  var sections = str.toLowerCase().split(' ');
  
  date = new Date();
  
  if (!/^[a-zA-Z]{3,9}\s([0-9]{1,2}[a-z]{2}\s)?[0-9]{1,2}:[0-9]{2}\s(AM|PM)/.test(str)) return date;
  
  if (sections[0] in DAYS) {
    
    // we have a day of week for the past week    
    day = sections[0];
    ampm = sections[2];
    times = sections[1].split(':');
    hour = parseInt(times[0]);
    min = parseInt(times[1]);
    
    date.setDate(date.getDate() - 1);
    while(date.getDay() !== DAYS[day]) {
      date.setDate(date.getDate() - 1);
    }
    
  }
  
  if (sections[0] in MONTHS) {
    
    // we have a month in the past year
    month = MONTHS[sections[0]];
    dayOfMonth = parseInt(sections[1].replace(/[^\d]/g, ""));
    times = sections[2].split(':');
    hour = parseInt(times[0]);
    min = parseInt(times[1]);
    ampm = sections[3];
    
    date.setMonth(month);
    date.setDate(dayOfMonth);
    
  }
    
  if (sections[0] === 'today') {
    
    ampm = sections[2];
    times = sections[1].split(':');
    hour = parseInt(times[0]);
    min = parseInt(times[1]);
    
  }
  
  if (ampm === 'am' && hour === 12) {
    hour = 0;
  } else if (ampm === 'pm' && hour < 12) {
    hour = hour + 12;
  }
  
  date.setHours(hour);
  date.setMinutes(min);

  return date;
}
