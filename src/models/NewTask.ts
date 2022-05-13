export class NewTask {
  done: boolean;
  constructor(public task: string, public id: string) {
    this.done = false;
  }
}
