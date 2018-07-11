var mike = { name: 'Michael', city: 'Moscow', occupation: 'JavaScript'};
Object.keys(mike).forEach(function(key, index){
  console.log('key', key);
  console.log('value', mike[key]);
});
