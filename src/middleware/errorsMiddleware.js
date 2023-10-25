import httpStatus from "http-status";

export function handleError(error,req, res, next){
  console.log(error);
  if(error.type === "conflict"){
    return res.status(httpStatus.CONFLICT).send(error.message)
  }
  if(error.type === "notFound"){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
  }
  if(error.type === "invalidDate"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
  }
  if(error.type === "unprocessable"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
  }
  if(error.type === "badRequest"){
    return res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
  if(error.message === "Too many results"){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
  }
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Desculpe, algo deu errado :( ")
}