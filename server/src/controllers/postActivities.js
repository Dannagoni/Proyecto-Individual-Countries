const { Country, Activity } = require('../db')

const postActivities = async (data, countriesIds) => {
  //Crea actividad
  const newActivity = await Activity.create(data);//(validation)

  try {
    // Itera los paises y los agrega/linkea a la actividad
    // countriesIds.forEach(async countryId => {
    //   const country = await Country.findOne({
    //     where: {
    //       id: countryId,
    //     },
    //   });

    //   if (!country) {
    //     throw new Error('El país especificado no existe');
    //   }

      await newActivity.addCountries(countriesIds); //chequear setCountries y addCountries
    // })

    // const activity = await Activity.findAll({include: {
    //   model: Country,
    //   attributes: ["name"],
    //   through: {
    //     attributes: []
    //   }
    // } })
    // Retorna la actividad
    return newActivity;


  } catch (error) {
    console.log(error)
  }
};

module.exports = postActivities;

