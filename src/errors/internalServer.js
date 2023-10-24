export function internalServerError(resource){
  return {
    type:"internalServer",
    message: `${resource}`
  }
}