Feature: Buy Product

    In home screen we search for the product, we choose the right one after that we populate all fields with valid informations and after finializing the transaction we validate the purchase.

        Scenario: Product purchase and validation

    Given I am logged in to the application
    And I searched for a product
    When I populated all fields with valid information
    And I finalized the transaction
    Then I validate the purchase through email
