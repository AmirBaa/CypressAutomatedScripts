Feature: E2E Ecommerce validation

    Testing basic E2E functionalities of Ecommerce webapp

    Scenario: Ecommerce buy products and delivery
        Given Open HomePage of Ecommerce
        When Click on SHOP->Add Items to Cart
        And Validate the total prices of selected items
        Then Select the country-> Submit  ->Very