import { StateController } from "ajwah-store";
import { merge } from "rxjs";
import { map, mapTo, delay } from "rxjs/operators";

export class CounterState extends StateController {
  constructor() {
    super(0);
  }
  onInit() {
    this.mapActionToState(
      this.action$.whereType("asyncInc").pipe(
        delay(1000),
        map((action) => this.state + 1)
      )
    );
  }

  inc() {
    this.emit(this.state + 1);
  }
  dec() {
    this.emit(this.state - 1);
  }
  get count$() {
    return merge(
      this.action$.whereType("asyncInc").pipe(mapTo("loading...")),
      this.stream$.pipe(map((state) => `${this.state}`))
    );
  }
}
