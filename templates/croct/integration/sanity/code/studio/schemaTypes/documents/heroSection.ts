import { defineField, defineType } from "sanity"
import {ConfettiIcon} from "@sanity/icons"

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero section",
  type: "document",
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: "preHeading",
      title: "Pre-heading",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "command",
      title: "Command",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
})
