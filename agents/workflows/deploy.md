---
description: How to deploy the KMS YouTube Searcher to GitHub Pages
---

To deploy your application to GitHub Pages, follow these steps:

1. **Ensure your GitHub repository matches the homepage URL**:
   Your `package.json` currently has:
   `"homepage": "https://gooeyazn.github.io/kms_searching"`
   Make sure your repository on GitHub is named `kms_searching`.

2. **Deploy the application**:
   Run the following command in your terminal:
   ```bash
   npm run deploy
   ```
   This command will:
   - Run `npm run build` to create a production-ready bundle in the `build/` folder.
   - Use `gh-pages` to push the contents of the `build/` folder to a branch named `gh-pages` in your repository.

3. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, ensure the source is set to `gh-pages` (it usually does this automatically).

Once finished, your app will be live at the URL specified in your `homepage` field!
