#!/usr/bin/env node
const program = require('commander');
const path = require('path') ;
const creators = require('./src');
program.version('0.1.0')
.option('-e, --extension [type]','create files with the specified extension')
.parse(process.argv);
program.args.forEach(arg=>{
    if(path.extname(arg) || arg.startsWith('.')) {
        creators.createFile(arg);
    }
    else {
        if(program.extension) {
            creators.createFile(`${arg}.${program.extension}`)
        }
        else {
            creators.createDir(arg);
        }
    }
})
