import { TODO_REMOVED } from "../_constants";

export function remove(s, cmd) {
  const id = cmd.id;

  if (!s.has(id)) throw new Error("id does not exist");

  return { type: TODO_REMOVED, id };
}
