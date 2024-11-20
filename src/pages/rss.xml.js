import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Viviana Yanez | Creative Web Developer and Tech Writer",
    description:
      "I am Vivi a visual and audiovisual communicator who transitioned to software development. I love the web platform and care about making it more accessible and inclusive.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
