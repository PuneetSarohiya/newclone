import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import MainScreen from '../Components/pages/MainScreen'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../Components/features/userSlice';
import { auth } from '../firebase';
import ProfileScreen from '../Components/pages/ProfileScreen'
import Footer from "./Footer/Footer";


const Movies = React.lazy(() => import("./Movies/Movies"));
const SearchResults = React.lazy(() => import("./SearchResults"));
const MovieDetails = React.lazy(() =>
  import("./Movies/MovieDetails/MovieDetails")
);




const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundColor:'black'}}>



          {!user ? (
            <MainScreen />
          ) : (




        <div>
          <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <h1>Loading...</h1>
              </div>
            }
          >
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Movies
                    {...props}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                )}
              />
        <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route
                path="/search"
                render={(props) => (
                  <SearchResults {...props} setSearchTerm={setSearchTerm} />
                )}
              />
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </Suspense>
<Footer />
        </div>
          )}
      </div>
    </BrowserRouter>
  );
};

export default App;
