
export const IAM_URL = 'https://console.aws.amazon.com/iamv2/home?#/security_credentials';

// Open the IAM dashboard
window?.open(IAM_URL);

// Wait for the dashboard to load
window?.addEventListener('load', () => {
  // Click on the account name
  const accountName = document.querySelector('.awsc-switched-role-info');
  accountName?.click();

  // Select "Security credentials" from the dropdown menu
  const securityCredentials = document.querySelector('.awsc-switched-role-menu .nav-item:nth-child(3) a');
  securityCredentials?.click();

  // Scroll down to the "Access keys" section
  const accessKeys = document.querySelector('#heading_access_keys');
  accessKeys?.scrollIntoView();
});

// Find the "Create access key" button and click it
const createAccessKeyBtn = document.querySelector('#access-keys-create-button');
createAccessKeyBtn?.click();

// Wait for the modal window to appear
const modalWindow = document.querySelector('.modal-dialog');
modalWindow?.addEventListener('load', () => {
  // Find the checkbox for confirming root access key creation
  const confirmCheckbox = document.querySelector('#iam-create-root-key-confirm');
  confirmCheckbox?.click();

  // Click the "Create access key" button
  const confirmBtn = document.querySelector('#access-keys-create-confirm-button');
  confirmBtn?.click();

  // Wait for the new access key to be created
  const accessKeyTable = document.querySelector('#access-keys-table');
  accessKeyTable?.addEventListener('load', () => {
    // Retrieve the "Access key" and "Secret access key"
    const accessKey = document.querySelector('#access-keys-access-key-id').textContent;
    const secretKey = document.querySelector('#access-keys-secret-access-key').textContent;
    
    // Do something with the access key and secret key
    console.log(`Access key: ${accessKey}`);
    console.log(`Secret access key: ${secretKey}`);
  });
});
