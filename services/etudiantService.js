const v4= require('uuid');
//const mysqlConnection = require('../database/connectionDB.js');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Recuperer tous les etudiants
 */

function getEtudiants(req, res){
    res.json({ message: 'Votre requête a bien été reçue !' });
    //mysqlConnection.query("SELECT * FROM `etudiant`", (error, results, fields) =>{
        //if(!error){

            //console.log(results);
            //res.status(200).send(results)
        //}else
        //console.log(JSON.stringify(error))
    //})
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récuperer un étudiant à partir de son ID
 */

function getEtuByID(req, res){
    const id = req.params.id;
    //const {id} = req.params;
    //mysqlConnection.query("SELECT * FROM `etudiant` WHERE id = '"+id+"'", (error, results, fields) =>{
        //if(!error){
            //if(results[0])
                //res.status(200).send(results[0])
            //else
                //res.status(404).send({message: "Aucun étudiant avec cet ID"})
        //}else
            //console.log(JSON.stringify(error))
    //})
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Suprimmer un étudiant à partir de l'ID
 */


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Ajouter un etudiant
 */


//export default  {getEtudiants, getEtuByID, create, deleteEtu}
module.exports = {getEtudiants, getEtuByID}