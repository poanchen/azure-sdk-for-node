// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"subscriptionId\":\"3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"displayName\":\"AzSdkCore1\",\"state\":\"Enabled\",\"subscriptionPolicies\":{\"locationPlacementId\":\"Public_2014-09-01\",\"quotaId\":\"PayAsYouGo_2014-09-01\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '00559dba-5a70-4ab8-a739-d67c249700ec',
  'x-ms-correlation-request-id': '00559dba-5a70-4ab8-a739-d67c249700ec',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:00559dba-5a70-4ab8-a739-d67c249700ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:10 GMT',
  connection: 'close',
  'content-length': '262' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"subscriptionId\":\"3ca49042-782a-4cc9-89b5-ee1b487fe115\",\"displayName\":\"AzSdkCore1\",\"state\":\"Enabled\",\"subscriptionPolicies\":{\"locationPlacementId\":\"Public_2014-09-01\",\"quotaId\":\"PayAsYouGo_2014-09-01\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '00559dba-5a70-4ab8-a739-d67c249700ec',
  'x-ms-correlation-request-id': '00559dba-5a70-4ab8-a739-d67c249700ec',
  'x-ms-routing-request-id': 'WESTUS:20151027T002411Z:00559dba-5a70-4ab8-a739-d67c249700ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:10 GMT',
  connection: 'close',
  'content-length': '262' });
 return result; }]];