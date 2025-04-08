import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Card from "../src/components/BlogSummary.astro";

test("Card", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {
    props: {
      post: {
        id: "the-collab-lab-week-5-6",
        data: {
          author: "Viviana Yanez",
          description:
            "Those past weeks have been a bit busy on my side, so I am summarizing both in this new blog entry.\n" +
            "✨ Our shopping list app's functionality is now almost completed, and we are really close to starting work on the UI styling.",
          link: "https://dev.to/vivitt/participating-in-the-collab-lab-week-5-6-4ngc",
          pubDate: "2024-03-22T00:00:00.000Z",
          tags: ["theCollabLab"],
          title: "Participating in The Collab Lab: Week #5 & #6",
        },
        collection: "blog",
      },
    },
  });

  expect(result).toContain('Participating in The Collab Lab');

  expect(result).toContain('Those past weeks have been a bit busy on my side, so I am summarizing both in this new blog entry.\n✨ Our shopping list app&#39;s functionality is now almost completed, and we are really close to starting work on the UI styling.');

  expect(result).toContain('March 22, 2024');

});
