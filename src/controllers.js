import YAML from 'yaml'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    Vue.prototype.$getPage = (parent, page) => {
      console.log('Getting new Page:', page)
      Vue.axios.get(`/${page}.yaml`).then(res => {
        const doc = YAML.parseDocument(res.data).toJSON()
        parent.$emit('updateAppData', { page: { title: doc.title[0], body: doc.body[0] } })
      })
    }
  }
}
