import { useEffect } from "react";

const SITE_URL = "https://www.premtechinc.com";
const DEFAULT_IMAGE = "/brand/prem-technology-logo.png";
const SITE_NAME = "Prem Technology Inc.";

function updateMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateLinkTag(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema = null,
}) {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title
      ? (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`)
      : "Prem Technology Inc. | Structural Engineering — Transmission, Temporary Works & Heavy Civil";
    document.title = formattedTitle;

    // 2. Canonical URL
    const canonicalUrl = canonical
      ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical.startsWith("/") ? "" : "/"}${canonical}`)
      : SITE_URL;
    updateLinkTag("canonical", canonicalUrl);

    // 3. Standard Meta Description & Keywords
    if (description) {
      updateMetaTag("name", "description", description);
    }
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // 4. OpenGraph Tags
    updateMetaTag("property", "og:title", formattedTitle);
    if (description) {
      updateMetaTag("property", "og:description", description);
    }
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:type", ogType);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:site_name", SITE_NAME);

    // 5. Twitter Card Tags
    updateMetaTag("name", "twitter:title", formattedTitle);
    if (description) {
      updateMetaTag("name", "twitter:description", description);
    }
    updateMetaTag("name", "twitter:image", ogImage);

    // 6. JSON-LD Page Structured Data
    const scriptId = "dynamic-page-schema";
    let scriptTag = document.getElementById(scriptId);

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Optional cleanup on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);

  return null;
}
