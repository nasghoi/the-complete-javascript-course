const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log('start code')

const sleepStatus = sleep(2000)

console.log(sleepStatus)

console.log('Finished code')