import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreateNote from "./components/CreateNote/CreateNote";
import Notes from "./components/Notes/Notes";
import Footer from "./components/Footer/Footer";
// eslint-disable-next-line
function App() {
 return (
<div className ="App">
<Header />
<CreateNote/>
<Notes/>
<Footer/>
</div>
);
}
export default App;