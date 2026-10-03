import { AUTHOR, SITE, SOCIAL } from "../config";

export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  tags: string[];
}

export interface JsonLdOptions {
  siteUrl?: string;
  canonicalUrl: string;
  title: string;
  description: string;
  image: string;
  article?: ArticleMeta;
  pageType?: "website" | "profile" | "article";
}

/**
 * Builds the Person entity for the developer (Donal Muolhoi)
 * with disambiguation, alternate names, and technical capabilities.
 */
export function getDeveloperSchema() {
  return {
    "@type": "Person",
    "@id": "https://thingpuisen.pages.dev/#developer",
    name: "Donal Muolhoi",
    alternateName: [
      "D Muolhoi",
      "Donal Hmar",
      "Donald Hmar",
      "Donald Muolhoi",
      "Muolhoi",
    ],
    url: "https://thingpuisen.pages.dev",
    mainEntityOfPage: "https://thingpuisen.pages.dev",
    jobTitle: "Software Engineer & Web Developer",
    disambiguatingDescription:
      "Software engineer and web developer, creator of thingpuisen.pages.dev",
    sameAs: ["https://thingpuisen.pages.dev"],
    knowsAbout: [
      "Web Development",
      "Front-End Engineering",
      "Full-Stack Web Development",
      "Astro Framework",
      "Software Architecture",
      "Content Management Systems",
      "SEO & Structured Data",
    ],
  };
}

/**
 * Builds the Person entity for the author (Hosea Khawbung)
 */
export function getAuthorSchema(siteUrl: string = SITE.url) {
  const sameAs = Array.from(
    new Set([AUTHOR.url, ...SOCIAL.map((s) => s.href)].filter(Boolean))
  );

  return {
    "@type": "Person",
    "@id": `${siteUrl}/#author`,
    name: AUTHOR.name,
    url: AUTHOR.url,
    description: AUTHOR.bio,
    sameAs,
    jobTitle: "Poet & Writer",
    knowsAbout: [
      "Poetry",
      "Hmar Literature",
      "English Literature",
      "Creative Writing",
      "Bilingual Poetry",
    ],
  };
}

/**
 * Builds the WebSite entity with creator, producer, and maintainer attribution
 */
export function getWebSiteSchema(siteUrl: string = SITE.url) {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: SITE.title,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: {
      "@id": `${siteUrl}/#author`,
    },
    creator: {
      "@id": "https://thingpuisen.pages.dev/#developer",
    },
    producer: {
      "@id": "https://thingpuisen.pages.dev/#developer",
    },
    maintainer: {
      "@id": "https://thingpuisen.pages.dev/#developer",
    },
  };
}

/**
 * Builds the BlogPosting entity for article pages
 */
export function getBlogPostingSchema(options: {
  siteUrl: string;
  canonicalUrl: string;
  title: string;
  description: string;
  image: string;
  article: ArticleMeta;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${options.canonicalUrl}#article`,
    isPartOf: {
      "@id": `${options.siteUrl}/#website`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": options.canonicalUrl,
    },
    headline: options.title,
    description: options.description,
    url: options.canonicalUrl,
    image: options.image,
    datePublished: options.article.publishedTime,
    dateModified: options.article.modifiedTime ?? options.article.publishedTime,
    keywords: options.article.tags.join(", "),
    inLanguage: SITE.lang,
    author: {
      "@id": `${options.siteUrl}/#author`,
    },
    publisher: {
      "@id": `${options.siteUrl}/#author`,
    },
  };
}

/**
 * Generates the complete JSON-LD Schema.org graph object
 */
export function generateJsonLdGraph(
  options: JsonLdOptions
): Record<string, any> {
  const siteUrl = options.siteUrl ?? SITE.url;
  const graph: Record<string, any>[] = [
    getWebSiteSchema(siteUrl),
    getAuthorSchema(siteUrl),
    getDeveloperSchema(),
  ];

  if (options.article) {
    graph.push(
      getBlogPostingSchema({
        siteUrl,
        canonicalUrl: options.canonicalUrl,
        title: options.title,
        description: options.description,
        image: options.image,
        article: options.article,
      })
    );
  } else if (
    options.pageType === "profile" ||
    options.canonicalUrl.endsWith("/about") ||
    options.canonicalUrl.endsWith("/about/")
  ) {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${options.canonicalUrl}#webpage`,
      url: options.canonicalUrl,
      name: `About — ${SITE.title}`,
      description: AUTHOR.bio,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#author`,
      },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
