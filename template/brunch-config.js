const prod = process.env.NODE_ENV ? process.env.NODE_ENV=='production' : false
const minJsCss = prod ? '.min' : ''
const vuetifySrc = prod ? 'js' : 'dist'

module.exports = {
  conventions: {
    ignored: ['vuetify','vue'] // Files that are not in `app` dir.
  },
  npm: {
    enabled: true,
    globals : {
      // Vuetify :'vuetify',
      // vuetify :'vuetify',
      // Vue :'vue'
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
        }
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    stylus: {
        modules: true
    },
    pug: {
      locals: { MIN: minJsCss , VUETIFY_SRC: vuetifySrc},
      preCompile: true
    },    
    babel: {
      presets: [
        ['env'],
        ['stage-2']
      ],
      comments: false
    },
    vue: {
      extractCSS: true,
      out: 'public/css/components.css'
    },
    copyfilemon:{
      'css':['node_modules/vuetify/dist/vuetify'+minJsCss+'.css'],
      'js':['node_modules/vuetify/dist/vuetify'+minJsCss+'.js', 'node_modules/vue/dist/vue.runtime'+minJsCss+'.js'],
    },
    uglify: {
      mangle: true,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }    
  }
}
