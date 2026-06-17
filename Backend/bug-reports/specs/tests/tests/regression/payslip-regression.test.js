describe("Payslip Regression Suite", () => {

  test("salary update reflects in payslip", async () => {
    await updateSalary(1, 60000);

    const payslip = await generatePayslip(1);

    expect(payslip.salary).toBe(60000);
  });

  test("salary cutoff rule prevents late changes", async () => {
    setPayrollCutoff(25);

    await updateSalary(1, 70000, "27th");

    const payslip = await generatePayslip(1);

    expect(payslip.salary).not.toBe(70000);
  });

});