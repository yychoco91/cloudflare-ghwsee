/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const html = `<html>
		<head>
			<title>GitHub Wiki SEE</title>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</head>
		<body>
		<h1>GitHub Wiki SEE</h1>
		<p> 400,000+ GitHub Wikis, now indexable by your favorite search engine.</p>
		<p><i>GitHub Wiki Search Engine Enablement</i> (GHWSEE) allows non-indexed GitHub Wikis to be indexed by search engines. The robots.txt and HTTP headers on this site do not prevent indexing of wiki content and GitHub Wiki content proxied from GitHub and served from this service can be crawled and indexed by major search engines.</p>
		<p>
		The situation so far:
			<ul>
				<li>GitHub prevents indexing of repository wiki content through HTTP headers. The blocking greatly reduces the effectiveness of content of pages on affected Wikis if they cannot be searched on search engines such as Google or DuckDuckGo.</li>
				<li>GitHub has officially documented that they only index certain GitHub Wikis. According to GitHub's documentation, "Search engines will only index wikis with 500 or more stars that you configure to prevent public editing." This provides clarity on the exact criteria being used, which was previously unclear.</li>
				<li>About 3,300 GitHub.com Wikis met an older criteria requiring ~1000+ and can be found on search engines such as Google / DuckDuckGo according to a survey in February 2022.</li>
				<li>About 4,700 repositories have 798 stars and above and can't be directly indexed by search engines from the same survey with the older criteria in February 2022. These repositories do not appear to have the "Editing Restricted to Repository Collaborators" option turned on. You would likely recognize some of these repositories no matter where your expertise may lie. Many of these projects have large amounts of content in their Wikis and are very active.</li>
				<li>There are still about 400,000+ GitHub.com Wikis that are below 500 stars and/or publically editable. These can't be directly indexed by search engines as well.</li>
				<li>GHWSEE is helping GitHub Wikis that aren't indexable be indexable in search engines and is continually decommissioning itself for GitHub Wikis that are directly indexable.</li>
			</ul>
		</p>
		<p>GHWSEE proxies the rendered contents of the pages and has a link with a large button at the top to visit the page on GitHub for everyday usage and a link at the bottom explaining what GHWSEE is. The content of this service is not meant to be read directly by users and is intended for crawlers. GHWSEE is designed to behave like those StackOverflow content mirroring sites that rank high with "stolen" content from StackOverflow but with far less ad-farming. Unlike its inspiration, GHWSEE has no ads and tries to make it obvious, quick, and easy for users to get to the content they want directly on GitHub.com short of an automatic redirect that may make search engines not crawl or index the content.</p>
		<p>Another purpose of GHWSEE is to bring awareness to the issue of GitHub Wikis purposefully not being indexed since 2012. Many are caught off-guard and have produced massive libraries of information that they are unaware of being generally invisible to the internet. Likewise, many searching for information in these libraries are not aware that the information is invisible to them if it was in a GitHub Wiki. Up until April 2021 (9 years since 2012), GitHub did not document this limitation; the only way you knew was by previously looking at robots.txt. A warning is still not present in GitHub's UI itself about this limitation. By showing up in real-world search results, it is hoped that greater awareness to this issue can be made amongst affected communities and projects.</p>
		<p>If you are a GitHub Wiki maintainer, you may want to consider GitHub Pages backed by a public repository for your community's content as a more crawlable, stable, blessed, and probably higher search ranking alternative. This alternative is also mentioned in GitHub Docs about GitHub Wikis. Consider adding an "Edit on GitHub" link to the content on GitHub Pages to have an experience closer to wikis, easily permit editing, and to encourage contributions. This is the official solution which can be burdensome and you are welcome to continue using GHWSEE.</p>

			<ul>
				<li>A great example of an organization taking the moving to GitHub Pages route would be the libGDX cross-platform Java game development framework project. The project has migrated their Wiki to their website. The pages are very faithful to the original GitHub Wiki page design including the aforementioned "Edit on GitHub" link. You can see the Jekyll/GitHub Pages implementation backing this in their repository. There is also a pull request on that repository that can be used as a reference as well.</li>
				<li>It is also possible to target a "Editing Restricted to Repository Collaborators" GitHub Wiki itself as well from the GitHub repository and deploy to it with GitHub Actions and have it be indexed if the repo has a high star count (500+). These Wikis are likely to be whitelisted by GitHub for direct indexing (please test first). An example of this can be seen on the Go for VSCode repository.</li>
				<li>Some organizations or projects such as ShellCheck mirror their content themselves and choose to keep their Wikis editable. NOTE: GHWSEE cannot automatically disengage itself for wikis backed by this setup as it is technically impossible to automatically detect. Please create an issue if your project or any other project still permits editing but mirrors their content themselves and a blacklist entry can be added.</li>
				<li>If you or your organization does any of this, please reach out to me to try to expedite search engines to remove GHWSEE's entries from search engine results for the migrated wiki. Please also make sure to produce the necessary sitemaps and monitor your own wiki's content indexing progress and ranking via tools such as Google Search Console or Bing Webmaster Tools (Bing is also a DuckDuckGo source).</li>
			</ul>

		<p>If you are interested in providing feedback to GitHub or seeing what GitHub staff has said about their blocking of Wiki content from appearing in search engines, participate in the discussion here: https://github.com/github/feedback/discussions/4992. Let us hope that GitHub can find a solution to unblock GitHub Wiki content in harmony with their SEO concerns, and GHWSEE can be decommissioned. Already, Wikis that are known to be directly indexable are skipped by GHWSEE as part of the partial decommissioning.</p>
		<p> For anti-abuse reasons, all links rendered in the service that are going out of GitHub are tagged with rel="nofollow ugc" as to not affect search engine rankings or to promote mass vandalism of GitHub Wikis. This is in addition to rel="nofollow" in the original content.</p>
		
		<h1>Usage</h1>

		<p>
		<ul>
			<li> Wiki Reader: Use your favorite search engine! Every query you run searches a corpus that has GHWSEE in it. That is the intended interface to the content "on" this service and to get a link to the original GitHub content. Do not read or use the content on this site as it may have rendered with errors and is only meant for robots. Go directly to the original page on GitHub with the link or button.  </li>
				<ul style="list-style-type:circle;">
				<li>Scripters/Extension Authors/Power Users: If you would like to automatically redirect to the GitHub Wiki page on GitHub.com when landing on a GHWSEE page, please see this document for an API and/or examples: https://github.com/nelsonjchen/github-wiki-see-rs/blob/master/AUTO_REDIRECT_API.md</li>
				</ul>
			</li>
				<li> Wiki Editor whose Wiki does not meet the native indexing criterias: If you are a GitHub Wiki contributor, simply edit your content periodically and the sitemap generator will eventually pick it up and notify search engines. Because this just isn't GitHub.com, don't expect a high ranking as your content will probably be on page 2, 3, or worse. That is still much better than the previous alternative of not being in the search results at all! Note that it may take quite some time and luck for content to be picked up or detected by search engine crawlers and there is no guarantee it will be picked up or detected. </li>
				<ul style="list-style-type:circle;">
				<li>If you would like to greatly increase the chances and ranking of your GitHub Wiki content being indexed, consider adding a link to your content on GHWSEE to a location where search engines can index. For an example of this in action, see how the MiSTer historical computing and gaming recreation project linked a "crawlable wiki" that GHWSEE serves in their README on GitHub which can be indexed. While the link is "nofollow" on the README as displayed on GitHub, that attribute is of a guideline than a hard rule nowadays for search engines anyway. Repositories can confer their own ranking power onto their proxied and indexable Wiki content on GHWSEE.</li>
				</ul>
			</li>
		</ul>

		<h1>Examples</h1>
		<p>These are just examples and testing wikis.</p>
		<ul>
			<li><a href="https://github-wiki-see.page/m/nelsonjchen/github-wiki-test/wiki">nelsonjchen/github-wiki-test</a> - Test</li>
			<li><a href="https://github-wiki-see.page/m/commaai/openpilot/wiki">commaai/openpilot</a> - Poster Child (popular, editable wiki).</li>
			<li><a href="https://github-wiki-see.page/m/Erithano/Timon-Your-FAQ-bot-for-Microsoft-Teams/wiki">Erithano/Timon-Your-FAQ-bot-for-Microsoft-Teams</a>
            - Irony </li>
			<li><a href="https://github-wiki-see.page/m/wlsdn2316/1-tetris-/wiki">wlsdn2316/1-tetris-</a> - Funky </li>
			<li><a href="https://github-wiki-see.page/m/pyenv/pyenv/wiki">pyenv/pyenv</a> - They don't know. How long till they find out? </li>
			<li><a href="https://github-wiki-see.page/m/themactep/thingino-firmware/wiki">themactep/thingino-firmware</a> - Thingino firmware for IP cameras</li>		
		</ul>  
		</p>

		<h2>Project, README, Source, Issues, and other information</h2>
		
		<p> So far, about $300 have been spent on experiments, queries, and so on with this service during its initial
        ramp-up. The good news is that the cost to currently host the service is very low. In lieu of any compensation,
        please consider donating money recurringly or one-time to the <a href="https://archive.org">Internet Archive</a>
        and/or your time to <a href="https://archiveteam.org">Archive Team</a> projects.
		
		
		</p>


		</body>


		</html>`;

		return new Response(html, {
			headers: { 'Content-Type': 'text/html;charset=UTF-8' },
		});
	},
};
