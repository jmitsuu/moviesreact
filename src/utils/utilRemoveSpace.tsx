export function utilRemoveSpace(param: string) {
  return param
    .replace(/\s+/g, '-')
    .replace(/[.:()]/g, '')
    .toLowerCase()
}
