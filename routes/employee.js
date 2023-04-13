const express = require('express');
const employeeController = require('../controller/employee')

const router = express.Router();

router.get('/employee', employeeController.findAllEmployeeInDB);
router.get('/salaried-employee', employeeController.findEmployeeAccToSalaryInDB);
router.get('/experience-employee', employeeController.findEmployeeAccToExperienceInDB);
router.get('/grad-exp-employee', employeeController.findEmployeeAccToExperienceAndGraduateInDB);
router.put('/update-employee', employeeController.updateSalaryInDB);
router.delete('/delete-employee', employeeController.employeeDelete);


module.exports = router;










// const employeeController = require('../controller/employee')

// router.post('/employeeadd' , employeeController.employeeAdd)