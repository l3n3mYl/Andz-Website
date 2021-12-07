// export default function resolveProductionUrl(document) {
//   return `https://andz-jpg.vercel.app/apie`
// }

// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = 'yourSecret'

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://andz-jpg.vercel.app/`
const localUrl = `http://localhost:3000/`

export default function resolveProductionUrl(doc) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

  const previewUrl = new URL(baseUrl)

  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`, doc._type === 'project' ? `galerija/${doc.slug.current}` : doc._type === 'services' ? 'paslaugos' : doc._type === 'author' ? 'apie' : '/')

  return doc._type === 'slides' ? null : previewUrl.toString()
}