/**
 * @file App.jsx
 * @description Main application controller. Handles client-side URL routing via React Router and acts as the root layout provider.
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports mapping different routes of Saurashtra University Startup And Entrepreneurship Council
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import IIC from './pages/IIC';
import Benefits from './pages/Benefits';
import FabLab from './pages/FabLab';
import SSIP from './pages/SSIP';
import GranteeList from './pages/GranteeList';
import IncubateeList from './pages/IncubateeList';
import IPRSupport from './pages/IPRSupport';
import IPRBeneficiary from './pages/IPRBeneficiary';
import PatentListSU from './pages/PatentListSU';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Achievements from './pages/Achievements';
import Resources from './pages/Resources';
import Career from './pages/Career';
import Reports from './pages/Reports';
import Mentor from './pages/Mentor';
import Contact from './pages/Contact';
import GranteeData from './pages/GranteeData';
import Apply from './pages/Apply';

/**
 * App component setting up structure including persistent Header, 
 * page Routes switcher container, and dynamic Footer layout.
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navigation header drawer layout */}
        <Header />
        
        {/* Pages switch layout container */}
        <main className="main-content">
          <Routes>
            {/* Primary landing path */}
            <Route path="/" element={<Home />} />
            
            {/* Core institutional details routes */}
            <Route path="/about" element={<About />} />
            <Route path="/members/team" element={<Team />} />
            <Route path="/members/iic" element={<IIC />} />
            
            {/* Academic, financial, and incubation facility routes */}
            <Route path="/benefits/all" element={<Benefits />} />
            <Route path="/benefits/fablab" element={<FabLab />} />
            <Route path="/startup/ssip" element={<SSIP />} />
            <Route path="/startup/grantees" element={<GranteeList />} />
            <Route path="/startup/incubatees" element={<IncubateeList />} />
            
            {/* Intellectual Property Rights (IPR) routes */}
            <Route path="/ipr/:type" element={<IPRSupport />} />
            <Route path="/ipr/ssip-filing" element={<IPRBeneficiary />} />
            <Route path="/ipr/patent-list" element={<PatentListSU />} />
            
            {/* Miscellaneous details and activities routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/latest/events" element={<Events />} />
            <Route path="/latest/events/:id" element={<Events />} />
            <Route path="/latest/faq" element={<FAQ />} />
            <Route path="/latest/achievements" element={<Achievements />} />
            <Route path="/latest/achievements/:id" element={<Achievements />} />
            <Route path="/latest/resources" element={<Resources />} />
            <Route path="/latest/career" element={<Career />} />
            <Route path="/latest/reports" element={<Reports />} />
            <Route path="/latest/grantee-data" element={<GranteeData />} />
            <Route path="/latest/mentor" element={<Mentor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply/:formSlug" element={<Apply />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        
        {/* Global Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
