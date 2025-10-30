import { AutoRouter } from 'itty-router'

const router = AutoRouter()

router
  .get('/m/:owner/:repo/wiki', async ({ owner, repo }) => {
    const url = `https://github.com/${owner}/${repo}/wiki`
    const response = await fetch(url)
    const html = await response.text()
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  })

export default {
	...router,
};

  
