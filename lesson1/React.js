// const main = React.createElement("div", {className:"main"}, [
//     React.createElement("h1", {}, "Hello World"),
//     React.createElement("ul", {}, React.createElement("li", {}, "Second Comment"))
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(main);

const main = React.createElement("div",{className:"main"}, [
    React.createElement("h1", {className:logo}, "Developer")
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(main);