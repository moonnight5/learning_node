const Koa = require('koa');
// 支持哪些 模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path')
const app = new Koa();

const user = {
    name: '',
    posts: [
        {
            id: 0,
            title: '小程序指南'
        }, {
            id: 1,
            title: 'vue.js'
        }
    ]
}
const postsDetail = [
    {
        id: 0,
        content: '这是一篇小程序踩坑指南的文章'
    }, {
        id: 1,
        content: 'react 表示不服'
    }
]

app.use(
    views(path.join(__dirname, './views'), {
        extension: 'ejs'
    })
)
// /user 个人主页面
// /posts 文章详情
app.use(async (ctx) => {
    // 区分 页面
    console.log(ctx.path);
    if (ctx.path === '/user') {
        await ctx.render('user', { user })
    } else if (ctx.path === '/posts') {
        const { id } = ctx.query;
        const post = postsDetail.find(postItem => postItem.id == id)
        await ctx.render('post', { post })
    } else {
        ctx.body = `无法处理该请求`;
    }
})

app.listen(8080, () => {
    console.log('server is running 8080');
})
