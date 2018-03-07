# vue-ssr-typescript

vue-ssr-typescript built with Vue 2.0 + vue-router + vuex + typescript with server-side rendering, base on [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)


## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Real-time List Updates with FLIP Animation
- Typescript


## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## Run on Heroku

To upload to heroku run following commands.

Provided you are registered free account and 
installed heroku-cli and logged in using `heroku login`
```
heroku create
heroku git:remote --app %APP_NAME (from create output)%
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku
```

## License

MIT
