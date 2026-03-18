import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    problem,
    solution,
    results,
    tech,
    image,
    github,
    live,
    featured,
    order
  }
`;

export const labContentQuery = groq`
  *[_type == "labContent"] | order(order asc) {
    _id,
    title,
    description,
    type,
    thumbnail,
    link,
    views,
    date,
    order
  }
`;
