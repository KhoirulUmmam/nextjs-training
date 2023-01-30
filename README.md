Hello guys, i'am a beginner to [Learn Next.js](https://nextjs.org/learn)

~ PRE-RENDERING ~
* getSaticPaths & fallback:
- have an Error: getStaticPaths is required for dynamic SSG pages and is missing for '/posts/[postId]'
- when we use getStaticPaths, then the `fallback` key must be returned from getStaticPaths

# fallback:
- true
- false
- 'blocking'

# When getStaticPaths fallback is set to : true
1. the true value is most suitable if your app has a very large number of static pages that depend on data.
2. A large e-commerce site.
3. You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.
4. you may statically generate a small subset of products that are popular and use fallback: true for the rest.
5. when someone request a page that's not generated yet, the user will see the page with a loading indicator.
6. shortly after, getStaticProps the same page will get the statically pre-rendered page.
7. this ensures that users always have a fast experience while preserving fast builds and the benefits of static generation.