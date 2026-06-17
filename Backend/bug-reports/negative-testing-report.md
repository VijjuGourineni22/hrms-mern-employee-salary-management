Negative Testing Report

Scope

The objective of this audit was to evaluate how the HRMS application handles invalid, unexpected, and boundary-value inputs.

Testing was performed on:

- Data Pegawai (Employee Management)
- Data Jabatan (Position Management)
- Authentication and Session Handling

---

Test 1: Empty Data Jabatan Submission

Steps

1. Navigate to Master Data → Data Jabatan.
2. Click Tambah.
3. Leave all fields empty.
4. Click Simpan.

Expected Result

The system should display validation messages and prevent submission.

Actual Result

The user was redirected to the login page without validation feedback.

Status

Failed

---

Test 2: Duplicate Username Creation

Steps

1. Navigate to Master Data → Data Pegawai.
2. Click Tambah.
3. Create a new employee using username "aldi", which already exists.
4. Click Simpan.

Expected Result

The system should reject duplicate usernames.

Actual Result

The employee record was successfully saved using the existing username.

Status

Failed

---

Test 3: Invalid File Upload

Steps

1. Create a file named "test.txt".
2. Navigate to Data Pegawai.
3. Upload "test.txt" as the employee photo.
4. Click Simpan.

Expected Result

Only image files should be accepted.

Actual Result

The system accepted the ".txt" file and created the employee record.

Status

Failed

---

Test 4: Negative Salary Values

Steps

1. Navigate to Data Jabatan.
2. Enter:
   - Gaji Pokok: -10000
   - Tunjangan Transport: -500
   - Uang Makan: -100
3. Click Simpan.

Expected Result

Negative compensation values should be rejected.

Actual Result

The user was redirected to the login page after submission.

Status

Failed

---

Test 5: Session Stability During Save Operations

Steps

1. Log in as admin.
2. Create or update records in Data Pegawai and Data Jabatan.
3. Click Simpan.

Expected Result

User should remain authenticated after successful save operations.

Actual Result

Save operations consistently redirected the user to the login page.

Status

Failed

---

Summary

Critical Findings

1. Duplicate usernames are allowed.
2. Non-image files are accepted in the employee photo upload field.
3. Save operations terminate the active session and redirect users to the login page.

Recommendation

Implement:

- Server-side validation
- Database uniqueness constraints
- File type validation
- Session management fixes

before production deployment.