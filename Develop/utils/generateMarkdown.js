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
  console.log(data.question7);
  if (data.question7 == 'Apache License 2.0') {
    data.question7 = 'https://img.shields.io/crates/l/rustc-serialize';
  } else if (data.question7 == 'MIT') {
    data.question7 = 'https://img.shields.io/apm/l/vim-mode';
  } else if (data.question7 == 'BSD 3') {
    data.question7 = 'https://img.shields.io/pypi/l/Django';
  } else if (data.question7 == 'GNU GPL') {
    data.question7 = 'https://img.shields.io/badge/License-GPL-green';
  }else if (data.question7 == 'GNU LGPL') {
    data.question7 = 'https://img.shields.io/badge/License-LGPL-green';
  } else {
    data.question7 = "Choose one license";
  }
  console.log(data.question7);
  return `
# ${data.question1}

## Description 

${data.question2}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.question3}


## Usage 

${data.question4}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

md
![alt text](assets/images/screenshot.png)



## Credits



## License

${data.question7}

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badge](${data.question7})

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.


## Contributing

${data.question5}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

## Questions

For questions contact me at: ${data.question7}
GitHub Profile: https://github.com/${data.question8}/
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
