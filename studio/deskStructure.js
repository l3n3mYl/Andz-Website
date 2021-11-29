/* eslint-disable import/no-anonymous-default-export */
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Contents')
    .items([
      S.listItem()
        .title('Author')
        .child(
          S.document()
            .schemaType('author')
            .documentId('author')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(item => !['author'].includes(item.getId()))
    ])