const generateHTML = (pagename) => {
  return `
    <section class="page_404">
    
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center">404</h1>
		    
		
		</div>
		
		<div class="contant_box_404">
       
		<h3 class="h2">
		Look like you're distracted by
		</h3>
		
		<p>${pagename} ! Be Productive Stay Focused !!</p>
		
		<div  class="link_404" id="goToHome">No ${pagename} page until you complete work</div>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    
    
    
    
    
    `;
};
const generateSTYLING = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
      
    .page_404{ padding:40px 0; 
        background:#fff; 
        font-family: 'Arial', sans-serif; 
        height:100vh;
}



.four_zero_four_bg{
    background-image: url("./gif.webp");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
 }
 
 
 .four_zero_four_bg h1{
 font-size:80px;

 }
 
  .four_zero_four_bg h3{
             font-size:80px;
             }
             
.link_404{			 
    color: #fff!important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    text-decoration: none; 
    display: inline-block;
    
}
    .contant_box_404{ margin-top:-50px;
      
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:40px;
    }
    
    `;
  return styleElement;
};
document.head.appendChild(generateSTYLING());
switch (window.location.hostname) {
  case "www.youtube.com":
   
    document.body.innerHTML = generateHTML("Youtube");
    break;
  case "www.facebook.com":
    
    document.body.innerHTML = generateHTML("facebook");
    break;
  case "www.netflix.com":
  
    document.body.innerHTML = generateHTML("netflix");
    break;
  case "www.twitter.com":
 
    document.body.innerHTML = generateHTML("twitter");
    break;
  case "www.instagram.com":
   
    document.body.innerHTML = generateHTML("instagram");
    break;
  case "www.twitch.com":

    document.body.innerHTML = generateHTML("twitch");
    break;
}
