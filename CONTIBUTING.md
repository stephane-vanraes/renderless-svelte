# Contributing

The goal of this repository/library is to collect Renderless Components for Svelte, enabling developers to solve common tasks quickly.  To contribute to this collection, simply fork the project, make your changes and make a Pull Request to `staging`! (very important, maintainers will take care of versioning)

## Implementing

Just add the file to the src folder `/src/<your-component>.svelte`

Then add it to `/src/index.js` as well

## Documentation

All documentation goes in `/docs/<your-component>.md`

Remember to add a link to this file in [README](./README.md)

## Website

The website should of course also have documentation, adding this is a bit more complicated.

1) Create a folder under routes for your component
2) Add an `index.svx` file and write documentation there (or copy it from the other file)
3) Add a `<NavItem>` tag to the navigation in `/site/src/components/Nav.svelte`
4) [optional] Add sample pages
5) [optional] Add those samples in the navigation as well

Alternatively, just have a look at how the other components are done ;)
