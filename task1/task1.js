const { program } = require('commander');

program
  .version('0.0.1')
  .requiredOption('-a, --action', 'an action encode/decode')
  .requiredOption('-s, --shift', 'a shift')
  .option('-i, --input', 'an input file')
  .option('-o, --output', 'an output file');

program.parse(process.argv);
