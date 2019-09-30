import YAML from 'yaml'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    Vue.prototype.$getPage = (parent, page) => {
      console.log('Getting new Page:', page)
      Vue.axios.get(`/content/${page}.md`).then(res => {
        const docs = YAML.parseAllDocuments(res.data)
        const header = docs[0].toJSON() || {}
        const body = docs[1].toString() && docs[1].toString().replace('---', '')
        parent.$emit('updateAppData', { page: { header: header, body: body } })
      })
    }
  }
}
