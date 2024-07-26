import { sum } from "../sum";

test("Sum function should calculate sum of two numbers", () => {
  const result = sum(4, 6);
  expect(result).toBe(10);
});
