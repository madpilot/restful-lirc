import { default as yargs } from 'yargs';

let argv = yargs
  .usage('Usage: $0 <command> [options]')

  .describe('config', 'Config file')
  .alias('config', 'c')

  .describe('port', 'Port to bind the API to')
  .default('port', 3000)
  .alias('port', 'p')

  .describe('lirc-config', 'Lirc config file to point at')
  .default('lirc-config', './settings/2wire.conf')
  .alias('lirc-config', 'l')

  .help('h')
  .alias('h', 'help')

  .argv;

export default argv;
