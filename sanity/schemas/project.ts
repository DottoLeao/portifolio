import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição curta",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "problem",
      title: "O Problema",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "solution",
      title: "A Solução",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "results",
      title: "Resultados",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tech",
      title: "Tecnologias",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "image",
      title: "Screenshot do Projeto",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "github",
      title: "Link GitHub",
      type: "url",
    }),
    defineField({
      name: "live",
      title: "Link Demo / Site",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordem manual",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "description" },
  },
});
