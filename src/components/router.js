import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import RegistrationForm from "./Registration/RegistrationForm";
import Home from "./Home/Home";


let routes = [
    {
      path: "/",
      component: Login,
      exact:true
    },
    {
      path: "/registration",
      component: RegistrationForm
    },
    {
      path: "/home",
      component: Home,  
      /*routes:[   ///嵌套路由/
        {
          path: "/user/",
          component: UserList
        },
        {
          path: "/user/add",
          component: UserAdd
        },
        {
          path: "/user/edit",
          component: UserEdit
        }
        ]*/
    },
    /*{
      path: "/news",
      component: News
    }*/
];

export default routes;




/*<Router>
    <Link to="/">首页</Link>
    <Link to="/login">新闻</Link>
    <Link to="/registration">商品</Link>


    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />    
    <Route path="/registration" component={RegistrationForm} />   

</Router>*/