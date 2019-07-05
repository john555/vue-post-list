import { swapIndex } from "./swapIndex";

export function applyActions(posts, actions, stopIndex) {
  let result = [...posts];
  for (let i = 0; i < actions.length; i++) {
    if (i > stopIndex) {
      break;
    }
    const action = actions[i];
    result = swapIndex(result, action.from, action.to);
  }

  return result;
}
