BUG-001: Empty Data Jabatan submission redirects user to login page without validation feedback

Severity

Medium

Severity Justification

This issue disrupts the user workflow by unexpectedly terminating the current session during data entry. Users lose context and must authenticate again to continue working. While no data corruption was observed, repeated occurrences can significantly impact productivity and user confidence in the system.

Environment

- Application: HRMS (MERN Employee Salary Management)
- User Role: Admin (username: aldi)
- Browser: Chrome
- Operating System: Windows

Steps to Reproduce

1. Log in to the HRMS application using valid administrator credentials.
2. Navigate to Master Data → Data Jabatan.
3. Click Tambah (Add).
4. Leave all required fields empty.
5. Click Simpan (Save).

Expected Result

- The application should prevent form submission.
- Clear validation messages should be displayed indicating which fields are mandatory.
- The user should remain on the same page with their active session intact.

Actual Result

- The form is not saved.
- No validation message is displayed.
- The user is redirected to the login page and must log in again.

Reproducibility

100% reproducible during testing.

Impact

Administrative users entering job position data are unexpectedly logged out during invalid form submissions. This interrupts workflow and may discourage users from trusting the application's data entry process.

Possible Root Cause

The application may be handling validation failures as authentication failures or incorrectly redirecting users to the login route when receiving an error response from the backend.

Evidence

- Blank data was not saved to the database.
- The issue was reproduced multiple times using the same steps.
- Successful login was possible immediately afterward using the same credentials.