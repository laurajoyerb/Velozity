const database = require("./dbConnection");

function getIndustry(res,userId){
    const getIndustryQuery = "SELECT industry FROM users WHERE userKey = ?";
    database.query(getIndustryQuery, [userId], function(error,results){
        if(error){
            console.log(error);
            if(res != undefined){
                res.status(500).json("An error occurred while fetching the user's industry");
            }
            else{
                return undefined;
            }
        }
        else{
            const industry = results[0].industry;
            if(res != undefined){
                if(industry == null){
                    res.status(400).json("You don't have an industry in your profile.");
                }
                else{
                    res.status(200).json({industry: industry});
                }
            }
            else{
                console.log("The industry is " + industry);
                return industry;
            }
        }
    })
}

function updateIndustry(res,userId, industry){
    const updateIndustryQuery = "UPDATE users SET industry = ? WHERE userKey = ?";
    console.log("Updating user id " + userId + " industry to " + industry);
    database.query(updateIndustryQuery, [industry, userId], function(error,results){
        if(error){
            console.log(error);
            res.status(500).json("An error occurred while updating the user's industry");
        }
        else{
            res.status(200).json({status: "Update successful"});
        }
    })
}

function updateResumeGrade(res,userId, resumeGrade){
    const updateResumeGradeQuery = "UPDATE users SET resumeGrade = ? WHERE userKey = ?";
    console.log("Updating user id " + userId + " resumeGrade to " + resumeGrade);
    database.query(updateResumeGradeQuery, [resumeGrade, userId], function(error,results){
        if(error){
            console.log(error);
            res.status(500).json("An error occurred while posting the user's resume grade");
        }
        else{
            res.status(200).json({status: "resume grade uploaded"});
        }
    })
}

function saveJob(userKey, company, position){
  const saveJobQuery = "INSERT INTO savedJobs(userKey, company, jobTitle) VALUES (?, ?, ?)";
  console.log("Adding job " + company + " " + position + " to " + userKey + " saved jobs ");
  database.query(saveJobQuery, [userKey, company, position], function(error, results){
    if(error){
      console.log(error);
    }
    else{
      console.log("Saved job successfully");
    }
  })
};

function getSaveJob(userKey, res){
  const getSaveJobQuery = "SELECT company, jobTitle FROM savedJobs WHERE userKey=?";
  console.log("Getting saved jobs for user " + userKey);
  database.query(getSaveJobQuery, [userKey], function(error, results){
    if(error){
      console.log(error);
    }
    else{
        console.log(results);
        const comp = results.company;
        const pos = results.position;
        if(res != undefined)
        {
            res.status(200).json({results:results});
        }
        else
        {
            return results;
        }
      console.log("Retrieved jobs successfully");
    }
  })
}




// function getResumeGrade(res,userId){
//     const getIndustryQuery = "SELECT resumeGrade FROM users WHERE userKey = ?";
//     database.query(getresumeGradeQuery, [userId], function(error,results){
//         if(error){
//             console.log(error);
//             if(res != undefined){
//                 res.status(500).json("An error occurred while fetching the user's resume grade");
//             }
//             else{
//                 return undefined;
//             }
//         }
//         else{
//             const resumeGrade = results[0].resumeGrade;
//             if(res != undefined){
//                 if(resumeGrade == null){
//                     res.status(400).json("You don't have a resume grade in your profile.");
//                 }
//                 else{
//                     res.status(200).json({resumeGrade: resumeGrade});
//                 }
//             }
//             else{
//                 console.log("The resume grade is " + resumeGrade);
//                 return resumeGrade;
//             }
//         }
//     })
// }


module.exports = {getIndustry, updateIndustry, updateResumeGrade, saveJob, getSaveJob}
