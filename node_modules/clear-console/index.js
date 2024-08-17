module.exports = function (options) {
  process.stdout.write('\u001b[2J')
  process.stdout.write('\u001b[1;1H')
  if (options && options.toStart) process.stdout.write('\u001b[3J')
}
