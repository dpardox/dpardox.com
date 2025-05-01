# dpardox

## Get started

- Run `npm install -g @angular/cli` to install Angular CLI.

- Download or clone this GIT repository in your local machine.

- Run a terminal and change path to root directory of this project.

- Run `git flow init` to start **Git Flow** in local project.
  + `Branch name for production releases: [main]`
  + `Branch name for "next release" development: [develop]`
  + `Feature branches? [feature/]`
  + `Bugfix branches? [bugfix/]`
  + `Release branches? [release/]`
  + `Hotfix branches? [hotfix/]`
  + `Support branches? [support/]`
  + `Version tag prefix? [] v`

- Run `npm install` to install dependencies.

## Development server

Run `ng serve` to lauch local server. Navigate to `http://localhost:4600`.

### Git Flow

#### Feature

- Run `git flow feature start <name>` to create feature.

- Update changes in `CHANGELOG.md` file.

- Run `git flow feature finish <name>` to confirm feature.

#### Release

- Run `git flow release start <version>` to create release.

- Run `git flow release finish <version>` to confirm this release.

- Run `git push origin main develop --tags` to update remote branchs.

#### Hotfix

- Run `git flow hotfix start <version>` to create release.

- Run `git flow hotfix finish <version>` to confirm this hotfix.

- Run `git push origin main develop --tags` to update remote branchs.

## Code scaffolding

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Directory structure:

```
modules
└── feature
    ├── components
    │   └── example
    │       └── example.component.ts|html|scss
    ├── layouts
    │   ├── example
    │   │   └── example.layout.ts|html|scss
    │   └── main
    │        └── main.layout.ts|html|scss
    ├── modals
    │   └── example
    │       └── example.modal.ts|html|scss
    ├── pages
    │   └── example
    │       └── example.page.ts|html|scss
    ├── services
    │   └── example.service.ts
    ├── feature.componente.ts|html|scss
    ├── feature-routing.module.ts
    └── feature.module.ts

| Type          | Command                                                            |
|--------------:|--------------------------------------------------------------------|
| **Class**     | `ng g class core/classes/<name>`                                   |
| **Component** | `ng g c modules/<feature>/components/<name>`                       |
| **Directive** | `ng g d core/directives/<name> --flat=false --export`              |
| **Enum**      | `ng g e core/enums/<name>`                                         |
| **Guard**     | `ng g g core/guards/<name>`                                        |
| **Interface** | `ng g i modules/<feature>/interfaces/<name> interface`             |
| **Module**    | `ng g m <directory>/<name> --flat`                                 |
| **Page**      | `ng g c modules/<feature>/pages/<name> --type page --skip-selector`|
| **Pipe**      | `ng g p modules/<feature>/pipes/<name>`                            |
| **Service**   | `ng g s <feature>/services/<name>`                                 |

### Module

- Run `ng g m modules/<feature> --routing` to create layout module and router module.

- Create a page.

- Update `src/app/app-routing.module.ts` file with lazy loading route to layout.

## Deploy to Firebase Hosting

- Run `npm i -g firebase-tools` to install Firebase CLI.

- Run `firebase login` to login to Firebase account.

- Run `npm run deploy` to build and deploy to stage server or run `npm run deploy:prod` to build and deploy to production server.

## To Update

- Run `npm i @angular/cli` to update Angular CLI.

- Run `ng update` to analyze your package.json.

- Run `ng update <package> <package> <...>` to update all packages.

## Testing

Run `ng test` to run tests.

---

## Resources

+ [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
+ [Semantic Versioning](https://semver.org/lang/es/)
+ [Changelog](https://keepachangelog.com/en/1.0.0/)
+ [SVG Compressor](https://vecta.io/nano)
+ [PNG and JPG Compressor](https://tinypng.com/)
+ [Quick Link](https://github.com/mgechev/ngx-quicklink#readme)
+ [Gravatar](https://es.gravatar.com/site/implement/images/)
