import { Guid } from "js-guid";

export function generateId() {
  const guidid = Guid.newGuid();
  const id = guidid.toString();
  return id;
}
