Install

First, install Prettier locally:
npm install --save-dev --save-exact prettier
Then, create an empty config file to let editors and other tooling know you are using Prettier:

echo {}> .prettierrc.json

Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

# Ignore artifacts:
build
coverage
Now, format all files with Prettier:
npx prettier --write .