var wpi = require('wiring-pi');
wpi.setup();
// GPIO pin of the button
var configPin = 7;


wpi.pinMode(configPin, wpi.modes.INPUT);

// wpi.pullUpDnControl(configPin, wpi.PUD_UP);
// wpi.wiringPiISR(configPin, wpi.INT_EDGE_BOTH, function() {
//   if (wpi.digitalRead(configPin)) {
//     if (false === started) {
//       started = true;
//       clock = setTimeout(handleButton, 3000);
//     }
//   }
//   else {
//     started = false;
//     clearTimeout(clock);
//   }
// });
//
// function handleButton() {
//   if (wpi.digitalRead(configPin)) {
//     console.log('OK');
//   }
// }
