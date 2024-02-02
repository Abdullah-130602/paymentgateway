import { lazy, Suspense, useEffect } from "react";

/// Components
import Index from "./jsx";
import ClientIndex from "./jsxClient/ClientIndex";
import { connect, useDispatch } from "react-redux";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
import { adminPrevilage } from "./store/selectors/AuthSelectors";
/// Style
//import './vendor/swiper/swiper-bundle.css';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { RequirementsProvider } from "./jsx/pages/Auth/Context/RequirementsProvider";

const Register = lazy(() => import("./jsx/pages/Auth/Pages/Register"));
const Requirements = lazy(() => import("./jsx/pages/Auth/Pages/Requirements"));
const Login = lazy(() => import("./jsx/pages/Auth/Pages/Login"));

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, [checkAutoLogin]); 

  let routesBlog = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/page-register" element={<Register />} />
      <Route
        path="/requirement/:id"
        element={
          <RequirementsProvider>
            <Requirements />
          </RequirementsProvider>
        }
      />
    </Routes>
  );

  if (props.isAuthenticated) {
    return (
      <>
        {props.adminPrevilage === "client" ? (
          <Suspense
            fallback={
              <div id="preloader">
                <div className="sk-three-bounce">
                  <div className="sk-child sk-bounce1"></div>
                  <div className="sk-child sk-bounce2"></div>
                  <div className="sk-child sk-bounce3"></div>
                </div>
              </div>
            }
          >
            <ClientIndex />
          </Suspense>
        ) : (
          <Suspense
            fallback={
              <div id="preloader">
                <div className="sk-three-bounce">
                  <div className="sk-child sk-bounce1"></div>
                  <div className="sk-child sk-bounce2"></div>
                  <div className="sk-child sk-bounce3"></div>
                </div>
              </div>
            }
          >
            <Index />
          </Suspense>
        )}
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          {routesBlog}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    adminPrevilage: adminPrevilage(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
