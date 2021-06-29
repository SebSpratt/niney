# Nineyinterview

When I wrote this, I had imagined that I would click through it during the interview and talk about it.  So I'll list a few of the things that I had intended to mention here:

1. I would have done proper commits and commit messages if I had known you were going to see them haha
2. only one of the three table modules has been moved into the smart dumb component pattern, in a genuine project I would have all 3 table modules like this
3. the pipe is not used everywhere it could be just to visually show its effect
4. this website functions on all reasonable monitor sizes without using any media queries
5. should implement a loading overlay component for while the api is being called.  then during the api call we start by setting a loading state to true, read that state in the overview component, and then we can use a structural directive to display some sort of loading component instead of the empty table data.  This would fix the styling issue where the table changes size as the data loads in.
6. if I was going to carry on I would implement my own directive (just cause it's the only core angular class annotation that I haven't demonstrated) - probably using some sort of state to change the highlight colour (green if the table is filtered and blue if it isn't or something), which would really show the power of using directives for styling.  Also I would style the application above the absolute bare-bones.
7. I appreciate that there is some irritating scrolling behaviour, but fixing this is a design discussion rather than anything else so I decided it didn't matter.






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
