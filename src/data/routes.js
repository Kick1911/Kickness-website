import pages from '../data/pages'

let routes = {}

for (const i in pages) {
  routes[pages[i].path] = i
}

export default routes
