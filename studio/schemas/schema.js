import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import project from './project'
import author from './author'
import services from './services'
import slides from './slides'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    slides,
    project,
    services,
    author,
    blockContent,
  ])
})
