export function badRequestError(resource = "Requisição inválida."){
  return {
    type:"badRequest",
    message: `${resource}`
  }
}