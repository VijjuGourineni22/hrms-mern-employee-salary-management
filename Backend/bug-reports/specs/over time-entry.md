Overtime Entry Screen Specification

Purpose

Allow Site Managers to record overtime worked by employees at the end of each workday using desktop and mobile devices.

---

Actors

Primary Actor

- Site Manager

Secondary Actors

- Payroll Administrator
- HR Administrator

---

User Story

As a Site Manager,

I want to record overtime worked by employees,

So that payroll calculations include the correct overtime compensation.

---

Functional Requirements

Create Overtime Entry

The system shall allow Site Managers to create overtime entries.

Each overtime entry shall contain:

Field| Type| Required
Worker| Employee Selection| Yes
Overtime Date| Date| Yes
Overtime Hours| Numeric| Yes
Reason| Text Area| Yes

---

Worker Selection

The system shall provide a searchable employee dropdown.

The Site Manager shall be able to select only active employees.

Inactive employees shall not appear in the list.

---

Overtime Date

The system shall allow selection of a date.

Future dates shall not be allowed.

Dates older than 30 days shall require administrator approval.

---

Overtime Hours

The system shall accept values from:

0.5 to 24

Accepted increments:

0.5

Examples:

0.5
1
1.5
2
8

Invalid examples:

0
-1
25
abc

---

Reason

The reason field shall be mandatory.

Maximum length:

500 characters

Examples:

- Emergency maintenance
- Project deadline support
- Weekend production issue

---

Validation Rules

Missing Worker

Display:

Please select a worker.

---

Missing Date

Display:

Please select an overtime date.

---

Invalid Hours

Display:

Please enter valid overtime hours.

---

Missing Reason

Display:

Please provide a reason for overtime.

---

Mobile Requirements

The screen shall support:

- Mobile phones
- Tablets
- Desktop browsers

Requirements:

- Responsive layout
- Touch-friendly controls
- Scrollable forms
- Mobile keyboard support

---

Security Requirements

Only authenticated Site Managers shall access the screen.

Unauthorized users shall receive:

403 Forbidden

Access attempts shall be logged.

---

Audit Requirements

The system shall record:

- Created By
- Created Date
- Modified By
- Modified Date

Audit information shall not be editable by users.

---

Error Handling

When save fails:

Display:

Unable to save overtime entry. Please try again.

The form data shall remain available and not be lost.

---

Acceptance Criteria

Scenario 1: Successful Overtime Entry

Given a Site Manager is logged in

When valid overtime information is entered

And Save is clicked

Then the overtime record shall be created successfully.

---

Scenario 2: Missing Worker

Given the Worker field is empty

When Save is clicked

Then the system shall display:

Please select a worker.

---

Scenario 3: Invalid Hours

Given overtime hours are negative

When Save is clicked

Then the system shall reject the submission.

---

Scenario 4: Future Date

Given the selected date is in the future

When Save is clicked

Then the system shall reject the submission.

---

Scenario 5: Mobile Usage

Given a Site Manager accesses the screen from a mobile device

When entering overtime information

Then all controls shall remain usable and responsive.