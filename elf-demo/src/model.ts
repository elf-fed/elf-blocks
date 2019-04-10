const BLOCK_NAME = 'BLOCK_NAME_CAMEL_CASE' || 'elf-demo'

export default {
  namespace: BLOCK_NAME,

  state: {
    routes: [
      {
        path: `/${BLOCK_NAME}`,
        title: 'elf-demo: 首页',
        component: './pages/page-index',
      },
      {
        path: `/${BLOCK_NAME}/content`,
        title: 'elf-demo: 内容页',
        component: './pages/page-content',
        // Routes: [
        //   './routes/PrivateRoute.js',
        // ],
      },
    ],
  },
}
