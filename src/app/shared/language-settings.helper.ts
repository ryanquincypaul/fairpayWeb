import { LanguageSettings, LanguageSettingsNavBar, LanguageSettingsFairpayForm, LanguageSettingsMinimumWage, LanguageSettingsWageBreakdown } from './models';

export class LanguageSettingsHelper {
    constructor() {}

    getLanguageSettings(language: string) {
        var languageSettings = new LanguageSettings();
        var navbar = new LanguageSettingsNavBar();
        var minimumWage = new LanguageSettingsMinimumWage();
        var fairpayForm = new LanguageSettingsFairpayForm();
        var wageBreakdown = new LanguageSettingsWageBreakdown();

        if (language === "english") {
            navbar.aboutLinkText = "About";
            navbar.homeLinkText = "Home";
            navbar.languageLinkText = "Habla Espanol?";
            languageSettings.navBar = navbar;

            minimumWage.yearDescriptionText = "Let's determine the minimum wage that applies to your check.";
            minimumWage.yearLabelText = "Year";
            minimumWage.stateDescriptionText = "Now select a state to see if they have their own Minimum Wage law...";
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
            wageBreakdown.unfairpayText = "It looks like you are getting paid under Federal or State regulation, contact LAWYERGROUP";
            wageBreakdown.fairpayText = "It looks like you are getting paid according to Federal and State regulation";
            languageSettings.wageBreakdown = wageBreakdown;

        } else if (language === "spanish") {
            navbar.aboutLinkText = "Sobre";
            navbar.homeLinkText = "Casa";
            navbar.languageLinkText = "Speak English?";
            languageSettings.navBar = navbar;

            minimumWage.yearDescriptionText = "Vamos a determinar el salario mínimo que se aplica a su cheque.";
            minimumWage.yearLabelText = "Año";
            minimumWage.stateDescriptionText = "Seleccione un estado para ver si tienen su propia ley de salario mínimo ...";
            minimumWage.stateLabelText = "Estado";
            languageSettings.minWage = minimumWage;

            fairpayForm.timeSpanLabelText = "Longitud período de pago";
            fairpayForm.timeSpanWeeklyText = "semanal";
            fairpayForm.mainDescriptionText = ". Gran Ahora vamos a obtener algo más de información sobre el período de pago de que se trate";
            fairpayForm.grossWagesLabelText = "Los salarios brutos";
            fairpayForm.grossWagesPlaceHolderText = "Introduzca los salarios brutos del período de pago ...";
            fairpayForm.hoursWorkedLabelText = "horas trabajadas";
            fairpayForm.hoursWorkedPlaceHolderText = "Introduzca las horas trabajadas por período de pago ...";
            fairpayForm.minimumWageLabelText = "salario mínimo";
            fairpayForm.minimumWagePlaceHolderText = "Introduzca el salario mínimo que se aplica a este cheque";
            fairpayForm.submitButtonText = "Calcular";
            languageSettings.fairpayForm = fairpayForm;

            
            wageBreakdown.unfairpayText = "Parece que usted está pagando bajo las leyes federales o del estado, el contacto LAWYERGROUP";
            wageBreakdown.fairpayText = "Parece que usted está pagando de acuerdo a la regulación federal y estatal";           
            wageBreakdown.normalHoursText = "de los horarios normales";
            wageBreakdown.normalPayText = "Normal de pago";
            wageBreakdown.overtimeHoursText = "horas extraordinarias";
            wageBreakdown.overtimePayText = "pago por tiempo extra";
            wageBreakdown.totalPayText = "pago total";
            wageBreakdown.reportedGrossWagesText = "Los salarios reportados";
            wageBreakdown.differenceText = "Cantidad Bajo pago";
            languageSettings.wageBreakdown = wageBreakdown;
        }
        

        return languageSettings;
    }


}