import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from './components/Profile/Profile';
import Footer from "./components/Footer/Footer";
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import My_friends from './components/My_friends/My_friends';
import { Route } from "react-router-dom";

const App = (props) => {

  return (
    <div className="background">
      <div className="main">
        <Header />
        <Nav />
        <div>
          <Route path='/my_profile' render={() => <Profile
            newPostText={props.state.newPostText}
            postsData={props.state.postsData}

            dispatch={props.dispatch} />} />

          <Route path='/my_dialogs' render={() => <Dialogs
            dialogsData={props.state.dialogsData}
            messagesData={props.state.messagesData} />} />
          <Route path='/my_music' render={() => <Music />} />
          <Route path='/my_settings' render={() => <Settings />} />
          <Route path='/my_friends' render={() => <My_friends />} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
