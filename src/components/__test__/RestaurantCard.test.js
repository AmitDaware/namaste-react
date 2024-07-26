import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Test case for restaurant card", () => {
  it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const RestaurantName = screen.getByText("Chinese Wok");
    expect(RestaurantName).toBeInTheDocument();
  });
  it("Should render RestaurantCard component withPromotedLabel", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    const RestaurantName = screen.getByText("PROMOTED");
    expect(RestaurantName).toBeInTheDocument();
  });
});
