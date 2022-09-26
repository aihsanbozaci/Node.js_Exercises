const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('koa-example', '/', (ctx) => {
    ctx.accepts('text/html')
    ctx.body = '<h1>Welcome to Index Page!</h1>'
})

router.get('koa-example', '/about', (ctx) => {
    ctx.accepts('text/html')
    ctx.body = '<h1>Welcome to About Page!</h1>'
})

router.get('koa-example', '/contact', (ctx) => {
    ctx.accepts('text/html')
    ctx.body = '<h1>Welcome to Contact Page!</h1>'
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);