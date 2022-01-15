import React from 'react';

const Home = () => (
  	<div>
	  <div class="slds-grid slds-wrap">
		  <div class="slds-col slds-size_2-of-12"></div>
		  <div class="slds-col slds-size_8-of-12">
			    <article class="slds-card">
		  			<div class="slds-card__header slds-grid">
		  				<header class="slds-media slds-media_center slds-has-flexi-truncate">
		  					<div class="slds-media__body">
		  						<h2 class="slds-card__header-title">
		  							<a href="#" class="slds-card__header-link slds-truncate" title="Accounts">
		  								<span>Archive Salesforce Data with Heroku!</span>
		  							</a>
		  						</h2>
		  					</div>
		  					<div class="slds-no-flex">
		  						<span><i>INSTRUCTIONS</i></span>
		  					</div>
		  				</header>
		  			</div>
		  			<div class="slds-card__body slds-card__body_inner">
						<div class="slds-text-longform">
  							<h3 class="slds-text-heading_small">This demo uses Heroku Connect, Salesforce Connect, and a small bit of custom code to archive Salesforce data on Heroku Postgres!</h3>
							<p>It then uses Salesforce Connect and OData to read the archived data in Salesforce without taking up storage space.</p>
							<h3>Follow the steps in the slideshow below to setup this demo for yourself, or view a recording of this demo below.</h3>
						</div>
					</div>
		  			<footer class="slds-card__footer">
		  				<p>Heroku Architects</p>
		  			</footer>
		  		</article>
		  </div>
		  <div class="slds-col slds-size_2-of-12"></div>
	  </div>
	</div>
);

export default Home;
