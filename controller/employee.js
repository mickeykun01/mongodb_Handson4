const {Employees} = require('../model/employee')

const findAllEmployeeInDB = async (req, res) => {
    try {
        const dbResponse = await Employees.find({});
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}
const findEmployeeAccToSalaryInDB  = async (req, res) => {
    const query = {salary : {$gt : 30000}};
    try {
        const result = await Employees.find(query);
        console.log("Data is fetched =>", result)
        return res.status(200).send({message: result})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}
const findEmployeeAccToExperienceInDB  = async (req, res) => {
    const query = {overallExp : {$gt : '2'}};
    try {
        const result = await Employees.find(query);
        console.log("Data is fetched =>", result)
        return res.status(200).send({message: result})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const findEmployeeAccToExperienceAndGraduateInDB  = async (req, res) => {
    const query = {$and: [{yearGrad : {$gt : 2015}} , {overallExp : {$gt : '1'}}]};
    try {
        const result = await Employees.find(query);
        console.log("Data is fetched =>", result)
        return res.status(200).send({message: result})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const updateSalaryInDB = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    try {
        const result = await Employees.updateMany(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const employeeDelete = async (req, res) => {
    const query = { lastCompany: "Y" } ;
    try {
        const result = await Employees.deleteMany(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}


module.exports = {
    findAllEmployeeInDB,
    findEmployeeAccToSalaryInDB,
    findEmployeeAccToExperienceInDB,
    findEmployeeAccToExperienceAndGraduateInDB,
    updateSalaryInDB,
    employeeDelete,
}


























// const employeeAdd = async (req,res)=>{
//     const employeeData = req.body;
//     try {
//         const employee = new Employee({
//             firstName : employeeData.firstName,
//             lastName: employeeData.lastName,
//             salary: employeeData.salary,
//             department: employeeData.department,
//             lastCompany: employeeData.lastCompany,
//             lastSalary: employeeData.lastSalary,
//             overallExp: employeeData.overallExp,
//             contactInfo: employeeData.contactInfo,
//             yearGrad: employeeData.yearGrad,
//             gradStream: employeeData.gradStream

//         });
//         const dbresponse = await employee.save();
//         console.log('data is saved =>', dbresponse);
//         return res.status(200).send({message : 'data is saved'});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({message : 'there is some error in process.'})
//     }
// }