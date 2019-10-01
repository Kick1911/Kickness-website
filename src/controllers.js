import YAML from 'yaml'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    Vue.prototype.$getPage = (parent, page) => {
      console.log('Getting new Page:', page)
      Vue.axios.get(`/content/${page}.md`).then(res => {
        const index = res.data.indexOf('\n---')
        const header = res.data.substring(0, index)
        const body = res.data.substring(index).replace('---', '')
        const doc = YAML.parseDocument(header)

        parent.$emit('updateAppData', { page: { header: doc.toJSON(), body: body } })
      })
    }
  }
}
