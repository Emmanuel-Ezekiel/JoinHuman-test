
// // Navigate to security credentials page
// window.location.href = "https://console.aws.amazon.com/iamv2/home?#/security_credentials";

// // Wait for the page to load
// window.addEventListener("load", function() {
  
//   // Click the "Create access key" button
//   var createKeyButton = document.querySelector(".console-inline-help a");
//   createKeyButton.click();
  
//   // Wait for the modal to appear
//   setTimeout(function() {
    
//     // Check the "I understand" checkbox
//     var checkbox = document.querySelector("#iam-modal-content input[type='checkbox']");
//     checkbox.checked = true;
    
//     // Click the "Create access key" button
//     var modalCreateButton = document.querySelector("#iam-modal-content button[type='submit']");
//     modalCreateButton.click();
    
//     // Wait for the keys to be generated
//     setTimeout(function() {
      
//       // Get the access key and secret access key values
//       var accessKey = document.querySelector(".ak-data .sensitive-data");
//       var secretAccessKey = document.querySelector(".sk-data .sensitive-data");
      
//       // Print the keys to the console
//       console.log("Access key:", accessKey.textContent.trim());
//       console.log("Secret access key:", secretAccessKey.textContent.trim());
      
//       // Close the modal
//       var closeButton = document.querySelector("#iam-modal-content button[type='button']");
//       closeButton.click();
      
//     }, 3000); // wait for 3 seconds for keys to be generated
    
//   }, 1000); // wait for 1 second for modal to appear
  
// });


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
