@militarist
Feature: Homepage base functionality

  Scenario: Verify that user can open homepage
    Given I open "https://militarist.ua/ua/"
    When I wait until pageHeader is displayed
    Then I click changeLanguageRU
    And I wait until textFromAddressOfTheShops is displayed
    And Text of "textFromAddressOfTheShops" should contain "Адреса магазинов"
    And I click on the registration button
    And I wait 1 seconds
    And I close the registration form
    And I wait 2 seconds

  Scenario Outline: Check search ability of the website
    Then "<StuffName>" should be displayed on the website
    Examples:
      |StuffName|
      |GERBER МАЧЕТЕ-ПИЛА GATOR MACHETE JR|
      |BLADE BROTHERS МАЧЕТЕ ГОЛОК|
      |BAD COMPANY ФУТБОЛКА DAMAGE DEALER|
      |FAB DEFENSE РУКОЯТКА ПИСТОЛЕТНАЯ ДЛЯ ПМ BLACK|
