export function unprocessableEntityError(resource = "Dados incorretos."){
  return {
    type: "unprocessable",
    message: `${resource}`
  }
}