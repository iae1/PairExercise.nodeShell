process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  const pwd = require('./pwd.js')
  const ls = require('./ls.js')
  const cat = require('./cat.js')
  if (cmd === 'pwd') {
    pwd()
  } else if (cmd === 'ls') {
    process.stdout.write('directory files:\n' + ls)
  } else if (cmd.includes(' ')) {
    const cmdAndFile = cmd.split(' ')
    if (cmdAndFile[0] === 'cat') {
      process.stdout.write('File Contents:\n' + cat(cmdAndFile[1]))
    }
  } else {
    process.stdout.write('you typed: ' + cmd)
  }
  process.stdout.write('\nprompt > ')
})

