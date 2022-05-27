import axios from 'axios';
import { createHmac } from 'crypto';
import { getTimestamp } from './getTimestamp';

export const getInvoices = (
  ApiId: string,
  ApiKey: string,
  periodStart: string,
  periodEnd: string
) => {
  const reqJson = {
    periodStart,
    periodEnd,
  };

  const timestamp = getTimestamp();
  const dataString = ApiId + timestamp + JSON.stringify(reqJson);
  const signature = createHmac('sha256', ApiKey)
    .update(dataString)
    .digest('base64');

  var url =
    'https://aktiva.merit.ee/api/v1/getinvoices' +
    '?ApiId=' +
    ApiId +
    '&timestamp=' +
    timestamp +
    '&signature=' +
    signature;

  (async () => {
    try {
      let response = await axios({
        url: url,
        method: 'POST',
        json: true,
        headers: { 'content-type': 'application/json' },
        data: reqJson,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  })();
};
