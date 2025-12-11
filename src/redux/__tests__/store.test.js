import { store } from "../store";

describe("Redux Store", () => {
  test("should have calendar state", () => {
    const state = store.getState();
    expect(state).toHaveProperty("calendar");
  });
});
