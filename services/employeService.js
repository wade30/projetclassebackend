const v4= require('uuid');
const mysqlConnection = require('../database/connectionDB.js');


/**
 *
 * @param {*} req
 * @param {*} res
 * Recuperer tous les etudiants
 */

function getEmployes(req, res){

    mysqlConnection.query("SELECT * FROM `employes`", (error, results, fields) =>{
        if(!error){
            console.log(results);
            res.status(200).send(results)
        }else
            console.log(JSON.stringify(error))
    })
}

/**
 *
 * @param {*} req
 * @param {*} res
 * Récuperer un étudiant à partir de son ID
 */

function getEmpByID(req, res){
    const id = req.params.id;
    //const {id} = req.params;
    mysqlConnection.query("SELECT * FROM `employes` WHERE id = '"+id+"'", (error, results, fields) =>{
        if(!error){
            if(results[0])
            res.status(200).send(results[0])
            else
            res.status(404).send({message: "Aucun employe avec cet ID"})
        }else
        console.log(JSON.stringify(error))
    })
}

/**
 *
 * @param {*} req
 * @param {*} res
 * Suprimmer un étudiant à partir de l'ID
 */
function deleteEmp (req, res){
    const id = req.params.id;
    mysqlConnection.query("DELETE FROM `employes` WHERE id = '"+id+"'", (error, results, fields) =>{
        if(!error){
            if(results.affectedRows >= 1)
                res.send({message: `Element avec id = ${id} a été bien suprimmé`});
            else
                res.send({message: `Element avec id = ${id} n'a été trouvé`});
        }else{
            res.send({message: JSON.stringify(error)})
        }
    })
}

/**
 *
 * @param {*} req
 * @param {*} res
 * Ajouter un etudiant
 */

function create (req, res) {
    const postedData = req.body;
    const EmployesWithID = {... postedData, id: uuidv4()};
    mysqlConnection.query("INSERT INTO `employes` (`id`, `prenom`, `nom`, `age`, `adresse`) VALUES ('"+EmployesWithID.id+"', '"+EmployesWithID.prenom+"', '"+EmployesWithID.nom+"', "+EmployesWithID.age+");", (err, results, fields)=>{
        if(!err)
            res.status(201).send(EmployesWithID);
        else
            res.status(400).send({message: "Erreur lors de creation"});
    })
}

function deleted (req, res) {
    const id = req.params.id;
    mysqlConnection.query("DELETE FROM `employes` WHERE id = '"+id+"'", (error, results, fields) =>{
        if(!error){
            if(results[0])
                res.status(200).send(results[0])
            else
                res.status(404).send({message: "Employe supprimer"})
        }else
            console.log(JSON.stringify(error))
    })

}

module.exports = {getEmployes, getEmpByID, create, deleted}