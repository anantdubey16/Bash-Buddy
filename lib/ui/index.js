const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

const FILE_PATH = './data.json'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

const makeCommit = n => {

    if(n === 0) return simpleGit().push();

    const x = getRandomInt(0, 54);
    const y = getRandomInt(0, 6);
    const DATE = moment().subtract(1, 'y').add(1,'d').add(x,'w').add(y,'d').format()
    
    //data that has to be written
    const data = {
        date: DATE
    }

    console.log(DATE);
    
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        //adding file and commmiting with commit message 
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, makeCommit.bind(this, --n))
    })
}
makeCommit(40);