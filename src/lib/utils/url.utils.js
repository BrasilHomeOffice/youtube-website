import { isDev } from "./env.utils"

const baseUrl = isDev()
  ? 'https://vlog.local.brasilhomeoffice.com'
  : 'https://brasilhomeoffice.com';

export function siteUrl(path = '/') {
  return baseUrl + path;
}
