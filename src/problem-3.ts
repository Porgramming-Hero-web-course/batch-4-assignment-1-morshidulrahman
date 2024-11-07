

const ountWordOccurrences = (params1: string, params2: string): number => {
    const a = params1.toLocaleLowerCase()
    const b = params2.toLocaleLowerCase()
    const res = a.split(b).length - 1
    return res
}
ountWordOccurrences("I love typescript", "typescript")