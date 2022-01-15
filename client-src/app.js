import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation
} from 'react-router-dom';
import Home from './home';
import Demovid from './demovid';

function NavBarMarkup() {
	let location = useLocation();
	console.log(location.pathname);
	console.log("location!!!");
	if(location.pathname == '/instructions') {
		return (
	  	  <header>
	  		<div class="slds-context-bar">
	  		  <div class="slds-context-bar__primary">
	  		    <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
	  		      <span class="slds-context-bar__label-action slds-context-bar__app-name">
	  		        <span class="slds-truncate" title="App Name">Archive Demo</span>
	  		      </span>
	  		    </div>
	  		  </div>
	  		  <nav class="slds-context-bar__secondary" role="navigation">
	  		    <ul class="slds-grid">
	  		      <li class="slds-context-bar__item">
	  				  <Link to="/" className="slds-context-bar__label-action"><span class="slds-truncate" title="Menu Item">Demo Video</span></Link>
	  		          {' '}
	  		      </li>
  	  		      <li class="slds-context-bar__item slds-is-active">
  	  				  <Link to="/instructions" className="slds-context-bar__label-action"><span class="slds-truncate" title="Instructions">Instructions</span></Link>
  	  		          {' '}
  	  		      </li>
	  		    </ul>
	  		  </nav>
	  		</div>
	        </header>
	    );
	} else {
		return (
	  	  <header>
	  		<div class="slds-context-bar">
	  		  <div class="slds-context-bar__primary">
	  		    <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
	  		      <span class="slds-context-bar__label-action slds-context-bar__app-name">
	  		        <span class="slds-truncate" title="App Name">Archive Demo</span>
	  		      </span>
	  		    </div>
	  		  </div>
	  		  <nav class="slds-context-bar__secondary" role="navigation">
				<ul class="slds-grid">
  	  		      <li class="slds-context-bar__item slds-is-active">
  	  				  <Link to="/" className="slds-context-bar__label-action"><span class="slds-truncate" title="Menu Item">Demo Video</span></Link>
  	  		          {' '}
  	  		      </li>
    	  		      <li class="slds-context-bar__item">
    	  				  <Link to="/instructions" className="slds-context-bar__label-action"><span class="slds-truncate" title="Instructions">Instructions</span></Link>
    	  		          {' '}
    	  		      </li>
  	  		    </ul>
	  		  </nav>
	  		</div>
	        </header>
	    );
	}

}

const App = () => (
  <Router>
    <div>
      <NavBarMarkup />
      <main>
        <Switch>
          <Route exact path="/" component={Demovid} />
		  <Route exact path="/instructions" component={Home} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
