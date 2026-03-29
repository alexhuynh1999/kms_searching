---
description: How to deploy the KMS YouTube Searcher using GitHub Actions
---

To automate your deployment with GitHub Actions, follow these steps:

1. **Create the Workflow File**:
   I've already created a file at `.github/workflows/deploy.yml`. This file contains the instructions for GitHub to build and deploy your app every time you push to the `main` branch.

2. **Push your changes to GitHub**:
   Make sure you commit and push the newly created `.github` folder to your repository:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

3. **Check the Actions tab**:
   - Go to your repository on GitHub.
   - Click on the **Actions** tab.
   - You should see a "Deploy to GitHub Pages" workflow running.

4. **GitHub Pages Settings**:
   - Once the action finishes, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, ensure the source is set to `gh-pages` and the folder is `/ (root)`.

Your app will now automatically update every time you push code to the `main` branch!
