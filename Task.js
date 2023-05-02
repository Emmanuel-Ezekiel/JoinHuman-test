
// export const IAM_URL = 'https://console.aws.amazon.com/iamv2/home?#/security_credentials';

// // Open the IAM dashboard
// window?.open(IAM_URL);

// // Wait for the dashboard to load
// window?.addEventListener('load', () => {
//   // Click on the account name
//   const accountName = document.querySelector('.awsc-switched-role-info');
//   accountName?.click();

//   // Select "Security credentials" from the dropdown menu
//   const securityCredentials = document.querySelector('.awsc-switched-role-menu .nav-item:nth-child(3) a');
//   securityCredentials?.click();

//   // Scroll down to the "Access keys" section
//   const accessKeys = document.querySelector('#heading_access_keys');
//   accessKeys?.scrollIntoView();
// });

// // Find the "Create access key" button and click it
// const createAccessKeyBtn = document.querySelector('#access-keys-create-button');
// createAccessKeyBtn?.click();

// // Wait for the modal window to appear
// const modalWindow = document.querySelector('.modal-dialog');
// modalWindow?.addEventListener('load', () => {
//   // Find the checkbox for confirming root access key creation
//   const confirmCheckbox = document.querySelector('#iam-create-root-key-confirm');
//   confirmCheckbox?.click();

//   // Click the "Create access key" button
//   const confirmBtn = document.querySelector('#access-keys-create-confirm-button');
//   confirmBtn?.click();

//   // Wait for the new access key to be created
//   const accessKeyTable = document.querySelector('#access-keys-table');
//   accessKeyTable?.addEventListener('load', () => {
//     // Retrieve the "Access key" and "Secret access key"
//     const accessKey = document.querySelector('#access-keys-access-key-id').textContent;
//     const secretKey = document.querySelector('#access-keys-secret-access-key').textContent;
    
//     // Do something with the access key and secret key
//     console.log(`Access key: ${accessKey}`);
//     console.log(`Secret access key: ${secretKey}`);
//   });
// });

//The URL https://console.aws.amazon.com/iamv2/home?#/security_credentials is the AWS IAM dashboard page for managing security credentials. 

const https = require('https');
// To create an access key and secret key using HTTP requests, you can send a POST request to the AWS IAM API endpoint https://iam.amazonaws.com/ with the Action parameter set to CreateAccessKey.
// Set up HTTP request options
const options = {
  hostname: 'iam.amazonaws.com',
  path: '/?Action=CreateAccessKey&Version=2010-05-08',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};



// Set up HTTP request body
const body = 'AWSAccessKeyId=YOUR_ACCESS_KEY_ID&Action=CreateAccessKey&UserName=YOUR_USERNAME&Version=2010-05-08&Signature=SIGNATURE';

// Set up HTTP request
const req = https.request(options, res => {
  let data = '';

  // Concatenate response data
  res.on('data', chunk => {
    data += chunk;
  });

  // Log access key and secret access key to console
  res.on('end', () => {
    const accessKey = data.match(/<AccessKeyId>(.*?)<\/AccessKeyId>/)[1];
    const secretKey = data.match(/<SecretAccessKey>(.*?)<\/SecretAccessKey>/)[1];
    console.log(`Access key: ${accessKey}`);
    console.log(`Secret access key: ${secretKey}`);
  });
});

// Send HTTP request body
req.write(body);

// End HTTP request
req.end();
