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

Next, provide Name and select first option in supported account types.
![image](https://github.com/mauliksoni/azuread-app-registration/blob/master/img/step2.png)


# Go to API Permissions and add Microsoft Graph Application Permission


# Grant Admin Consent


# Generate Client Secret ( password ) 


# Use PostMan to requet Token


# Use PostMan to query user's info using Graph Explorer



