const fs = require('fs');
const path = require('path');
const EXIST = 'EEXIST'; // code if the file already exist
const chalk = require('chalk');
/**
 * create file with the specific file name
 * @param {String} fileName
 */
function createFile(fileName) {
    fs.writeFile(getPath(fileName), '', createCallback(fileName));
}

/**
 * create directory with the specific Dir Name
 * @param {String} dirName
 */
function createDir(dirName) {
    fs.mkdir(getPath(dirName), createCallback(dirName));
}

/**
 *  get the absolute path for the specified name with the current process
 * @param {String} name
 * @returns {String}
 */
function getPath(name) {
    return path.join(process.cwd(), name);
}

/**
 * return a callback function that execute every time createFile or createDir Called
 * @param name
 * @returns {Function}
 */
function createCallback(name) {
    return err => {
        if (err) {
            if (err.code === EXIST) {
                console.log(chalk.red.bold(`${name} already exist`));
            }
            else {
                console.log(chalk.red.bold(`err ${err.message}`));

            }
            return;
        }


        console.log(chalk.green.bold(`${name} created`));
    };
}

module.exports = {
    createFile,
    createDir,
};
