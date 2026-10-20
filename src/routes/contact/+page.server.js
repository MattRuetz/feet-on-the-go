import { env } from "$env/dynamic/private";

// Web3Forms rejects submissions sent from a server unless you pay for Pro, so
// the browser posts to it directly. The access keys are public by design.
export function load() {
  return {
    web3formsKey: env.WEB3FORMS_KEY,
    web3formsCopyKey: env.WEB3FORMS_COPY_KEY,
  };
}
