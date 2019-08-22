import { TODO_ADDED, MIN_TEXT_LENGTH } from "../_constants";

export function add(s, cmd) {
  const id = cmd.id;
  const text = cmd.text;

  if (s.has(id)) throw new Error("id already exists");

  if (text.length < MIN_TEXT_LENGTH) throw new Error("too short");

  return { type: TODO_ADDED, id, text };
}
