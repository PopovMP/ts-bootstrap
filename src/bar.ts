import { foo, EFooEnum } from "./foo.ts";
import type { IFoo } from "./foo.ts";

export class Bar {
  private readonly a: number;
  private readonly b = 7;

  public constructor() {
    const ea: EFooEnum = EFooEnum.A;
    this.a = this.b + 42 + ea;
  }

  public print(): void {
    console.log(this.a);

    const printer: IFoo = foo();
    const ea: EFooEnum = EFooEnum.A;
    const hello = "Hello, world!";

    printer.print(ea);
    console.log(`${EFooEnum[ea]}: ${ea}`);
    console.log(hello);
  }

  public getA(): number {
    return this.a;
  }
}
