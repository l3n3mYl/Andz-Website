/* eslint-disable import/no-anonymous-default-export */
import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'
import resolveProductionUrl from './resolveProductionUrl'

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title('Preview'),
  ])
}

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
            .views([
              S.view.form(),
              S.view
                .component(Iframe)
                .options({
                  url: (doc) => resolveProductionUrl(doc),
                })
                .title('Preview'),
          ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(item => !['author'].includes(item.getId()))
    ])