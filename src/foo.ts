export enum EFooEnum {
  A = 64,
}

export interface IFoo {
  print(num: EFooEnum): void;
}

export function foo(): IFoo {
  const a = 42;

  function print(b: EFooEnum): void {
    console.log(a + (b as number));
  }

  return {
    print,
  };
}
