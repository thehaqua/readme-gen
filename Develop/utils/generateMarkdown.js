// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return "![License](https://img.shields.io/badge/license-Apache%202.0-blue)\n";
    case 'BSD 3':
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)\n";
    case 'GPL 3.0':
      return "![License](https://img.shields.io/badge/license-GPL%203.0-blue)\n";
    case 'MIT':
      return "![License](https://img.shields.io/badge/license-BSD%203-blue)\n";
    case 'N/A':
      return '\n';

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return "[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)";
    case 'BSD 3':
      return "[BSD 3](https://spdx.org/licenses/BSD-3-Clause.html)";
    case 'GPL 3.0':
      return "[GNU General Public License v3.0](https://spdx.org/licenses/GPL-3.0-only.html)";
    case 'MIT':
      return "[MIT License](https://spdx.org/licenses/MIT.html)";
    case 'N/A':
      return '\n';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0':
      return "Copyright 2021 Tyler Campbell\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n[http://www.apache.org/licenses/LICENSE-2.0]\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.";
    case 'BSD 3':
      return "Copyright 2021 Tyler Campbell\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
    case 'GPL 3.0':
      return "  Copyright (C) 2021  Tyler Campbell\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.";
    case 'MIT':
      return "Copyright 2021 Tyler Campbell\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
    case 'N/A':
      return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.project_name}
      
  ${renderLicenseBadge(data.license)}
      
  # Description
      
  ${data.description}
      
  # *Table of Contents
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
      

      
  # Installation
      
  To install necessary dependencies, run the following command: 
      
  ${data.installation}
      

      
  # Usage
      
  ${data.usage}
      

      
  # License
      
  ### ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
      

  # Contribution
  ${data.contributing}

      
  # Tests
      
  To run test, run the following command:
      
  ${data.test}
      

      
  # Questions

  You may contact me at [${data.email}](mailto:${data.email}) with any question you have!
  Also find me at [GitHub](https://github.com/${data.gituser}].
    
`;
}

module.exports.generateMarkdown = generateMarkdown;
