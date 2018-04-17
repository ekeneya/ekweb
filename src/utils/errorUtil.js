export function formatter(errors){
    let resultats = {};
    let error = false;
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        const fieldErros = errors[key];
        if(fieldErros instanceof Array && fieldErros[0]){
            resultats[key] = fieldErros[0]
        }else{
            resultats[key] = fieldErros;
        }
      }
      if(!error){
        error = true
      }
    }
    return {errors : resultats, error : error};
}