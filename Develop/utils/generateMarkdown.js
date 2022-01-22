// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("license");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseDesc = "";
  var licenseName = data.question7;
  if (data.question7 == 'Apache License 2.0') {
    data.question7 = 'https://img.shields.io/crates/l/rustc-serialize';
    licenseDesc = 'https://opensource.org/licenses/Apache-2.0';
  } else if (data.question7 == 'MIT') {
    data.question7 = 'https://img.shields.io/apm/l/vim-mode';
    licenseDesc = 'https://opensource.org/licenses/MIT';
  } else if (data.question7 == 'BSD 3') {
    data.question7 = 'https://img.shields.io/pypi/l/Django';
    licenseDesc = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (data.question7 == 'GNU GPL') {
    data.question7 = 'https://img.shields.io/badge/License-GPL-green';
    licenseDesc = 'https://opensource.org/licenses/gpl-license';
  }else if (data.question7 == 'GNU LGPL') {
    data.question7 = 'https://img.shields.io/badge/License-LGPL-green';
    licenseDesc = 'https://opensource.org/licenses/lgpl-license';
  } else {
    data.question7 = "Choose one license";
  }
  console.log(data.question7);
  return `
# ${data.question1}

![badge](${data.question7})

## Description 

${data.question2}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)


## Installation

${data.question3}


## Usage 

${data.question4}


## License

${licenseName}
${licenseDesc}

## Contributing

${data.question5}

## Tests

${data.question6}

## Questions

For questions contact me at: ${data.question9}
GitHub Profile: https://github.com/${data.question8}/
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
