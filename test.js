import { IAM_URL } from "./Task"

describe('Task.js', () => {
    test('should create access keys', async () => {
      // Open IAM dashboard
      window.open(IAM_URL);
  
      // Wait for dashboard to load
      await new Promise((resolve) => {
        window.addEventListener('load', () => {
          resolve();
        });
      });
  
      // Click on account name
      const accountName = document.querySelector('.awsc-switched-role-info');
      accountName.click();
  
      // Select "Security credentials" from the dropdown menu
      const securityCredentials = document.querySelector('.awsc-switched-role-menu .nav-item:nth-child(3) a');
      securityCredentials.click();
  
      // Scroll down to the "Access keys" section
      const accessKeys = document.querySelector('#heading_access_keys');
      accessKeys.scrollIntoView();
  
      // Find the "Create access key" button and click it
      const createAccessKeyBtn = document.querySelector('#access-keys-create-button');
      createAccessKeyBtn.click();
  
      // Wait for the modal window to appear
      await new Promise((resolve) => {
        const modalWindow = document.querySelector('.modal-dialog');
        modalWindow.addEventListener('load', () => {
          resolve();
        });
      });
  
      // Find the checkbox for confirming root access key creation
      const confirmCheckbox = document.querySelector('#iam-create-root-key-confirm');
      confirmCheckbox.click();
  
      // Click the "Create access key" button
      const confirmBtn = document.querySelector('#access-keys-create-confirm-button');
      confirmBtn.click();
  
      // Wait for the new access key to be created
      await new Promise((resolve) => {
        const accessKeyTable = document.querySelector('#access-keys-table');
        accessKeyTable.addEventListener('load', () => {
          resolve();
        });
      });
  
      // Retrieve the "Access key" and "Secret access key"
      const accessKey = document.querySelector('#access-keys-access-key-id').textContent;
      const secretKey = document.querySelector('#access-keys-secret-access-key').textContent;
  
      // Assert that the access keys are not empty
      expect(accessKey.trim()).not.toBe('');
      expect(secretKey.trim()).not.toBe('');
    });
  });
  