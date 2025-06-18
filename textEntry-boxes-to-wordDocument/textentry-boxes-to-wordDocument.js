const player = GetPlayer();
// Custom Styles
let headingFont = "'Lato Black', sans-serif";
let headingSize = "12pt";
let headingColour = "#000000";
let headingText = player.GetVar("first_name");

let subheadingFont = "'Lato Black', sans-serif";
let subheadingSize = "16pt";
let subheadingColour = "#000000";

let bodyFont = "'Lato', sans-serif";
let bodySize = "12pt";
let bodyColour = "#000000";

// Get text entry variable from SL
let ContactDetails = player.GetVar("ContactDetails");
let PersonalStatement = player.GetVar("PersonalStatement");
let EducationHeader = player.GetVar("EducationHeader");
let Education = player.GetVar("Education");
let WorkExperienceHeader = player.GetVar("WorkExperienceHeader");
let WorkExperience = player.GetVar("WorkExperience");
let SkillsAndAchievementsHeader = player.GetVar("SkillsAndAchievementsHeader");
let SkillsAndAchievements = player.GetVar("SkillsAndAchievements");
let InterestsHeader = player.GetVar("InterestsHeader");
let Interests = player.GetVar("Interests");
let ReferencesHeader = player.GetVar("ReferencesHeader");
let References = player.GetVar("References");

// File name
let filename = "CV";

// Style for document heading
let docHeader = `<h1 style="font-family: ${headingFont};color:${headingColour};font-size:${headingSize};">${headingText}</h1>`;

// Style for the body
ContactDetails = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${ContactDetails}</pre>`;
PersonalStatement = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${PersonalStatement}</pre>`;
EducationHeader = `<pre style="font-family:${subheadingFont};color:${subheadingColour}; white-space:pre-wrap;font-size:${subheadingSize};"><br>${EducationHeader}</pre>`;
Education = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${Education}</pre>`;
WorkExperienceHeader = `<pre style="font-family:${subheadingFont};color:${subheadingColour}; white-space:pre-wrap;font-size:${subheadingSize};"><br>${WorkExperienceHeader}</pre>`;
WorkExperience = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${WorkExperience}</pre>`;
SkillsAndAchievementsHeader = `<pre style="font-family:${subheadingFont};color:${subheadingColour}; white-space:pre-wrap;font-size:${subheadingSize};"><br>${SkillsAndAchievementsHeader}</pre>`;
SkillsAndAchievements = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${SkillsAndAchievements}</pre>`;
InterestsHeader = `<pre style="font-family:${subheadingFont};color:${subheadingColour}; white-space:pre-wrap;font-size:${subheadingSize};"><br>${InterestsHeader}</pre>`;
Interests = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${Interests}</pre>`;
ReferencesHeader = `<pre style="font-family:${subheadingFont};color:${subheadingColour}; white-space:pre-wrap;font-size:${subheadingSize};"><br>${ReferencesHeader}</pre>`;
References = `<pre style="font-family:${bodyFont};color:${bodyColour}; white-space:pre-wrap;font-size:${bodySize};"><br>${References}</pre>`;

//Declare Document Variables
let html =
  "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta><title>Export HTML To Doc</title></head><body>";
let footer = "</body></html>";
//append variables to html
html =
  html +
  docHeader +
  ContactDetails +
  PersonalStatement +
  EducationHeader +
  Education +
  WorkExperienceHeader +
  WorkExperience +
  SkillsAndAchievementsHeader +
  SkillsAndAchievements +
  InterestsHeader +
  Interests +
  ReferencesHeader +
  References +
  footer;
//link url
let url =
  "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);
//file name
filename = filename ? filename + ".doc" : "document.doc";
// Creates the  download link element dynamically
let downloadLink = document.createElement("a");
document.body.appendChild(downloadLink);
//Link to the file
downloadLink.href = url;
//Setting up file name
downloadLink.download = filename;
//triggering the function
downloadLink.click();
//Remove the a tag after download starts.
document.body.removeChild(downloadLink);
