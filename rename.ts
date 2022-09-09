/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
const { renameSync } = require('fs')
const glob = require('glob')
const { join } = require('path')

function rename(packagePath: string, find: string, replace: string) {
  const globpath = join(process.cwd(), packagePath, '**', '*.ts')    
  const files = glob.sync(globpath)  
  files.map((filepath00: any) => {
    const filename0 = filepath00.split('/').pop()
    const filepath0 = filepath00.split('/').slice(0,-1).join('/')

    if (!filename0 || filename0 === 'index.ts') {        
      return
    }

    if (filename0.includes(find)) {
     const filename1 = filename0.replace(find, replace)
     const filepath1 = join(filepath0, filename1)
     renameSync(filepath00, filepath1)
    }
    return
  })
}

const package = process.argv[2]
const find = process.argv[3]
const replace = process.argv[4]


const packagesList = ['core', 'database', 'functions', 'io', 'models', 'types']

if(!packagesList.includes(package)) {
  const message = `[flows]: Error. Not a valid package in argv[2]. Received: "${package}".`
  throw new Error(message)
}

if(!find || !(typeof find === 'string')) {
    const message = `[flows]: Error. Not a valid find string in argv[3]. Received: "${find}".`
    throw new Error(message)
}

if(!replace || !(typeof replace === 'string')) {
    const message = `[flows]: Error. Not a valid replace string in argv[4]. Received: "${replace}".`
    throw new Error(message)
}

const packageSrc = join(`flows-${package}`, 'src/')
const packagePath =  join('packages', packageSrc)

rename(packagePath, find, replace)
