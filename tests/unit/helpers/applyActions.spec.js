import { applyActions } from "@/helpers/applyActions";

describe("helpers/applyActions", () => {
  let posts, actions;

  beforeEach(() => {
    posts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    actions = [{ from: 0, to: 1 }];
  });

  it("should return an array of same length", () => {
    const result = applyActions(posts, actions);
    expect(result instanceof Array).toBe(true);
    expect(result.length).toBe(posts.length);
  });

  it("should not modify posts array", () => {
    const result = applyActions(posts, actions);
    let missMatchCount = 0;

    posts.forEach((post, index) => {
      if (post.id !== result[index].id) {
        missMatchCount += 1;
      }
    });

    expect(missMatchCount).toBeGreaterThan(0);
  });

  it("should swap indexes", () => {
    const firstAction = { from: 0, to: 1 };
    const secondAction = { from: 2, to: 0 };
    const result = applyActions(posts, [firstAction, secondAction]);
    expect(result[0].id).toEqual(3);
    expect(result[1].id).toEqual(1);
    expect(result[2].id).toEqual(2);
  });
});
