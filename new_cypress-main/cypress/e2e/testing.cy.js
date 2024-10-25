import * as data from "../helpers/default_data.json"

describe('Автотесты: рег, авт, смена пасс', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });
    
    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          });


    it('Авторизация, верные вводные данные', function () {
        cy.get(data.pole_mail).type(data.login);
        cy.get(data.pole_pass).type(data.password);
        cy.get(data.knopka_vhod).click();
        cy.get(data.text_end).contains(data.text_uspeh);
    })

    it('Авторизация, верный логин, НЕверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio7');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');    
    })

    it('Авторизация, НЕверный логин, верный пароль', function () {
        cy.get('#mail').type(data.nologin);
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');   
    })

    it('Авторизация, логин без @ и верный пароль', function () {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  
    })

    it('Авторизация, верный логин, но разный регистр и верный пароль', function () {
        cy.get('#mail').type('GeRmaN@dOlNiKoV.rU');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');   
    })

    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type(data.login);
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   
    })
})