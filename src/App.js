import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux"; // Import Provider from react-redux

import "../src/css/App.css";
import About from "./About/About";
import Dirctors from "./Dirctors/Dirctors";
import Award from "./Award/Award";
import Openings from "./Openings/Openings";
import Cardah from "./Cardah/Cardah";
import KABC from "./KABC/KABC";
import KABC2 from "./KABC/KABC2";
import About2 from "./About/About2";
import Dirctors2 from "./Dirctors/Dirctors2";
import Award2 from "./Award/Award2";
import Openings2 from "./Openings/Openings2";
import Station from "./Station/Station";
import Filter from "./Filter/Filter";
import AccountSettings from "./Accountsetting/Accountsetting_h";
import FaqDetail from "./FAQ/Faqdetails_h";
import FAQPage from "./FAQ/Faqmain_h";
import FaqSearchresult from "./FAQ/Faqsearchresult_h";
import TermsAndConditions from "./TermsandCondition/Termandcondh";
import Workforus from "./WorkforUs/Workforus_h";
import Abouth from "./Popups/Profile_popups/About_h";
import ExperienceForm from "./Popups/Profile_popups/Experience_h";
import SkillsForm from "./Popups/Profile_popups/Skills_h";
import EducationForm from "./Popups/Profile_popups/Education_h";
import StationAboutForm from "./Popups/Station_profile_popups/Stationabout_h";
import NewsDirectorForm from "./Popups/Station_profile_popups/Newsdirector_h";
import AwardForm from "./Popups/Station_profile_popups/Award_h";
import JobOpeningForm from "./Popups/Station_profile_popups/Jobopening_h";
import SubmitNewsDirectorForm from "./Popups/Submitpopup_h/SubmitDirector_h";
import ApplyForm from "./Popups/Submitpopup_h/Apply_h";
import Header from "./Header/Header";
import Reportersd from "./reportersd/Reportersd";
import { Homepage } from "./Home/Homepage";
import Newsletter from "./Newsletter/Newsletter";
import NewsletterArticle from "./NewsletterArticle/NewsletterArticle";
import NewsletterArticleAdmin from "./NewsletterArticle/NewsletterArticleadmin";

import Viewjob from "./Viewjob/Viewjob";
import Shop from "./Shop/Shop";
import Viewjobdetail from "./Viewjobdetail/Viewjobdetail";
import Contactus from "./Contactus/Contactus";
import Jobopening from "./Jobopening/Jobopening";
import StationSearchResult from "./StationSearchResult/StationSearchResult";
import DirectorSearchResult from "./DirectorSearchResult/DirectorSearchResult";
import MyCartSD from "./MyCartSD/MyCartSD";
import EmployerLoginPg from "./EmployerLoginPg/EmployerLoginPg";
import EmployerRegisterPage from "./EmployerRegisterPage/EmployerRegisterPage";
import SubcriptionPage from "./SubcriptionPage/SubcriptionPage";
import SubmitAStationForm from "./SubmitAStationForm/SubmitAStationForm";
import About1 from "./About/About1";
import Reportersd2 from "./reportersd/Reportersd2";
import Chartah1 from "./Chart/Chartah1";
import Chartah2 from "./Chart/Chartah2";
import Chartah3 from "./Chart/Chartah3";
import Assistantah from "./Assistantah/Assistantah";
import Aboutah1 from "./About/Aboutah1";
import KABCah from "./KABC/KABCah";
import Experianceah from "./Experianceah/Experianceah";
import Skillsah from "./Skills/Skillsah";
import Educationah from "./Educationah/Educationah";
import KABCah1 from "./KABC/KABCah1";
import Aboutah2 from "./About/Aboutah2";
import Cardah2 from "./Cardah/Cardah2";
import Cardah3 from "./Cardah/Cardah3";
import Scheduleah from "./Scheduleah/Scheduleah";
import Stationsnaw from "./Stationsah/Stationsnaw";
import Footerah from "./footerah/Footerah";
import Buyerah from "./Buyerah/Buyerah";
import Cooperah from "./Cooperah/Cooperah";
import Cooperah1 from "./Cooperah/Cooperah1";
import RateThisProd from "./Popups/Rate_popup_h/Ratepopup_h";
import StationInfoForm from "./Popups/Info_popup_h/Stationinfo_h";
import UserInfoForm from "./Popups/Info_popup_h/Userinfo_h";
import DirectorInfoForm from "./Popups/Info_popup_h/Directorinfo_h";
import Sweatshirtah from "./Sweatshirtah/Sweatshirtah";
import Header1 from "./Header/Header2";
import Saveshare from "./Popouts/Save_pop_h";
import Editdel from "./Popouts/Edit_pop_h";
import Previewh from "./Popouts/Preview_pop_h";
import RmsHeader from "./Rmsheader/RmsHeader";
import RmsHeaderAlt from "./Rmsheader/RmsHeaderalt";
import ProductDashboard from "./admin/ProductDashboard";
import CuponsDashoard from "./admin/CuponsDashoard";
import OrderDashboard from "./admin/OrderDashboard";
import SettingDashboard from "./admin/SettingDashboard";
import ReportRatingDashboard from "./admin/ReportRatingDashboard";
import ReportedArticleDashboard from "./admin/ReportedArticleDashboard";
import ReportedDms from "./admin/ReportedDms";
import PagesDashboard from "./admin/PagesDashboard";
import BillingDashboard from "./admin/BillingDashboard";
import NewsletterDashboard from "./admin/NewsletterDashboard";
import JobOpenNewsroom from "./admin/jobOpenNewsroomh";
import JobOpenRateh from "./admin/JobRateStationh";
import DashHomeh from "./admin/DashboardHomeh";
import DashStationRating from "./admin/DashboardStationRatingh";
import DashInsightSech from "./admin/DashboardInsighth";
import AdminHeader from "./admin/AdminHeader/AdminHeader";
import AdminSidebarh from "./admin/AdminSidebar/AdminSidebarh";
import Btn from "./admin/btn";
import Dash1ah from "./admin/dash1ah";
import Dash2ah from "./admin/dash2ah";
import Dash3ah from "./admin/dash3ah";
import Dash4ah from "./admin/dash4ah";
import Dash5ah from "./admin/dash5ah";
import Dash6ah from "./admin/dash6ah";
import Dash7ah from "./admin/dash7ah";
import Dash8ah from "./admin/dash8ah";
import Dash9ah from "./admin/dash9ah";
import Orders from "./admin/Orders_popup";
import WooStatistich from "./admin/WooStatistich";
import MainLayouts from "./admin/layout/Mainlayouts";
import Dashbord from "./admin/dashboard";
import AdminManagement from "./admin/AdminManagement";
import Chat from "./Sockets/Chats_Components/Chat";
import Seeprofile from "./KABC/seeprofile";
import Nazar from "./Popouts/nazar";  
import Viewjobdetailadmin from "./Viewjobdetail/Viewjobdetailadmin";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AdminFAQ from "./admin/AdminFAQ";
import RatingsListDashboard from "./admin/RattingsListDashboard";
import New1 from "./KABC/New1";

const stripePromise = loadStripe('pk_test_51ONGSUJf5CYoJPVsmhVV5W3GMEu0dVMj0RVrroS6aISJLVGYrMLe1D7LziLXPY3WgLsJRZOprKbUQzCb2kbVHWMm00dDxogEMK');
function App() {
  return (


  <Router>
      <Routes>
      <Route path="/ts" exact element={<Chat />} />
        <Route path="/saveshareh" exact element={<Saveshare />} />
        <Route path="/Editdelh" exact element={<Editdel />} />
        <Route path="/Previewh" exact element={<Previewh />} />
        <Route path="/rmsheader" exact element={<RmsHeader />} />
        <Route path="/rmsheaderalt" exact element={<RmsHeaderAlt />} />
        <Route path="/" exact element={<Homepage />} />
        <Route path="/kabc/:id" exact element={<KABC />} />
        <Route path="/kabc2" exact element={<KABC2 />} />
        <Route path="/seeprofile" exact element={<Seeprofile />} />

        <Route path="/Nazar" exact element={<Nazar/>} />
        <Route path="/kabcah" exact element={<KABCah />} />
        <Route path="/kabcah1" exact element={<KABCah1 />} />
        <Route path="/New1/:id" exact element={<New1 />} />
        <Route path="/Header" exact element={<Header />} />
        <Route path="/Header1" exact element={<Header1 />} />
        <Route path="/Footerah" exact element={<Footerah />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/About1" exact element={<About1 />} />
        <Route path="/About2" exact element={<About2 />} />
        <Route path="/Aboutah1" exact element={<Aboutah1 />} />
        <Route path="/Aboutah2" exact element={<Aboutah2 />} />
        <Route path="/Dirctors" exact element={<Dirctors />} />
        <Route path="/Dirctors2" exact element={<Dirctors2 />} />
        <Route path="/Award" exact element={<Award />} />
        <Route path="/Award2" exact element={<Award2 />} />
        <Route path="/Openings" exact element={<Openings />} />
        <Route path="/Openings2" exact element={<Openings2 />} />
        <Route path="/Cardah" exact element={<Cardah />} />
        <Route path="/Station" exact element={<Station />} />
        <Route path="/Filter" exact element={<Filter />} />
        <Route path="/" exact element={<Homepage />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/newsletterarticle" exact element={<NewsletterArticle />}/>
        <Route path="/newsletterarticleadmin" exact element={<NewsletterArticleAdmin />}/>

        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/viewjobdetailadmin" exact element={<Viewjobdetailadmin />} />

        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route path="/StationSearchResult" exact element={<StationSearchResult />} />
        <Route path="/DirectorSearchResult"  exact element={<DirectorSearchResult />}/>
        <Route path="/mycart" exact element={<MyCartSD />} />
        <Route path="/employerlogin" exact element={<EmployerLoginPg />} />
        <Route path="/employerregister" exact element={<EmployerRegisterPage />} />
        {/* <Route path="/subscription" exact element={<SubcriptionPage />} /> */}


        <Route
          path="/subscription"
          element={
            <Elements stripe={stripePromise}>
              <SubcriptionPage />
            </Elements>
          }
        />
      
        <Route path="/submitstaionform" exact element={<SubmitAStationForm />}/>
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/newsletterarticle" exact element={<NewsletterArticle />} />
        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route path="/StationSearchResult" exact element={<StationSearchResult />}/>
        <Route path="/DirectorSearchResult" exactelement={<DirectorSearchResult />}/>
        <Route path="/mycart" exact element={<MyCartSD />} />
        <Route path="/employerlogin" exact element={<EmployerLoginPg />} />
        <Route path="/employerregister" exact element={<EmployerRegisterPage />}/>
        <Route path="/subscription" exact element={<SubcriptionPage />} />
        <Route path="/submitstaionform"  exact element={<SubmitAStationForm />}/>
        <Route path="/reportersd" exact element={<Reportersd />} />
        <Route path="/home" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/accountsettingh" exact element={<AccountSettings />} />
        <Route path="/faqmainh" exact element={<FAQPage />} />
        <Route path="/faqdetailh" exact element={<FaqDetail />} />
        <Route path="/faqsearchresulth" exact element={<FaqSearchresult />} />
        <Route path="/termandconditionh"  exact element={<TermsAndConditions />}/>
        <Route path="/termandconditionh" exact element={<TermsAndConditions />} />
        <Route path="/workforush" exact element={<Workforus />} />
        <Route path="/abouth" exact element={<Abouth />} />
        <Route path="/experienceh" exact element={<ExperienceForm />} />
        <Route path="/skillsh" exact element={<SkillsForm />} />
        <Route path="/educationh" exact element={<EducationForm />} />
        <Route path="/stationabouth" exact element={<StationAboutForm />} />
        <Route path="/newsdirectorh" exact element={<NewsDirectorForm />} />
        <Route path="/awardh" exact element={<AwardForm />} />
        <Route path="/jobopeningh" exact element={<JobOpeningForm />} />
        <Route path="/submitnewsdirectorh" exact element={<SubmitNewsDirectorForm />}/>
        <Route path="/applyformh" exact element={<ApplyForm />} />
        <Route path="/stationinfoh" exact element={<StationInfoForm />} />
        <Route path="/userinfoh" exact element={<UserInfoForm />} />
        <Route path="/jobopennewsroomh" exact element={<JobOpenNewsroom />} />
        <Route path="/jobopenrateh" exact element={<JobOpenRateh />} />
        <Route path="/Dashboardhomeh" exact element={<DashHomeh />} />
        <Route path="/Dashboardstationratingh" exact element={<DashStationRating />}/>
        <Route path="/Dashboardinsighth" exact element={<DashInsightSech />} />
        <Route path="/WooStatistics" exact element={<WooStatistich />} />
        <Route path="/adminheaderh" exact element={<AdminHeader />} />
        <Route path="/adminsidebarh" exact element={<AdminSidebarh />} />
        <Route path="/directorinfoh" exact element={<DirectorInfoForm />} />
        <Route path="/Chartah1" exact element={<Chartah1 />} />
        <Route path="/Chartah2" exact element={<Chartah2 />} />
        <Route path="/Chartah3" exact element={<Chartah3 />} />
        <Route path="/Assistantah" exact element={<Assistantah />} />
        <Route path="/Experianceah" exact element={<Experianceah />} />
        <Route path="/Skillsah" exact element={<Skillsah />} />
        <Route path="/Educationah" exact element={<Educationah />} />
        <Route path="/Cardah2" exact element={<Cardah2 />} />
        <Route path="/Cardah3" exact element={<Cardah3 />} />
        <Route path="/Stationsnaw" exact element={<Stationsnaw />} />
        <Route path="/Buyerah" exact element={<Buyerah />} />
        <Route path="/Cooperah" exact element={<Cooperah />} />
        <Route path="/Cooperah1" exact element={<Cooperah1 />} />
        <Route path="/reportersd2" exact element={<Reportersd2 />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/newsletterarticle" exact element={<NewsletterArticle />}/>
        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route path="/stationsearchresult" exact element={<StationSearchResult />}/>
        <Route path="/directorsearchresult" exact element={<DirectorSearchResult />}/>
        <Route path="/FAQ" exact element={<FAQPage />} />
        <Route path="/StationSearchResult" exact element={<StationSearchResult />}/>
        <Route path="/DirectorSearchResult" exact element={<DirectorSearchResult />}/>
        <Route path="/productdetail" exact element={<Sweatshirtah />} />
        <Route path="/stationsearchresult" exact element={<StationSearchResult />}/>
        <Route  path="/directorsearchresult"  exact element={<DirectorSearchResult />}/>
        <Route path="/FAQ" exact element={<FAQPage />} />
        <Route path="/StationSearchResult"  exact element={<StationSearchResult />}/>
        <Route path="/DirectorSearchResult" exact element={<DirectorSearchResult />}/>
        <Route path="/rateh" exact element={<RateThisProd />} />
        <Route path="/Sweatshirtah" exact element={<Sweatshirtah />} />
        <Route path="/productdashboard" exact element={<ProductDashboard/>} />
        <Route path="/cuponsdashoard" exact element={<CuponsDashoard/>} />
        <Route path="/orderdashboard" exact element={<OrderDashboard/>} />
        <Route path="/settingdashboard" exact element={<SettingDashboard/>} />
        <Route path="/reportratingdashboard" exact element={<ReportRatingDashboard/>} />
        <Route path="/reporteddms" exact element={<ReportedDms/>} />
        <Route path="/reportedarticledashboard" exact element={<ReportedArticleDashboard/>} />
        <Route path="/pagesdashboard" exact element={<PagesDashboard/>} />
        <Route path="/billingdashboard" exact element={<BillingDashboard/>} />
        <Route path="/newsletterdashboard" exact element={<NewsletterDashboard/>} />




        <Route path="/Dashbord" element={<MainLayouts />}>
        <Route index element={<DashHomeh />} />
        <Route path="DashHomeh" element={<DashHomeh />} />
        <Route path="Dash1ah" element={<Dash1ah />} />
        <Route path="Dash2ah" element={<Dash2ah />} />
        <Route path="Dash3ah" element={<Dash3ah />} />
        <Route path="Dash4ah" element={<Dash4ah />} />
        <Route path="Dash5ah" element={<Dash5ah />} />
        <Route path="Dash6ah" element={<Dash6ah />} />
        <Route path="Dash7ah" element={<Dash7ah />} />
        <Route path="Dash8ah" element={<Dash8ah />} />
        <Route path="DashStationRating" element={<DashStationRating />} />
        <Route path="Dash9ah" element={<Dash9ah />} />
        <Route path="DashInsightSech" element={<DashInsightSech />} />
        <Route path="JobOpenNewsroom" element={<JobOpenNewsroom />} />
        <Route path="JobOpenRateh" element={<JobOpenRateh />} />
        <Route path="WooStatistich" element={<WooStatistich />} />
        <Route path="ProductDashboard" element={<ProductDashboard />} />
        <Route path="OrderDashboard" element={<OrderDashboard />} />
        <Route path="CuponsDashoard" element={<CuponsDashoard />} />
        <Route path="SettingDashboard" element={<SettingDashboard />} />
        <Route path="ReportRatingDashboard" element={<ReportRatingDashboard />} />
        <Route path="ReportedDms" element={<ReportedDms />} />
        <Route path="ReportedArticleDashboard" element={<ReportedArticleDashboard />} />
        <Route path="PagesDashboard" element={<PagesDashboard />} />
        <Route path="NewsletterDashboard" element={<NewsletterDashboard />} />
        <Route path="adminFAQ" element={<AdminFAQ />} />

        <Route path="AdminManagement" element={<AdminManagement />} />
        <Route path="BillingDashboard" element={<BillingDashboard />} />
        <Route path="ratingslist" element={<RatingsListDashboard />} />

      </Route>


      
        {/* </Routes> */}
        {/* admin-routesadmin-routesadmin-routesadmin-routesadmin-route
        admin-routesadmin-routesadmin-routesadmin-routesadmin-routes
        admin-routesadmin-routesadmin-routesadmin-routesadmin-routes
        admin-routesadmin-routesadmin-routesadmin-routesadmin-routes */}


        {/* admin-routesadmin-routesadmin-routesadmin-routesadmin-route
          admin-routesadmin-routesadmin-routesadmin-routesadmin-routes
          admin-routesadmin-routesadmin-routesadmin-routesadmin-routes
          admin-routesadmin-routesadmin-routesadmin-routesadmin-routes */}


        {/* <Route path="/btn" exact element={<Btn  />} /> 
        <Route path="/Orders_popup" exact element={<Orders />} />
        <Route path="/dah1" exact element={<Dash1ah />} />
        <Route path="/dah2" exact element={<Dash2ah />} />
        <Route path="/dah3" exact element={<Dash3ah />} />
        <Route path="/dah4" exact element={<Dash4ah />} />
        <Route path="/dah5" exact element={<Dash5ah />} />
        <Route path="/dah6" exact element={<Dash6ah />} />
        <Route path="/dah7" exact element={<Dash7ah />} />
        <Route path="/dah8" exact element={<Dash8ah />} />
        <Route path="/dah9" exact element={<Dash9ah />} /> */}
        {/* <Routes> */}

      </Routes>

      
  </Router>


  );
}

export default App;
