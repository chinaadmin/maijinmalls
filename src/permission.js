import router from './router'
import store from './store'



router.beforeEach((to, from, next) => {
	
	  if (to.path === '/init/my') {
	  	store.state.vux.tabNum = 2 ;
	  	 next();
	  } if(to.path === '/init/brand'){
	  		store.state.vux.tabNum = 1 ;
	  	    next();
	  }if(to.path === '/init/home'){
	  		store.state.vux.tabNum = 0 ;
	  	    next();
	  }else{
	  	 next();
	  }
	   
})