import data from "../../submissionData.json"; // do not create this file
// const data = [
//   { submission_link: "http://localhost:3000/", id: "manish-local" },
// ];

describe("RCT-211-B20-E1 Evaluation", () => {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    beforeEach(() => {
      cy.visit(url);
      // cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("check if title splitter is present", () => {
      cy.visit(url);
      cy.get(".container").should("contain", "SPLITTER");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("check if Left and Right box called ", () => {
      cy.visit(url);
      cy.get(".billbox").children().should("have.length", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("check initial structure ", () => {
      cy.get(".bill_input").should("have.value", 0);
      cy.get(".people").should("have.value", 1);
      cy.get(".tipAmount").should("contain", "0.00");
      cy.get(".TotalAmount").should("contain", "0.00");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("check defalut tip", () => {
      cy.visit(url);
      cy.get(".bill_input").clear().type(100);
      cy.get(".people").should("have.value", 1);
      cy.get(".tipAmount").should("contain", "15.00");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("check select tip buttons 1 ", () => {
      cy.visit(url);
      cy.get(".bill_input").clear().type(150);
      //cy.get("").click();
      cy.contains("button", "5").click();
      cy.get(".people").clear().type(3);
      cy.get(".tipAmount").should("contain", "2.50");
      cy.get(".TotalAmount").should("contain", "52.50");
      cy.get(".Reset").click();
      cy.get(".bill_input").clear().type(1050);
      // cy.get(".25").click();
      cy.contains("button", "25").click();
      cy.get(".people").clear().type(7);
      cy.get(".tipAmount").should("contain", "37.50");
      cy.get(".TotalAmount").should("contain", "187.50");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("check select tip buttons 2 ", () => {
      cy.visit(url);
      cy.get(".bill_input").clear().type(17384);
      // cy.get(".50").click();
      cy.contains("button", "50").click();
      cy.get(".people").clear().type(1);
      cy.get(".tipAmount").should("contain", "8692.00");
      cy.get(".TotalAmount").should("contain", "26076.00");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("check Custom tip", () => {
      cy.visit(url);
      cy.get(".bill_input").clear().type(550);
      cy.get(".people").clear().type(4);
      cy.get(".tipAmount").should("contain", "20.63");
      cy.get(".TotalAmount").should("contain", "158.13");
      // cy.get(".10").click();
      cy.contains("button", "10").click();
      cy.get(".tipAmount").should("contain", "13.75");
      cy.get(".TotalAmount").should("contain", "151.25");
      cy.get(".custom").clear().type(37);
      cy.get(".tipAmount").should("contain", "50.88");
      cy.get(".TotalAmount").should("contain", "188.38");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("checking reset button", () => {
      cy.visit(url);
      cy.get(".bill_input").clear().type(450);
      cy.get(".people").clear().type(3);
      cy.get(".Reset").click();
      cy.get(".bill_input").should("have.value", 0);
      cy.get(".people").should("have.value", 1);
      cy.get(".tipAmount").should("contain", "0.00");
      cy.get(".TotalAmount").should("contain", "0.00");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
