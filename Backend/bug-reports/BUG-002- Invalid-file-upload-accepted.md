BUG-002: Employee Photo Field Accepts Non-Image Files

Severity

High

Severity Justification

The application allows non-image files to be uploaded into the employee photo field. This can result in invalid employee records, broken profile displays, and potentially unsafe file storage behavior. The issue affects employee data quality and system reliability.

Environment

- Application: HRMS (MERN Employee Salary Management)
- User Role: Admin
- Browser: Chrome
- Operating System: Windows

Steps to Reproduce

1. Log in as an administrator.
2. Navigate to Master Data → Data Pegawai.
3. Click Tambah (Add Employee).
4. Fill all mandatory fields with valid data.
5. Create a text file named "test.txt".
6. Upload "test.txt" in the Photo field.
7. Click Save.

Expected Result

The system should reject non-image files and display a validation message indicating only image formats are allowed.

Actual Result

The system accepts the ".txt" file and successfully creates the employee record.

Reproducibility

100% reproducible.

Impact

Invalid employee profile data can be stored in the system. Downstream features expecting image files may fail or display broken content.

Possible Root Cause

Missing server-side and/or client-side file type validation for uploaded employee photos.

Evidence

Employee record successfully saved after uploading a ".txt" file.