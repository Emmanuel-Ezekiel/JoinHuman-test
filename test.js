const https = require('https');

describe('createAccessKey', () => {
  test('should return access key and secret access key', done => {
    const options = {
      hostname: 'iam.amazonaws.com',
      path: '/?Action=CreateAccessKey&Version=2010-05-08',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    
    const body = 'AWSAccessKeyId=YOUR_ACCESS_KEY_ID&Action=CreateAccessKey&UserName=YOUR_USERNAME&Version=2010-05-08&Signature=SIGNATURE';
    
    const req = https.request(options, res => {
      let data = '';
    
      res.on('data', chunk => {
        data += chunk;
      });
    
      res.on('end', () => {
        const accessKey = data.match(/<AccessKeyId>(.*?)<\/AccessKeyId>/)[1];
        const secretKey = data.match(/<SecretAccessKey>(.*?)<\/SecretAccessKey>/)[1];
        expect(accessKey).toBeDefined();
        expect(secretKey).toBeDefined();
        console.log(`Access key: ${accessKey}`);
        console.log(`Secret access key: ${secretKey}`);
        done();
      });
    });
    
    req.write(body);
    req.end();
  });
});
