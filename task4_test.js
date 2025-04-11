const assert = require('assert');

Feature('Obituary @rest status check @janus');

Scenario('Check an error URL returns 404', async ({ I }) => {
  const response = await I.sendGetRequest('/us/obituaries/error-url');
  assert.strictEqual(response.status, 404);
});

const statusTable = [
  { url: '/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary', expectedStatus: 404 },
  { url: '/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379', expectedStatus: 200 }
];

Data(statusTable).Scenario('Check status code for @url', async ({ I, current }) => {
  const response = await I.sendGetRequest(current.url);
  I.say(`Checking status of ${current.url}`);
  assert.strictEqual(response.status, current.expectedStatus);
});
