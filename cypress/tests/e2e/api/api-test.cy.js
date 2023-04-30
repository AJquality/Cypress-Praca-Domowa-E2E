describe("API tests", () => {
  it("GET Cookies", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/cookies",
    }).as("request1");

    cy.get("@request1").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
    });
  });

  it("GET bytes", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/bytes/20",
    }).as("request2");

    cy.get("@request2").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
    });
  });

  it("GET headers", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
    }).as("request3");

    cy.get("@request3").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
    });
  });

  it("POST something should be here", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/anything",
      data: "anything to POST",
    }).as("request4");

    cy.get("@request4").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("POST something nice here", () => {
    const form = "i put here something nice";

    cy.request({
      method: "POST",
      url: "https://httpbin.org/response-headers?freeform=${form}",
    }).as("request5");

    cy.get("@request5").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("POST some great things in here", () => {
    const somePost = "posting some great things in here";

    cy.request({
      method: "POST",
      url: "https://httpbin.org/response-headers?post=${somePost}",
    }).as("request6");

    cy.get("@request6").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("DELETE delay", () => {
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delay/8",
    }).as("request7");

    cy.get("@request7").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("DELETE anything", () => {
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/anything",
      data: "something great",
    }).as("request8");

    cy.get("@request8").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("PUT delay", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/delay/8",
    }).as("request9");

    cy.get("@request9").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("PUT anything", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/anything",
      data: "something to put",
    }).as("request10");

    cy.get("@request10").then((response) => {
      expect(response.duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });
});
