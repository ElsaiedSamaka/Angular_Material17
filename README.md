# Eden Angular 17 Template ·

This is an advanced and comprehensive tool for efficiently bootstrapping Angular projects. Built for the latest version of Angular, this template offers a well-organized directory structure, ready for scalable development. Additionally, it features an integrated system to handle error pages and site maintenance states, providing a robust development experience and easing the creation of modern web applications. With clear requirements and simple installation.

## Prerequisites

- Node Package Manager 18.10.0 or later installed in your system.
  - Look at the [get npm guide](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) for more info.
- Angular CLI in [Angular](https://angular.io/).

## Step 1 - Install the Angular CLI

You are first going to need to install the Angular CLI (Command Line Interface) tool. The CLI helps you to start new Angular project as well as assist you during development. In your CMD (terminal) type:

```
npm install -g @angular/cli
```

## Step 2 - Clone the template

### If you are using GitHub Desktop:

1. On GitHub Desktop, click on "File" and then "Clone Repository."
2. Paste the URL of the repository you copied earlier into the "Repository URL" box.
3. Choose the local directory where you want to clone the repository.
4. Click the "Clone" button to initiate the cloning process.

### If you are using only Git Bash:

1. Open Git Bash in the directory where you want to clone the repository.
2. Enter the command `git clone` followed by the URL you copied:
   ```
   git clone https://github.com/....
   ```
3. Use the `cd` command to enter the directory of the cloned repository:
   ```
   cd Eden-material
   ```

## Step 3 - Install all packages

Install all packages and dependencies from package.json:

```
pnpm i
```

## Step 4 - Change project name

In Visual Studio Code open Search Tool, search for:

```
put-your-project-name
```

On replace type the name of your project.

## Folder Structure

The project follows a specific folder structure to ensure organization and clarity. Please adhere to the following guidelines:

- **`/src`**: Contains the source code of the project.

  - **`/app`**: Main application code.

    - **`/core`** : This folder often contains core functionalities that are not directly related to a specific feature or page. It's a good place to put services, guards, interceptors, and other pieces of code that are critical to the application but not tied to a particular feature.

      - **`/guards`** : Guards are used to control access to certain routes in your application. They can be placed here to keep the code organized.
      - **`/interceptors`** : Interceptors can be used to modify HTTP requests or responses globally. Placing them in this folder helps maintain a clean structure.
      - **`/models`** : This folder can contain data models used throughout the application. Defining models in one place makes it easier to manage and maintain consistency.

    * **`/pages`** : This folder is typically used for organizing pages or features of your application. Each feature might have its own subfolder containing components, views, and other files specific to that feature.
    * **`/shared`** : This folder is for components, services, or other pieces of code that are shared across multiple features. It helps to avoid duplication and ensures consistency in the application."

      - **`/components`**: This directory contains reusable UI components utilized across various features of the application. Organizing components here promotes reusability, maintains consistency in design patterns, and facilitates easier maintenance and development.
      - **`/styles`**: Housing global and component-specific stylesheets, this directory centralizes the styling resources for the application. Global stylesheets define overarching design principles, while component-specific stylesheets tailor the appearance of individual components, fostering a cohesive and visually appealing user interface.

  - **`/assets`**: Resources like images, fonts and databases.

    - **`/images`**: Stores image files used within the application. These include icons, graphics, and other visual elements.
    - **`/fonts`**: Holds font files utilized for typography and styling purposes in the application.

- **`/tests`**: Unit, integration, e2e and other tests.

## Project Organization

To maintain consistency and ease collaboration, the project follows the GitFlow branching model. The main branches are:

- **`master`**: Represents the production-ready code. Only merge into this branch after thorough testing.
- **`develop`**: The main branch for ongoing development. Feature branches branch off from here, and completed features are merged back.
- **`feat/branch-name`**: Feature branches for new features or enhancements. Always branch off from `develop`.
- **`bugfix/branch-name`**: Bugfix branches for resolving issues. Always branch off from `develop`.
- **`hotfix/branch-name`**: Hotfix branches for critical fixes in the production code. Branch off from `master`.

## Commit and Push Guidelines

To maintain a clean and well-documented version history, follow these guidelines:

1. **Feature Development:**

   - Create a new branch for each feature or enhancement.
   - Use clear and concise commit messages, adhering to the [Conventional Commits standard](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., 'feat:', 'fix:', 'docs:', 'chore:', 'enhance:' etc.).
   - Regularly push changes to the remote repository.

2. **Bug Fixes:**

   - Create a new branch for each bug fix.
   - Include a reference to the issue being addressed in your commit message.
   - Use clear and concise commit messages, following the Conventional Commits standard.
   - Push changes promptly.

3. **Code Review:**

   - Before merging into `develop` or `master`, ensure that your code has been reviewed.
   - Address feedback and retest.
   - Ensure commit messages follow the Conventional Commits standard.

4. **GitFlow Model:**

   - Strictly adhere to the GitFlow branching model.
   - Respect the roles and responsibilities defined by GitFlow.
   - Use Conventional Commits standard for commit messages.
   - Always run <code>npm run format</code> once you are done coding and before pushing.

By adhering to these guidelines, we can maintain a well-organized and collaborative development environment. If you have any questions or encounter issues, please refer to this documentation or reach out to the project team.

## Notes

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the dismiss calls
        this._fuseAlertService.onDismiss
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Dismiss the alert
                this.dismiss();
            });

        // Subscribe to the show calls
        this._fuseAlertService.onShow
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Show the alert
                this.show();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

---

<i>Happy Coding ;)<i>
