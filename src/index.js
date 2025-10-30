import { AutoRouter } from 'itty-router' // ~1kB

const router = AutoRouter()

router
  .get('/hello/:name', ({ name }) => `Hello, ${name}!`)

export default {
	...router,
};

  
