import axios from "axios"
const axios = require("axios");

const BASE_URL = "http://localhost:5173";

describe("QA-304 Regression Suite - Payslip Pipeline", () => {

  test("Salary update reflects in payslip", async () => {
    const empId = 1;

    // Update salary
    await axios.put(${BASE_URL}/employee/${empId}/salary, {
      salary: 60000
    });

    // Get payslip
    const res = await axios.get(${BASE_URL}/payslip/${empId});

    expect(res.data.salary).toBe(60000);
  });

});