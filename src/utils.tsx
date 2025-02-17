export function calcAge(age:number) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}