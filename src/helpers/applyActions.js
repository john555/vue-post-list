import { swapIndex } from "./swapIndex";

export function applyActions(posts, actions) {
  let result = [...posts];

  actions.forEach(action => {
    result = swapIndex(result, action.from, action.to);
  });

  return result;
}
