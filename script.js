/* DOM nodes */
const html   = document.getElementById("html");
const css    = document.getElementById("css");
const js     = document.getElementById("js");
const runBtn = document.getElementById("run-btn");
const preview = document.getElementById("preview");

/* function to build & display the preview */
function run() {
  preview.srcdoc = `
    <html>
      <head><style>${css.value}</style></head>
      <body>
        ${html.value}
        <script>${js.value}<\/script>
      </body>
    </html>
  `;
}

/* Run button listener */
runBtn.addEventListener("click", run);

/* initial demo content */
html.value = "<h1>Hello, dude!</h1>";
css.value  = `
  body {
    background:#121212;
    color:#00f7ff;
    font-family: 'Segoe UI', sans-serif;
    text-align:center;
    margin-top:10vh;
    font-size:2.5rem;
  }
`;
js.value   = "console.log('Editor ready!');";
run();      // show demo on first load
