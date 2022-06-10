// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Features](#features)
  * [Tests](#tests)
  * [Contact](#contact)
  
  ## [Description](#table-of-contents)
  ${data.description}
  ${data.about}
  ${data.languages}
 
  ## [Features](#table-of-contents)
  ${data.features}
  
  
  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Contact](#table-of-contents)
  [GitHub](https://github.com/${data.githubUsername})\n
 email; ${data.email}
`;
}

module.exports = generateMarkdown;