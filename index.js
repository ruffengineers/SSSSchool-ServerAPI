const express=require('express');
const cors=require('cors');
const db=require("./models");
const app=express();
app.use(cors());
app.use(express.json());// it should be strictly placed here above all routers

//Establishments START
const establishementRouter=require('./routes/Establishment');
app.use("/establishments",establishementRouter);
//Establishments END

//InfrastCategories START
const infrastCategoriesRouter=require('./routes/InfrastCategories')
app.use("/infrastcategories",infrastCategoriesRouter);
//InfrastCategories END

//Infrastructure START
const infrastructureRouter=require('./routes/Infrastructure')
app.use("/infrastructure",infrastructureRouter);
//Infrastructure END

//ActivityCategories START
const activitycategoriesRouter=require('./routes/ActivityCategories')
app.use("/activitycategories",activitycategoriesRouter);
//ActivityCategories END

//Activities START
const activitiesRouter=require('./routes/Activities')
app.use("/activities",activitiesRouter);
//Activities END

//ActivitiesPictures START
const activitiespicturesRouter=require('./routes/ActivitiesPictures')
app.use("/activitiespictures",activitiespicturesRouter);
//ActivitiesPictures END



db.sequelize.sync().then(()=>{
  
app.listen(3001,()=>{
    console.log("Server is running");
})  
})
