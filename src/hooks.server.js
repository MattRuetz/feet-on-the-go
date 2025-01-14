import { redirect } from "@sveltejs/kit";

const redirects = {
  "/contact_information.php": "/contact",
  "/services.php": "/services",
  "/nursing_foot_care.php": "/nursing-foot-care",
};

export function handle({ event, resolve }) {
  if (redirects[event.url.pathname]) {
    throw redirect(301, redirects[event.url.pathname]);
  }
  return resolve(event);
}
