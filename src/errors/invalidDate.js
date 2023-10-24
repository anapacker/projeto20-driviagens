export function invalidDateError(){
  return {
    type: "invalidDate",
    message: "Data inválida! Deve ser uma data maior que a data atual."
  }
}