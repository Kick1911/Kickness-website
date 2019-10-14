const chokidar = require('chokidar'),
    fs = require('fs'),
    { exec } = require('child_process'),
    path = require('path'),
    prefix = 'public/content/',
    destination = 'src/assets/maps'

let map = {}

exec(`rm -f ${destination}/*`, (error, stdout, stderr) => {
    if (error)
        return console.error(`exec error: ${error}`)
    const watch = chokidar.watch('public/**/*.md')
    watch.on('add', p => {
        a = path.parse(p.replace(prefix, ''))
        if(!a.dir) return
        if(!map[a.dir])
            map[a.dir] = []
        map[a.dir].push(a.name)
    })
    watch.on('ready', () => {
        let fd
        for(const k in map){
            try{
                fd = fs.openSync(`${destination}/${k}.js`, 'w+')
                fs.writeFileSync(fd, `/* eslint-disable */ export default ${JSON.stringify(map[k])}`)
            } catch (err) {
                console.error(err)
            } finally {
                if (fd !== undefined)
                    fs.closeSync(fd)
            }
        }
        watch.close()
    })
})
