import cookie from 'cookie';
import { IncomingMessage } from 'http';

export function parseCookies(req?: IncomingMessage, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options,
  );
}

const MAX_AGE = 30 * 24 * 60 * 60; // 30 days
interface Props {
  name: string;
  value: string;
  maxAge?: number;
}
export function serializeCookie({ name, value, maxAge = MAX_AGE }: Props) {
  document.cookie = cookie.serialize(name, value, {
    maxAge,
  });
}
