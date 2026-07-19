# Manisumanth Kalle — Portfolio

A simple, dark-mode "code editor" themed portfolio site. Plain HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — page content
- `style.css` — styling
- `script.js` — typed-name effect + mobile menu
- `assets/Manisumanth_Kalle_Resume.pdf` — downloadable resume

## 1. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Manisumanth/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repo on GitHub first at github.com/new — don't add a README/license there, or the push will conflict.)

## 2. Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select your `portfolio` repo.
4. Framework Preset: choose **Other** (it's plain HTML, no build needed).
5. Leave Build Command and Output Directory blank.
6. Click **Deploy**.

Vercel gives you a live URL like `portfolio-manisumanth.vercel.app`. Every future `git push` to `main` auto-redeploys.

## To customize later
- Replace project GitHub links in `index.html` (`#projects` section) with your actual repo URLs once each project has its own repo.
- Add a LinkedIn / LeetCode link in the `#contact` section the same way the GitHub card is written.
- Swap the resume PDF in `assets/` any time — keep the same filename or update the link in `index.html`.
-