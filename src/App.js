import "./App.css";
import NAV from "./components/nav";
import CONTENT from "./components/content";

function App() {
  return (
    <div className="App">
   
      <NAV />
      <div className="container">
        <div>
          <img alt="illustration" src="https://s3-alpha-sig.figma.com/img/0323/0137/1c7fa94a9e90b823584d2abd4bf98857?Expires=1642982400&Signature=L2g2C-kcN5sjtUegP2zjo7Oa9JptWBFLadQ2w1IoonWHkp0RnItwFXjOvkM7KtxMB62iWIzZI36ZqjAxPB11uxS4V0q0fA4PfhqFf7hV7-ccTPZ1lozm5AA~npjyp-8yo19LRc~mz6xfkMG6pw5kHQN6OnszusCbj2tgVOgFgL8nLLq~mMKEHZDfc2ox9tV5BB~XLVzejENM6imMm4mptMRsZHVms4aG46mLZuYJoaWJMGnTAXlPXhS2Y~kO1XYtvvA75o-ky8vi8wVdkNoAkd3gZbDEq0ntjaCDc-yuytBhpBjh7T~yFtJdHXs-gkjwJhyzib4Hji1Tl504MO8W-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

        </div>
        <div className="content">
          <h1>CAMPUS  AMBASSADOR  PROGRAMME</h1>
          <h2>National Social Summit, IIT Roorkee</h2>
          <div className="line2"></div>
          <div className="content-child">
              <CONTENT />
          </div>
          <div className="line2"></div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiPAOOZMsEe33ZAKuGIxcqlv7umxUjOVCy0UkqieVz3oRkNQ/viewform?usp=sf_link"><button className="Register">Register</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;
