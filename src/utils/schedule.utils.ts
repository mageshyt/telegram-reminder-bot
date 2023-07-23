const { days, course } = require("../data/classes.json");

export const getReminderMessage = (_course: any, _startTime: any) => {
  const split = _course.Course.split("-");

  const courseName = course[split[1]];
  const class_details = split[3];

  // Replace this with the actual logic to send the reminder.
  return `Reminder: Course "${courseName}" at ${class_details}  starts at ${_startTime}`;
};

export const setReminder = (
  _startTime: number,
  _startMinute: number,
  day: string
) => {
  const courses = days[day].THEORY;
  console.log("👉 current day", day, _startMinute, _startTime);
  for (const course of courses) {
    const startTimeParts = course["Start"].split(":");
    // before 10 minutes of class for ex class at 8Am then reminder at 7:50

    const startHour = parseInt(startTimeParts[0]);
    const startMinute = parseInt(startTimeParts[1]);

    if (startHour === _startTime && startMinute === _startMinute) {
      return getReminderMessage(course, course["Start"]);
    }
  }
  return "no reminder Free time 🥳";
};
