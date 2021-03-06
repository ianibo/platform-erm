module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    // showHomeLink: false
    // listInvisiblePerms: false
    // disableAuth: false
    // hasAllPerms: true
  },
  modules: {
    '@folio/agreements': {},
    '@folio/licenses': {},
    '@folio/orders': {},
    '@folio/plugin-find-agreement': {},
    '@folio/plugin-find-license': {},
    '@folio/plugin-find-user': {},
    '@folio/tags': {},
    '@folio/users': {},
    '@folio/vendors': {},
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  },
};
