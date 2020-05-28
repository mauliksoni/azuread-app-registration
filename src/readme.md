## Read Me ##

The format of input CSV file is as following. Single Column named aadid :
```
aadid
000000-00000-00-00000-001
000000-00000-00-00000-002
000000-00000-00-00000-003
000000-00000-00-00000-004
```

## Obtaining Token to query the graph api REST endpoint ##

Go to https://developer.microsoft.com/en-us/graph/graph-explorer and sign in. Once signed in you can go to access token tab and copy the bearer token and replace it in the code.

![](https://i.imgur.com/XrLA5o4.png)

## output ##

The program queries the graph api and returns AADID, Last Name, First Name and UPN information for given input

## How to run ##

```npm install ```

```node index.js ```

## Output ##
If the object is found in AAD, it will console output the details 

```
PS C:\temp\query-aad> node index.js
00000daf-0089-00a0-0070-00042a447000,doe,john,john.doe@contoso.com
00000daf-0089-00a0-0070-00042a447002,doe,jane,jane.doe@contoso.com
```


and if not, then it will output a record with na.

```
PS C:\temp\query-aad> node index.js
undefined,na,na
undefined,na,na
undefined,na,na
undefined,na,na
```

