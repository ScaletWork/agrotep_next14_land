import AboutUsComponent from "@/pagesComponents/AboutUs";
import AutoParkComponent from "@/pagesComponents/AutoPark";
import CareersComponent from "@/pagesComponents/Careers";
import ContactsComponent from "@/pagesComponents/Contacts";
import Main from "@/pagesComponents/Main";
import ServicesComponent from "@/pagesComponents/Services";

const Home = () => {
  return (
    <>
      <Main />
      <AboutUsComponent />
      <AutoParkComponent />
      <ServicesComponent />
      <CareersComponent />
      <ContactsComponent />
    </>
  );
};

export default Home;
