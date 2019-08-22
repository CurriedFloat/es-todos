import { TODO_CHECKED } from "../constants";

export function check(s, cmd) {
  const id = cmd.id;

  if (!s.has(id)) throw new Error("id does not exist");

  if (s.get(id).checked) throw new Error("already checked");

  return { type: TODO_CHECKED, id };
}
