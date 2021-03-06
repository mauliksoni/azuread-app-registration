# Azure AD App registration
Azure AD App registration for Graph Explorer to query User Info by Azure Active Directory ID

# Introduction
[Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview) is the gateway to data and intelligence in Microsoft 365. It provides a unified programmability model that you can use to access the tremendous amount of data in Office 365, Windows 10, and Enterprise Mobility + Security. Use the wealth of data in Microsoft Graph to build apps for organizations and consumers that interact with millions of users.

[Users](https://docs.microsoft.com/en-us/graph/azuread-users-concept-overview) are the representation of an Azure Active Directory (Azure AD) work or school user account or a Microsoft account in Microsoft Graph. The user resource in Microsoft Graph is a hub from which you can access the relationships and resources that are relevant to your users.

Working with [users](https://docs.microsoft.com/en-us/graph/api/resources/users?view=graph-rest-1.0) in Microsoft Graph REST API requires valid token. This article will demonstrate setting up Azure AD Application and it's permissions so that it can generate token to further query graph api.

# Go to Azure Portal and register an AD App

Sign in to Azure Portal, in top search bar search for -> Azure Active Directory. That will bring up the Acive Directory blade.
Click on App Registration -> New Registration
![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step1.png)

Next, provide Name and select first option in supported account types. And then click Register

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step2a.png)

Once registration is complete, you will be redirected to App home page

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step3.png)

# Go to API Permissions and add Microsoft Graph Application Permission

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step4.png)

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step5.png)

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step6.png)

# Grant Admin Consent
For application to read user's profile, Azure AD Admin needs to grant the concent. Remember, you need to be an azure ad admin in order for the consent button to be enabled. You will see the button gray out if you do not have sufficient permission to grant the concent.

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step7.png)

once the admin grants the permission, you will see green check marks.
![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step8.png)

# Generate Client Secret ( password ) 
In order to use the Azure AD APP with Graph Explorer, we will need to generate the secret ( password ). Remember to note down the secret right after you generate it. once you navigate away from the secret blade, you will not be able to retrieve the secret.

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step9.png)

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step10.png)

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step11.png)

# Use PostMan to requet Token
Note down your AD App's Client ID, Tenant ID and Secret. Download the postman collection and import into your postman client.
Once Imported -> Go to Get AAD Token request and provide client_id and client_seacret as body parameters. Replace <<subscriptionid>> from URL with your tenant (subscription) ID.

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/Step12.png)

# Use PostMan to query user's info using Graph Explorer

![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/Step13.png)

