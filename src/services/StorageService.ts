import { NewTask } from "@/models/NewTask";

export class StorageService {
  setLocalStorage(list: NewTask[]) {
    localStorage.setItem("taskList", JSON.stringify(list));
  }
  getLocalStorage() {
    const list: NewTask[] = JSON.parse(
      localStorage.getItem("taskList") || "[]"
    );

    return list;
  }
}
