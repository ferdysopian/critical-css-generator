# Critical CSS Generator

This Node.js script uses Penthouse to generate critical CSS for optimizing web page loading performance. It extracts critical CSS for specified mobile and desktop viewports.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/critical-css-generator.git
cd critical-css-generator
```

2. Install dependencies:

```bash
yarn install
```

3. Configure the script:

   - Set the target URL in the `url` variable.
   - Specify the path to your CSS file or directly input the CSS in the `cssInput` variable.

   **Example for file path:**
   ```javascript
   const cssInput = 'path/to/your/style.css'; // Replace with the path to your CSS file
   ```

   **Example for CSS input:**
   ```javascript
   const cssInput = `
      body {
         font-family: 'Arial', sans-serif;
         /* Your CSS styles here */
      }
   `;
   ```

4. Run the script:

```bash
yarn run criticalcss
```

5. Viewports and output files:

   - Mobile viewport: `output-critical-mobile.css`
   - Desktop viewport: `output-critical-desktop.css`

## Dependencies

- [Penthouse](https://github.com/pocketjoso/penthouse): Critical Path CSS Generator

## License

This project is licensed under the MIT License