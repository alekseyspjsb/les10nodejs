var time = 170;

if (time > 0 && time <= 6) {
  console.log('night', time);
} 
else if (time > 6 && time <= 10) {
  console.log('morning', time);
}
else if (time > 10 && time <= 18) {
  console.log('day time', time);
}
else if (time > 18 && time <= 24) {
  console.log('evening time', time);
}
else {
  console.log('WTF time ???');
}
