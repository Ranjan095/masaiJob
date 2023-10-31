## Tip calculator app - SPLITTER
## Maximum Marks - 13
## Submission Instructions [Please note]
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces ,for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub
```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the title 'SPLITTER' is present  - 1 mark
 ✅ Check if the Left and Right box present - 1 mark
 ✅ Check initial structure - 1 mark
 ✅ Check default tip as 15% - 1 mark
 ✅ Check select tip buttons-2 - 2 marks
 ✅ Check select tip buttons-1 - 2 marks
 ✅ Check Custom tip - 2 marks
 ✅ Checking reset button - 2 marks
```
#### Problem Statement
Create the following application:
- Your challenge is to build out this tip calculator app and get it looking as close to the design as possible.
- where the inputs are 
  1. total bill
  2. % of tip
  3. number of people
- output
  1. what is the tip paid per person
  2. what is the total amount paid per person
- Calculate the correct tip and total cost of the bill per person
#### Getting Started

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run the following commands
  - `npm install --engine-strict`
  - `npm start`
#### Folder structure
- src
  - Components
    - BillPage.jsx
    - LeftBox.jsx
    - RightBox.jsx
  - App.js
  - App.css
  - index.js

You can find the test case under the cypress folder with the file name `spec.cy.js`

#### Steps
### 1. App.js
![front default](https://user-images.githubusercontent.com/101581634/226520535-54ea6153-5c53-46c6-a4d7-a344b68b68ff.png)

- title `SPLITTER` should present

### 2. BillPage.jsx
![default tip](https://user-images.githubusercontent.com/101581634/226520555-4b474d75-1a30-46ca-95ab-e620785e4cc7.png)
### 3. LeftBox.jsx
- On default load, the tip % should be `15%`and the no . of people should be `1`.
- Bill
  - input, where the total amount to pay added with `className="bill_input"`
- Select Tip %
  - 5 buttons for different tip percentages.
  - one input for `Custom Tip` with `className="custom"`
- Number of people
  - input with value by default is `1` we can increase it i.e. we are adding contribution to pay bill Amount with `className="people"`

![left box](https://user-images.githubusercontent.com/101581634/226523736-31e0629a-f3d8-4e37-8d47-f5200bca456d.png)

- Input bill-900, tip as 10% and no . of people 3
- output expected for single person tip Amount -30.00 and total -330.00
- hint use num.toFixed();

### 4. RightBox.jsx
- calculate the tip amount for a single person with `className="tipAmount"`
- calculate the `Total` amount to pay by a single person with `className="TotalAmount"`
- On clicking the `RESET` button with `className="Reset"`
 Output Expected as-
  - Bill input = 0
  - no. of People = 1
  - Tip Amount = 0.00
  - Total Amount = 0.00

## Important Instructions:
- Do not remove the `data-testid` and `className` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags ,they are required for the UI.
- The `options`, `type`, `name` ,`tags` etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same form as given above.
- Do not change the current folder structure and names of components/files provided.

### General Instructions
- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time


