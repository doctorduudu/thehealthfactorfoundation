import React, { Component } from "react";
import MedicalConsultancyImg from "../img/medical-consultancy.jpg";
import MedicalOutreachImg from "../img/medical-outreach.jpg";
import BloodDonationImg from "../img/blood-donation.jpg";
import HealthAdvocacyImg from "../img/health-advocacy.jpg";
import Title from "./common/title";
import ProgramCard from "./common/programCard";
import Form from "./common/form";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header id="header">
          <div className="container-fluid">
            <div className="row headerHeight align-items-center">
              <div className="col header-content text-white mx-5">
                <h1 className="display-4 text-capitalize">the health factor</h1>
                <h4>the health of the aged... our priority</h4>
                {/* <button
                  className="btn donate-btn text-uppercase bg-light my-3 mr-3"
                  aria-label="join our team"
                >
                  <a href="" className="text-danger">
                    <i className="fas fa-users mx-1"></i>join our team
                  </a>
                </button> */}
                <button
                  className="btn donate-btn text-uppercase bg-light my-3"
                  aria-label="donate"
                >
                  <a href="/donate" className="text-danger">
                    <i className="fas fa-dollar-sign mx-1"></i>donate
                  </a>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="programs">
          <div className="container-fluid mb-5">
            <Title title="What we do" />
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <ProgramCard
                  imgSrc={MedicalConsultancyImg}
                  title="Medical Consultancy"
                  url="/about#medical-consultancy"
                  summary="The myriad of health duties we execute as a team, enable us to refer intensive medical
conditions to our selfless specialists. The aim to help our topmost priorities (aged, less-
privileged and handicapped) inspire the ethical tool of beneficence, non-maleficence,
autonomy and jurisprudence."
                />
              </div>
              <div className="col-md-6 col-10 mx-auto">
                <ProgramCard
                  imgSrc={MedicalOutreachImg}
                  title="Medical Outreach"
                  url="/about#medical-outreach"
                  summary="The joy which fills the hearts of our cadre of medics and volunteers is the enthusiasm that
inspires our journey to the rural communities. These medical voyages inspired the theme,
“preventive medicine, our optimum goal”. In as much as the aged, less privileged and
handicapped were the topmost priorities: the sense of preventing diseases through thorough
health screening is imperative."
                />
              </div>
              <div className="col-md-6 col-10 mx-auto">
                <ProgramCard
                  imgSrc={BloodDonationImg}
                  title="Blood Donation"
                  url="/about#blood-donation"
                  summary="Donating blood is a vital way to help save lives especially the less privileged and aged. To attain
the 100 per cent voluntary blood donation target set by the World Health Organization to be
achieved the year 2020, we conduct blood donation exercises with the help of regional
hospitals. Recently, we embarked on a universities campus blood donation exercise tour to
encourage the youth on the essence of donating blood as a form of saving a life and a great

deal of emotional and physical stability."
                />
              </div>
              <div className="col-md-6 col-10 mx-auto">
                <ProgramCard
                  imgSrc={HealthAdvocacyImg}
                  title="Health Advocacy"
                  url="/about#health-advocacy"
                  summary="Health advocacy encompasses direct service to the individual or family as well as activities that
promote health and access to health care in communities and the larger public. As a team of
public health advocates, we support and promote the rights of the patient in the health care
arena, help build capacity to improve community health and enhance health policy initiatives
focused on available, safe and quality care."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container-fluid">
            <div className="row mb-5 no-gutters">
              <div className="col-md-6 aboutbg"></div>
              <div className="col-md-6 pl-2 text-center">
                <Title title="who we are" />
                <p className="about-text text-justify" id="about-text">
                  The Health Factor Foundation is a non-governmental and
                  charitable organization aimed at providing assistance in
                  primary health care for the aged, less privileged and
                  handicapped in the society. It comprises of passionate medical
                  professionals, nurses, allied health professionals and
                  selfless volunteers with requisite skills to contribute their
                  quota to impact the society via achieving the goals of the
                  organization. The slogan of the health factor foundation is,
                  “the health of the aged… our priority”.
                  <br /> <br />
                  As individuals grow, we are prone to uncomfortable working
                  conditions, stress, environmental pollution and other
                  detrimental factors that contribute to the downward-arching of
                  our immune system and health capacity as a whole. Our goal is
                  to promote health and well-being through educational
                  counselling, medical advocacy and timely detection and
                  treatment of a disease. In this vein, we are aimed at ensuring
                  that preventable deaths are reduced to the barest minimum.
                </p>
                <a href="/about#about-us">
                  <button
                    type="button"
                    className="button w-50 rounded btn-outline-danger"
                    aria-label="Continue Reading"
                  >
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="events">
          <div className="container-fluid mb-5">
            <Title title="events" />
            <div className="row">
              <div className="col-11 col-md-10 col-lg-5 border rounded mx-auto my-2">
                <h4 className="text-center text-capitalize text-danger">
                  upcoming event
                </h4>
                <img
                  src={MedicalOutreachImg}
                  className="img-fluid py-auto"
                  alt="upcoming event"
                />
              </div>

              <div className="col-11 col-md-10 col-lg-5 mx-auto my-2">
                <h4 className="text-center text-capitalize text-danger">
                  Event Details
                </h4>
                <span className="h5">Date: </span>
                <span>23rd January 2020</span>
                <br />
                <span className="h5">Location: </span>
                <span>WestHills Mall, Accra</span>
                <br />
                <br />
                <span className="h5">Summary</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum quae eaque laborum corrupti exercitationem placeat eos
                  perferendis eius vel doloremque, fugiat porro dignissimos
                  nesciunt aut voluptas. Repudiandae officiis suscipit modi nam
                  quaerat labore, mollitia possimus repellat. Sequi facere
                  repellat corporis adipisci atque consequatur deleniti
                  doloremque, modi quia vero exercitationem est?
                </p>
                <a href="/events">
                  <button
                    type="button"
                    className="button w-75 rounded btn-outline-danger"
                    aria-label="Continue Reading"
                  >
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container-fluid">
            <Title title="get in touch" />
            <div className="row no-gutters align-items-center">
              <div className="col-md-5 text-white mx-auto bg-danger text-center my-3 py-2 rounded">
                <i className="fas fa-phone"></i>
                <span className="contact-no h4">+233535505050</span>
              </div>
              <div className="col-md-5 text-white mx-auto bg-danger text-center my-3 py-2 rounded">
                <i className="far fa-envelope"></i>
                <span className="contact-mail h4">
                  contact@healthfactor.com
                </span>
              </div>
            </div>
            <div className="row my-5 d-flex justify-content-around">
              <a href="#">
                <i className="fab fa-facebook-square display-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube-square display-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square display-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram display-4"></i>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
