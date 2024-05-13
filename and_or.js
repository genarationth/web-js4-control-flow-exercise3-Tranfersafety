const dayNumber = 90;
if (dayNumber === 0 || dayNumber === 6) {
  console.log("It is the weekend!");
} else if (dayNumber > 0 && dayNumber < 6) {
  console.log("It is the weekday!");
} else {
  console.log("Invalid day number");
}
