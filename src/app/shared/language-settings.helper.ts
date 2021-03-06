import { LanguageSettings, LanguageSettingsNavBar, LanguageSettingsFairpayForm, LanguageSettingsMinimumWage, LanguageSettingsWageBreakdown, LanguageSettingsAbout } from './models';

export class LanguageSettingsHelper {
    constructor() {}

    getLanguageSettings(language: string) {
        var languageSettings = new LanguageSettings();
        var navbar = new LanguageSettingsNavBar();
        var minimumWage = new LanguageSettingsMinimumWage();
        var fairpayForm = new LanguageSettingsFairpayForm();
        var wageBreakdown = new LanguageSettingsWageBreakdown();
        var about = new LanguageSettingsAbout();

        if (language === "english") {
            navbar.aboutLinkText = "About";
            navbar.homeLinkText = "Home";
            navbar.languageLinkText = "Habla Espanol?";
            languageSettings.navBar = navbar;

            minimumWage.yearDescriptionText = "Let's determine the minimum wage that applies to your check";
            minimumWage.yearLabelText = "Year";
            minimumWage.stateDescriptionText = "Now select the state where you received your check";
            minimumWage.stateLabelText = "State";
            languageSettings.minWage = minimumWage;

            fairpayForm.timeSpanLabelText = "Pay Period Length";
            fairpayForm.timeSpanWeeklyText = "Weekly";
            fairpayForm.mainDescriptionText = "Great. Now let's get some more information on the pay period in question";
            fairpayForm.grossWagesLabelText = "Gross Wages";
            fairpayForm.grossWagesPlaceHolderText = "Enter Gross Wages for the pay period...";
            fairpayForm.hoursWorkedLabelText = "Hours Worked";
            fairpayForm.hoursWorkedPlaceHolderText = "Enter hours worked for pay period...";
            fairpayForm.minimumWageLabelText = "Minimum Wage";
            fairpayForm.minimumWagePlaceHolderText = "Enter the minimum wage that applies to this check";
            fairpayForm.submitButtonText = "Calculate";
            languageSettings.fairpayForm = fairpayForm;

            wageBreakdown.normalHoursText = "Normal Hours";
            wageBreakdown.normalPayText = "Normal Pay";
            wageBreakdown.overtimeHoursText = "Overtime Hours";
            wageBreakdown.overtimePayText = "Overtime Pay";
            wageBreakdown.totalPayText = "Total Pay";
            wageBreakdown.reportedGrossWagesText = "Reported Wages";
            wageBreakdown.differenceText = "Amount Under Paid";
            wageBreakdown.unfairpayText = "It looks like you are not getting paid enough according to Federal or State regulations, contact lawyer@lawyer.com for help";
            wageBreakdown.fairpayText = "It looks like you are getting paid according to Federal and State regulation";
            wageBreakdown.exitButtonText = "Go Back"
            languageSettings.wageBreakdown = wageBreakdown;

            about.appDescriptionMarkup = `
                <h1>About FairPay</h1>
                <p>FairPay is a wage theft detection tool. Using up to date minimum wage calculations, FairPay will tell you if you are paid under State and Federal regulations and by how much.</p>`;

            about.projectLinksMarkup = `
                <h1>Development</h1>
                <p>This Angular 2 powered application was written as a proof of concept for an easy to use wage theft calculator. The code can be found <a href="https://github.com/ryanquincypaul/fairpayWeb">here</a>.</p>
                <h4>Web Service Dependencies</h4>
                <p>This app uses the <a href="https://github.com/ryanquincypaul/minimum-wage">minimum-wage</a> and <a href="https://github.com/ryanquincypaul/fairpay">fairpay</a> web services.</p>`;

            about.contactMeMarkup = `
                <h1>Contact Me</h1>
                <p>My name is Ryan Paul and you can get contact details and view my other projects <a href="https://ryanquincypaul.github.io">here</a>. </p>`;
            languageSettings.about = about;


        } else if (language === "spanish") {
            navbar.aboutLinkText = "Sobre";
            navbar.homeLinkText = "Casa";
            navbar.languageLinkText = "Speak English?";
            languageSettings.navBar = navbar;

            minimumWage.yearDescriptionText = "Vamos a determinar el salario mínimo que se aplica a su cheque";
            minimumWage.yearLabelText = "Año";
            minimumWage.stateDescriptionText = "A continuación, seleccione el estado en el que ha recibido su cheque";
            minimumWage.stateLabelText = "Estado";
            languageSettings.minWage = minimumWage;

            fairpayForm.timeSpanLabelText = "Longitud período de pago";
            fairpayForm.timeSpanWeeklyText = "Semanal";
            fairpayForm.mainDescriptionText = "Gran Ahora vamos a obtener algo más de información sobre el período de pago de que se trate";
            fairpayForm.grossWagesLabelText = "Los salarios brutos";
            fairpayForm.grossWagesPlaceHolderText = "Introduzca los salarios brutos del período de pago ...";
            fairpayForm.hoursWorkedLabelText = "Horas Trabajadas";
            fairpayForm.hoursWorkedPlaceHolderText = "Introduzca las horas trabajadas por período de pago ...";
            fairpayForm.minimumWageLabelText = "Salario Mínimo";
            fairpayForm.minimumWagePlaceHolderText = "Introduzca el salario mínimo que se aplica a este cheque";
            fairpayForm.submitButtonText = "Calcular";
            languageSettings.fairpayForm = fairpayForm;

            
            wageBreakdown.unfairpayText = "Parece que no están pagando lo suficiente de acuerdo con los reglamentos federales y estatales, en contacto con lawyer@lawyer.com ayuda";
            wageBreakdown.fairpayText = "Parece que usted está pagando de acuerdo a la regulación federal y estatal";           
            wageBreakdown.normalHoursText = "Horarios Normales";
            wageBreakdown.normalPayText = "Normal de Pago";
            wageBreakdown.overtimeHoursText = "Horas Extraordinarias";
            wageBreakdown.overtimePayText = "Pago por Tiempo Extra";
            wageBreakdown.totalPayText = "Pago Total";
            wageBreakdown.reportedGrossWagesText = "Los Salarios Reportados";
            wageBreakdown.differenceText = "Cantidad Bajo Pago";
            wageBreakdown.exitButtonText = "Regresa";
            languageSettings.wageBreakdown = wageBreakdown;

            about.appDescriptionMarkup = `
                <h1>Acerca de FairPay</h1>
                <p>FairPay es una herramienta de detección de robo de salarios. Utilizando hasta cálculos de salarios mínimos fecha, FairPay le dirá si le pagan en virtud de las regulaciones estatales y federales y en qué medida.</p>`;

            about.projectLinksMarkup = `
                <h1>Desarrollo</h1>
                <p>Esta angular 2 aplicación accionado fue escrito como una prueba de concepto para un fácil de usar calculadora robo de salarios. El código se puede encontrar <a href="https://github.com/ryanquincypaul/fairpayWeb">aquí</a>.</p>
                <h4>Dependencias de servicio web</h4>
                <p>Esta aplicación utiliza la <a href="https://github.com/ryanquincypaul/minimum-wage">minimum-wage</a> y <a href="https://github.com/ryanquincypaul/fairpay">fairpay</a> servicios web.</p>`;

            about.contactMeMarkup = `
                <h1>Contacto Me</h1>
                <p>Mi nombre es Ryan Paul y se puede obtener información de contacto y ver mis otros proyectos <a href="https://ryanquincypaul.github.io">aquí</a>.</p>`;
            languageSettings.about = about;
        }
        

        return languageSettings;
    }


}