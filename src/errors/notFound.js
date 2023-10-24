export function notFoundError(resource = "Não encontrado."){
  return {
    type:"notFound",
    message: `${resource}`
  }
}