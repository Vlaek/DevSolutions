export function checkObjectIsArrayByKey<T>(array: T[], object: T, key: keyof T): boolean {
  return array.some((item) => item[key] === object[key])
}