export default function getLinkText(url: string, name: string): string {
  // Returns url if length of url is less than 30 characters, and the name of the
  // restaurant otherwise. To be used as text for the link on the RestaurantDetails view.
  if (url.length < 30) {
    return url
  }
  return name
}
