export function useRemoveSpace(param:string) {
return param.replace(/\s+/g, '-').replace(/[.:()]/g, '').toLowerCase()
}