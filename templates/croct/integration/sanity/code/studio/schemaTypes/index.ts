import {person} from '?/./documents/person.{js,jsx,ts,tsx}'
import {page} from '?/./documents/page.{js,jsx,ts,tsx}'
import {post} from '?/./documents/post.{js,jsx,ts,tsx}'
import {callToAction} from '?/./objects/callToAction.{js,jsx,ts,tsx}'
import {infoSection} from '?/./objects/infoSection.{js,jsx,ts,tsx}'
import {settings} from '?/./singletons/settings.{js,jsx,ts,tsx}'
import {link} from '?/./objects/link.{js,jsx,ts,tsx}'
import {blockContent} from '?/./objects/blockContent.{js,jsx,ts,tsx}'
import {heroSection} from '?/./documents/heroSection.{js,jsx,ts,tsx}'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  heroSection,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
