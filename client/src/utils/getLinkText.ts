export default function getLinkText(url: string, name: string): string {
  if (url.length < 30) {
    return url
  }
  return name
}
