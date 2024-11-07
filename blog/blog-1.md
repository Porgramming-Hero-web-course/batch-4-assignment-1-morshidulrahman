{

// The significance of union and intersection types in Typescript.

union and intersection types in typescript are key to imporve type safety.union type allow a varaible to on of multiple types.other side intersection types combine multiple types into one. these two method enchance code reusability also minimize the code error.

//some demo

-------union type-----
function hellonumber(value:string | number){
console.log(value)
}

hellonumber('hel')
hellonumber(343)

---intersection type------

interface person {
name:string;
age:number
}

type employdetais=person & {jobTitle:string}

const employe:employdetais={
name: "Babu",
age: 30,
jobTitle: "Software Developer",
}

console.log(employe)

}
