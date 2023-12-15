const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/users");
const OrganizationModel = require("./models/organization");
const ScholarModel = require("./models/scholarships");
const UserSaveModel = require("./models/userSave");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email,email})
    .then(user => {
            if(user) {
                if(user.email === "admin@gmail.com"){
                    if(user.password === password){
                        res.json("Admin");
                    }
                    else{
                        res.json("incorrect");
                    }
                }
                else if(user.password === password){
                    res.json("Success");
                }
                else{
                   res.json("incorrect");
                }
            }
            else{
                res.json("NotRegistered");
            }
    })
});

app.post('/Organization_login', (req, res) => {
    const {email, password} = req.body;
    OrganizationModel.findOne({email,email})
    .then(organization => {
            if(organization) {
                if(organization.password === password){
                    res.json("Success")
                }
                else{
                   res.json("incorrect")
                }
            }
            else{
                res.json("unsuccess")
            }
    })
});

app.post('/ForgetPassword', (req, res) => {
    const {email} = req.body;
    UsersModel.findOne({email})
    .then(user => {
        if(user){
           res.json("exists");

        }
        else{
            res.json("doesn't");
        }
    })
    .catch(error => {
            console.error(error);
        });
});


const bcrypt = require('bcrypt');

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    UsersModel.findOne({ email })
        .then((user) => {
            if (user) {
                res.json('registered');
            } else {
                UsersModel.create({ name, email, password})
                    .then(newUser => res.json(newUser))
                    .catch(err => {
                        console.error(err);
                        res.status(500).json('Failed to create user');
                    });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json('dotood server error');
        });
});
app.post('/saveScholarUser/:scholarName/:userID', async (req, res) => {
    try {
      const { scholarName, userID } = req.params;
      const userSave = await UserSaveModel.findOne({ scholarName, userID });
  
      if (userSave) {
        res.json('true');
      } else {
        await UserSaveModel.create({ userID, scholarName });
        res.status(200).json({ success: true, message: 'success' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'aldaa' });
    }
  });
  app.get('/saveScholarUser/:userID', async (req, res) => {
    try {
      const { userID } = req.params;
      const userSave = await UserSaveModel.find({ userID });

      if (userSave) {
        res.json(userSave)
      } else {
        res.status(200).json({ success: true, message: 'success' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'aldaa' });
    }
  });
  
  
  
  
  
app.post('/organization_register', (req, res) => {
    const { name, email, password } = req.body;
    OrganizationModel.findOne({ email })
      .then((organization) => {
        if (organization) {
          res.json('registered');
        } else {
          OrganizationModel.create({ name, email, password })
            .then((createdOrganization) => res.json(createdOrganization))
            .catch((err) => {
              console.error(err);
              res.status(500).json('Failed to create organization');
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json('dotood server error');
      });
  });
  
app.post('/addScholarship', (req, res) => {
    ScholarModel.create(req.body)
        .then(scholar => res.json(scholar))
        .catch(err => res.json(err));
});


app.get('/usersDetail', async (req, res) => {
    try{
        const allUser = await UsersModel.find({});
        res.send({ data: allUser});
    }catch(error){
        console.log(error);
    }
});
app.get('/getSavedData/:userID', async (req, res) => {
    try {
    const { userID } = req.params;
    const userSave = await UserSaveModel.findOne({userID});
    if (userSave) {
        res.json({
            userID: userSave.userID,
            scholarName: userSave.scholarName,
        });
        res.send({ data: userSave});
    } else {
        res.status(404).json({ error: ' not found' });
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});

app.get('/searchByScholarName/:userID', async (req, res) => {
    try {
      const { userID } = req.params;
      console.log('userID:', userID);
      const result = await UserSaveModel.findOne({ userID });
      console.log(':', result);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


app.post("/deleteUser", async (req, res) => {
    const { userid } = req.body;
    try {
       const result = await UsersModel.deleteOne({ _id: userid });
       console.log(result);
       res.send({ status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error", data: "Failed to delete user" });
    }
});
app.post("/deleteScholar", async (req, res) => {
    const { scholarid } = req.body;
    try {
       const result = await ScholarModel.deleteOne({ _id: scholarid});
       console.log(result);
       res.send({ status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error", data: "Failed to delete user" });
    }
});
app.post("/deleteOrganization", async (req, res) => {
    const { organid } = req.body;
    try {
       const result = await OrganizationModel.deleteOne({ _id: organid });
       console.log(result);
       res.send({ status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error", data: "Failed to delete organization" });
    }
});
app.get('/organization', async (req, res) => {
    try{
        const allOrgan = await OrganizationModel.find({});
        res.send({data: allOrgan});
    }catch(error){
        console.log(error);
    }
});
app.get('/scholars', async (req, res) => {
    try {
        const allScholars = await ScholarModel.find({});
        const amjilttaiScholars = allScholars.filter(scholar => scholar.amjilttai === true);

        if (amjilttaiScholars.length > 0) {
            res.send({ data: amjilttaiScholars });
        } else {
            res.send({ data: [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'dotood server error' });
    }
});

app.post('/ChangePassword', (req, res) => {
    const { email, password } = req.body;

    UsersModel.findOneAndUpdate(
        { email },
        { $set: { password } },
        { new: true }
    )
    .then(updatedUser => {
        if (updatedUser) {
            res.json("success");
        } else {
            res.status(404).send('bhgvi');
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('dotood server error');
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.get('/showScholarship', async (req, res) => {
    try{
        const allScholars = await ScholarModel.find({});
        res.send({ data: allScholars});
    }catch(error){
        console.log(error);
    }
});

app.get('/organization/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const organization = await OrganizationModel.findById(id);
        if (organization) {
            res.json(organization);
        } else {
            res.status(404).json({ error: 'Organization not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});
app.get('/usersDetail/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UsersModel.findById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});

app.get('/userFind/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await UsersModel.findOne({email});
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});
app.get('/organFind/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const organ = await OrganizationModel.findOne({email});
        if (organ) {
            res.json(organ);
        } else {
            res.status(404).json({ error: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});

app.put('/organization/:id', async (req, res) => {
    const { id } = req.params;
    const updatedOrganization = req.body;

    try {
        const result = await OrganizationModel.findByIdAndUpdate(id, updatedOrganization, { new: true });
        if (result) {
            res.json('success');
        } else {
            res.status(404).json({ status: 'Error', message: 'Organization not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Error', message: 'dotood server error' });
    }
});
app.put('/usersDetail/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    try {
        const result = await UsersModel.findByIdAndUpdate(id, updatedUser, { new: true });
        if (result) {
            res.json('success');
        } else {
            res.status(404).json({ status: 'Error', message: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Error', message: 'dotood server error' });
    }
});

app.get('/scholarshipsCheck/:email', async (req, res) => {
    const email = req.params.email
    try {
        const scholar = await ScholarModel.find({email: email});
        console.log(scholar);
        if (scholar) {
            res.json([scholar]);
        } else {
            res.status(404).json({ error: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});
app.get('/showSc/:email', async (req, res) => {
    const email = req.params.email
    try {
        const scholar = await ScholarModel.find({email: email});
        console.log(scholar);
        if (scholar) {
            res.json([scholar]);
        } else {
            res.status(404).json({ error: 'bhgvi' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});

app.put('/addS/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const upd = await ScholarModel.findById(id);
        if(!upd){
            return res.status(404).json({message: 'bhgvi'});
        }
        else if(upd.amjilttai == true){
            return res.json('already');
        }
        upd.amjilttai = true;
        await upd.save();
        return res.json('success');
        console.log(res.data);
        
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'dotood server error' });
    }
});

