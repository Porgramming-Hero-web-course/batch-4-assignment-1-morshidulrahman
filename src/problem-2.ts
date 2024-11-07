
//duplicater array remove

const removeDuplicates = (array: number[]): number[] => {
    const newvalue = array.filter((ele: number, index: number) => array.indexOf(ele) === index)
    return newvalue
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5])