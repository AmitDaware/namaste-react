import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Test Case For Contact Us Page", () => {
  it("renders ContactUs component correctly", () => {
    render(<ContactUs />);

    // Main sections
    const contactMeHeading = screen.getByText("Contact me");
    expect(contactMeHeading).toBeInTheDocument();

    const getInTouchHeading = screen.getByText("Get in touch");
    expect(getInTouchHeading).toBeInTheDocument();

    // Contact details
    const emailLink = screen.getByText("dawareamit@gmail.com");
    expect(emailLink).toBeInTheDocument();

    const twitterLink = screen.getByText("AmitDaware.real");
    expect(twitterLink).toBeInTheDocument();

    const linkedInText = screen.getByText("AmitDaware");
    expect(linkedInText).toBeInTheDocument();

    // Form elements
    const nameInput = screen.getByPlaceholderText("Name");
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();

    const questionTextarea = screen.getByPlaceholderText("Question");
    expect(questionTextarea).toBeInTheDocument();

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeInTheDocument();
  });
  test("renders all headings correctly", () => {
    render(<ContactUs />);

    // All headings
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2); // Two headings in the component

    const contactMeHeading = headings.find(
      (heading) => heading.textContent === "Contact me"
    );
    expect(contactMeHeading).toBeInTheDocument();

    const getInTouchHeading = headings.find(
      (heading) => heading.textContent === "Get in touch"
    );
    expect(getInTouchHeading).toBeInTheDocument();
  });
});
