import pages from '../data/pages'

let routes = {}

for(const x of pages){
    routes[x.path] = x.component
}

export default routes