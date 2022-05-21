describe('Initial sanity test', () => {
  test('Basic sanity test', () => {
    expect(1).toEqual(1);
    expect(1).not.toEqual(2);
  });

  const tsTestFunc = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  test('sanity test TYPESCRIPT', () => {
    expect(1).toEqual(1);
    expect(1).not.toEqual(2);
    expect(tsTestFunc(1, 2)).toEqual(3);
    expect(tsTestFunc(1, 2)).not.toEqual(4);
    expect(tsTestFunc(1, 2)).not.toEqual('3');
  });
});
