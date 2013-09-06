{
  "name": "durandal/amd/almond-custom",
  "inlineText": true,
  "stubModules": [
    "durandal/amd/text"
  ],
  "paths": {
    "text": "durandal/amd/text"
  },
  "baseUrl": "D:\\Proyectos\\DurandalAuth\\DurandalAuth.Web\\App",
  "mainConfigFile": "D:\\Proyectos\\DurandalAuth\\DurandalAuth.Web\\App\\main.js",
  "include": [
    "main-built",
    "main",
    "durandal/app",
    "durandal/composition",
    "durandal/events",
    "durandal/http",
    "text!durandal/messageBox.html",
    "durandal/messageBox",
    "durandal/modalDialog",
    "durandal/system",
    "durandal/viewEngine",
    "durandal/viewLocator",
    "durandal/viewModel",
    "durandal/viewModelBinder",
    "durandal/widget",
    "durandal/plugins/router",
    "durandal/transitions/entrance",
    "model/modelBuilder",
    "services/appsecurity",
    "services/config",
    "services/entitymanagerprovider",
    "services/errorhandler",
    "services/logger",
    "services/privatearticlerepository",
    "services/publicarticlerepository",
    "services/repository",
    "services/unitofwork",
    "services/utils",
    "viewmodels/shell",
    "viewmodels/account/externalloginconfirmation",
    "viewmodels/account/externalloginfailure",
    "viewmodels/account/login",
    "viewmodels/account/manage",
    "viewmodels/account/register",
    "viewmodels/admin/panel",
    "viewmodels/home/about",
    "viewmodels/home/articles",
    "viewmodels/home/index",
    "viewmodels/user/article",
    "viewmodels/user/dashboard",
    "text!views/header.html",
    "text!views/shell.html",
    "text!views/account/externalloginconfirmation.html",
    "text!views/account/externalloginfailure.html",
    "text!views/account/login.html",
    "text!views/account/manage.html",
    "text!views/account/register.html",
    "text!views/admin/panel.html",
    "text!views/home/about.html",
    "text!views/home/articles.html",
    "text!views/home/index.html",
    "text!views/user/article.html",
    "text!views/user/dashboard.html"
  ],
  "exclude": [],
  "keepBuildDir": true,
  "optimize": "uglify2",
  "out": "D:\\Proyectos\\DurandalAuth\\DurandalAuth.Web\\App\\main-built.js",
  "pragmas": {
    "build": true
  },
  "wrap": true,
  "insertRequire": [
    "main"
  ]
}