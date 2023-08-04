
const validation= (inputsData) => {
    const errors = {};

    if (!/^[A-Za-z]{5,}$/.test(inputsData.name)) {
        errors.name = 'Please, write a name with 5 or more characters.';
    }
    if(!inputsData.season) {
        errors.season = 'Please, select a season.';
    }
    if(!inputsData.countriesIds.length){
        errors.countriesIds = 'Please, select at least one country.'
    }
    if(!inputsData.difficulty){
        errors.difficulty = 'Please, select a difficulty level.'
    }
    console.log('errors', errors)
    return {existErrors: Object.keys(errors).length, errors};
}
export default validation;
//inputsData se puede llamar como quiero pero es mas organizado decirlo asi, q el estado se llama inputsData