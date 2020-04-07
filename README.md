# HTML5 Documentation

Good looking documentation page for HTML5.

## Screenshots

<img src="https://github.com/shimphillip/html5-documentation/blob/master/html5-documentation.gif" />

## User stories

1. User can navigate to any html tags through navbar.
2. The navbar shows currently selected page.
3. Code highlighting.
4. Responsive.

### Todo list

1. Improve performance

## Tech stack

- React
- Next.js
- React hooks
- react-responsive

## Lessons I learned

- Next.js is server rendered, you don't have to spin up a server though :p
- Because it's server rendered, initial pageload is faster but navigating to different pages surely does take longer because of network requests.
- Next.js supports same file stlye changes with <style jsx> tags, very convenient.
- Good SEO

## Credits

- W3Schools for documentation texts.
- Amazing official docs by Zeit team.
- PrismJS

## Running a local copy of the app

- Clone the repo

  ```bash
  git clone https://github.com/shimphillip/html5-documentation.git
  cd html5-documentation
  ```

- Install the dependencies

  ```bash
  yarn install
  ```

  `or`

  ```bash
  npm install
  ```

- Start a development server

  ```bash
  yarn dev
  ```

  `or`

  ```bash
  npm run dev
  ```

- Build for production
  ```bash
  yarn build
  ```
  `or`
  ```bash
  npm run build
  ```
