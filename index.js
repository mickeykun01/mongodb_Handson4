const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./database/mongoose')
const employeeRouter = require('./routes/employee')
const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);




app.listen(3002 , async()=>{
    console.log("server connected at port 3002");
    await connect();
})



























// app.post("/signup", async (req, res) => {
//     try {
//         const details = req.body;
//         const users = projectmodel.findOne({ email: details.email }) // before hashing the password check that whether this email exists or not
//         // console.log(users)
//         if (!users) {
//             const hashpassword = await bcrypt.hash(details.password, saltround) // hash the password before saving to the database

//             let obj = new projectmodel({
//                 email: details.email,
//                 password: hashpassword
//             })

//             await obj.save();
//             res.send({ msg: "registration successfully done" })
//             // array.push(obj)
//             // res.send(array)
//         }
//         res.send({ msg: "email already exits try to login" })
//         // res.send(array)
//     }
//     catch (err) {
//         console.log(err)
//     }
// Akash Gupta 20:33
// const express = require("express")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const conextion = require("./config/db");
// const projectmodel = require("./projectschema/projectmodel");
// const app = express();
// const seckertkey = "aka";
// app.use(express.json())
// // const array = []
// const saltround = 10;

// app.get("/", (req, res) => {
//     res.send("hello!!!")
// })
// const middleware = (req, res, next) => {
//     const token = req.headers["authorization"]
//     const result = token.split(" ")[1]
//     jwt.verify(result, seckertkey, (err, data) => {
//         res.send(data)
//     })
// }
// app.post("/signup", async (req, res) => {

//     const details = req.body;
//     const users = await projectmodel.findOne({ email: details.email })
//     if (!users) {
//         const hashpassword = await bcrypt.hash(details.password, saltround)
//         let obj = new projectmodel({
//             email: details.email,
//             password: hashpassword
//         })
//         await obj.save();
//         // array.push(obj)
//         // res.send(array)
//         res.send({ msg: "registration successfully done" })
//         return;
//     }
//     res.status(404).send({ msg: "email already exits try to login " })
//     // res.send(array)
// })
// app.post("/login", async (req, res) => {
//     const data = req.body;

//     const user = await projectmodel.findOne({ email: data.email })// true
//     if (!user) {
//         return res.send({ msg: "email is wrong" })
//     }
//     const validate = await bcrypt.compare(data.password, user.password)
//     if (!validate) {
//         res.send({ msg: "password is wrong" })
//     }
//     return res.send({ msg: "user loged in" })

//     // array.find(async (items) => {
//     //     console.log(items)
//     //     if (items.email == data.email) {
//     //         console.log("user exists try to give the details")
//     //         await bcrypt.compare(data.password, items.password, (err, validate) => {
//     //             if (err) {
//     //                 console.log(err)
//     //             }
//     //             else {
//     //                 console.log(validate)
//     //                 jwt.sign(data, seckertkey, (err, token) => {
//     //                     if (err) {
//     //                         console.log(err)
//     //                     }
//     //                     res.send(token)
//     //                 })
//     //             }
//     //         })
//     //     }
//     // })
// })

// app.put("/hiddenapi/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const email = req.body.email;
//         await projectmodel.updateOne({ _id: id }, { $set: { email: email } })
//         return res.send("email updated")
//     }
//     catch (err) {
//         console.log(err)
//     }
// })



// app.listen(6060, async () => {
//     try {
//         await conextion;
//         console.log("connection has been made")
//     }
//     catch (err) {
//         console.log(err)
//     }

// })