const args = process.argv.slice(2);
const seconds = args.map(x => x * 1000);

const sound = function(seconds) {
  for (const beep of seconds) {
    if (beep > 0 && typeof beep === 'number') {
      setTimeout(() => process.stdout.write('\x07'), beep);
    }
  }
};

sound(seconds);