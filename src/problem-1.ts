

//problem-1

const sumArray = (params: number[]): number => {
    const res = params.reduce((a: number, b: number) => a + b, 0)
    return res
}
sumArray([1, 2, 3, 4, 5])

