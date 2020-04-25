import React, { Component } from "react";
import HealthAdvocacyImg from "../img/health-advocacy.jpg";
import BloodDonationImg from "../img/blood-donation.jpg";
import MedicalOutreachImg from "../img/medical-outreach.jpg";
import MedicalConsultancyImg from "../img/medical-consultancy.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header id="about-header">
          <div className="container-fluid">
            <div className="row about-headerHeight align-items-center">
              <div className="col .header-content text-white mx-5">
                <h1 className="display-4 text-capitalize">about us</h1>
                <h4>what we do - our vision - our mission - our team </h4>
              </div>
            </div>
          </div>
        </header>

        <section id="about-page">
          <div className="container mt-3">
            <div className="row mx-auto">
              <p className="mx-auto">
                The Health Factor Foundation is a non-governmental and
                charitable organization aimed at providing assistance in primary
                health care for the aged, less privileged and handicapped in the
                society. It comprises of passionate medical professionals,
                nurses, allied health professionals and selfless volunteers with
                requisite skills to contribute their quota to impact the society
                via achieving the goals of the organization. The slogan of the
                health factor foundation is, “the health of the aged… our
                priority”.
                <br />
                <br />
                As individuals grow, we are prone to uncomfortable working
                conditions, stress, environmental pollution and other
                detrimental factors that contribute to the downward-arching of
                our immune system and health capacity as a whole. Our goal is to
                promote health and well-being through educational counselling,
                medical advocacy and timely detection and treatment of a
                disease. In this vein, we are aimed at ensuring that preventable
                deaths are reduced to the barest minimum.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="h5 text-danger text-uppercase">vision</h3>
                <p>
                  To be a global health philanthropic organization that put
                  smiles on the faces of many underprivileged people by
                  providing sufficient assistance in primary healthcare and
                  health advocacy services.
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="h5 text-danger text-uppercase">mission</h3>
                <p>
                  To provide assistance in primary health care to the aged,
                  less-privileged and handicapped individuals in our society
                  coupled with health advocacy services.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="h5 text-danger text-uppercase">CORE VALUES</h3>
                <ul>
                  <li>Commitment to excellence.</li>
                  <li>Creativity and innovation.</li>
                  <li>Passion.</li>
                  <li>Diligence to achieve desired results.</li>
                  <li>Sustainable collaboration.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="h5 text-danger text-uppercase">
                  SUSTAINABILTY PLAN – THE HEALTH FACTOR
                </h3>
                <p>
                  In the phenomenon of sustaining the set goals of the
                  organization, we have a fund generating component called, “The
                  Health Factor”. This component of the organization provides a
                  wide range of screening services, including, physical
                  examination, rapid response tests, vision and eye examination,
                  dietician consult, blood pressure monitoring, body mass index
                  and fat analysis, depression anxiety stress scale, clinical
                  psychologist consult, haemoglobin level, blood glucose
                  testing, general consultation and others demanding health
                  services. This inspired the theme, “Quality health for life”
                  for The Health Factor. Medical screenings can be used to drive
                  retail traffic, position key products and services as central
                  to disease management and monitoring. Additionally, to promote
                  the organization’s mission and fundraising efforts, we
                  understand how to maximize screenings as a strategic campaign,
                  broadening impact for screening participants, surrounding
                  peers, patients and community members. The Health Factor
                  professionals provide immediate onsite results after the
                  thorough screening, as well as health advocacy services
                  regarding each of the tests performed. Participants walk away
                  from their screening with valuable information, while clients
                  enhance their understanding of their health. Worksite
                  screenings are provided for companies, institutions, families,
                  individuals, communities, that require our services. To
                  support and help our client(s) after these screenings, The
                  Health Factor offers onsite counselling, post-engagement
                  communications with the clients, data management, analysis and
                  general management services according to clients or company’s
                  request.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="h5 text-danger text-uppercase">
                  QUALITY POLICY OBJECTIVE
                </h3>
                <p>
                  We at Health Factor are committed to providing our customers
                  with health service of the highest possible level of quality,
                  by continually improving our service to meet client’s
                  satisfaction at all times through regular gathering and
                  monitoring of client’s feedback. We are stimulated to adhere
                  to sustainable collaboration, commitment to excellence,
                  diligence to achieve desired results and innovation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="h5 text-danger text-uppercase">
                  OBJECTIVES/SIGNIFICANCE OF HEALTH SCREENING
                </h3>
                <p>
                  At the end of the health screening exercise, the medical team
                  will identify potential problems or some hidden abnormal
                  circumstances and ensure measures are put in motion to prevent
                  diseases and it’s complications.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="h5 text-danger text-uppercase">
                  Benefits to clients and organization
                </h3>
                <ul>
                  <li>Access to health information.</li>
                  <li>Reduced health risks.</li>
                  <li>Improved performance in various field of work.</li>
                  <li>Better mental health.</li>
                  <li>Broaden the knowledge on the individual.</li>
                  <li>Empowering participants to become healthier.</li>
                  <li>
                    Expanding medical knowledge in the institution via health
                    advocacy.
                  </li>
                  <li>
                    Providing access to essential healthcare for those in
                    greatest need.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about-what-we-do">
          <div className="container">
            <div className="row" id="">
              <div className="col text-center">
                <h1 className="text-capitalize mb-1 mt-4 text-danger">
                  <strong>what we do</strong>
                </h1>
                <div className="title-underline bg-danger mx-auto"></div>
                <p className="text-capitalize text-muted mt-2">
                  we are the very best there is{" "}
                </p>
              </div>
            </div>

            <div className="row" id="medical-consultancy">
              <div className="col-12 col-lg-9 m-auto">
                <h3 className="h5 text-danger text-uppercase">
                  Medical consultancy
                </h3>
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-3">
                <img
                  className="img-fluid"
                  src={MedicalConsultancyImg}
                  alt="health sceening"
                />
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-5">
                <p>
                  The myriad of health duties we execute as a team, enable us to
                  refer intensive medical conditions to our selfless
                  specialists. The aim to help our topmost priorities (aged,
                  less- privileged and handicapped) inspire the ethical tool of
                  beneficence, non-maleficence, autonomy and jurisprudence.
                  <br />
                  Our medical specilists, with a high sense of altruism without
                  egoism identify and evaluate a patient&#39;s current medical
                  status and provide a clinical risk profile, to decide whether
                  further tests are indicated prior to surgery, and to optimize
                  the patient&#39;s medical condition in an attempt to reduce
                  the risk of complications. In this vein, we utilize this
                  medium of service provision to raise funds for the
                  organization if the individual does not fall in the criteria.
                </p>
              </div>
            </div>
            <div className="row" id="medical-outreach">
              <div className="col-12 col-lg-9 m-auto">
                <h3 className="h5 text-danger text-uppercase">
                  medical outreach
                </h3>
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-3">
                <img
                  className="img-fluid"
                  src={MedicalOutreachImg}
                  alt="medical outreach"
                />
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-5">
                <p>
                  Donating blood is a vital way to help save lives especially
                  the less privileged and aged. To attain the 100 per cent
                  voluntary blood donation target set by the World Health
                  Organization to be achieved the year 2020, we conduct blood
                  donation exercises with the help of regional hospitals.
                  Recently, we embarked on a universities campus blood donation
                  exercise tour to encourage the youth on the essence of
                  donating blood as a form of saving a life and a great deal of
                  emotional and physical stability. This project helped the
                  Accra Ridge Regional hospital acquire 106 units of blood.
                  <br />
                  Moreover, our health advocacy team verified that according to
                  a report by the Mental Health Foundation, donating blood helps
                  one: reduce stress, improve your emotional well-being, benefit
                  your physical health, help get rid of negative feelings,
                  provide a sense of belonging and reduce isolation.
                </p>
              </div>
            </div>
            <div className="row" id="blood-donation">
              <div className="col-12 col-lg-9 m-auto">
                <h3 className="h5 text-danger text-uppercase">
                  blood donation
                </h3>
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-3">
                <img
                  className="img-fluid"
                  src={BloodDonationImg}
                  alt="blood donation"
                />
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-5">
                <p>
                  The joy which fills the hearts of our cadre of medics and
                  volunteers is the enthusiasm that inspires our journey to the
                  rural communities. These medical voyages inspired the theme,
                  “preventive medicine, our optimum goal”. In as much as the
                  aged, less privileged and handicapped were the topmost
                  priorities: the sense of preventing diseases through thorough
                  health screening is imperative.
                  <br />
                  Preventive medicine&#39;s importance is best summarized by the
                  old saying &quot;an ounce of prevention is worth a pound of
                  cure.&quot;  Not getting medical problems in the first place
                  gives people a better overall quality of life that even the
                  best of treatments can&#39;t provide. It&#39;s usually easier
                  (and less costly) to take steps to keep people healthy than it
                  is to try to cure them (or just keep them alive...) once they
                  have a disease. Here at Health Factor, we can counsel an aged
                  woman to ensure she retrospectively check her diet plan and
                  active phenomenon &amp; then give her a handful after that
                  conversation (maybe costs a cedi) or we can treat her
                  Diabetes/Obesity &amp; the accompanying complications for the
                  remainder of her life  (more than a cedi).
                </p>
              </div>
            </div>
            <div className="row" id="health-advocacy">
              <div className="col-12 col-lg-9 m-auto">
                <h3 className="h5 text-danger text-uppercase">
                  health advocacy
                </h3>
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-3">
                <img
                  className="img-fluid"
                  src={HealthAdvocacyImg}
                  alt="health education"
                />
              </div>
              <div className="col-12 col-lg-9 mx-auto mb-5">
                <p>
                  Health advocacy encompasses direct service to the individual
                  or family as well as activities that promote health and access
                  to health care in communities and the larger public. As a team
                  of public health advocates, we support and promote the rights
                  of the patient in the health care arena, help build capacity
                  to improve community health and enhance health policy
                  initiatives focused on available, safe and quality care.
                  <br />
                  In Health Factor, we talk a lot about the importance and
                  influence of health advocacy. Rarely, though, do we break down
                  what this really means. Health advocacy is one of the many
                  powerful tools that we use to drive transformative innovation
                  to save lives of the less privileged. By influencing the
                  priorities and actions of those in power, we work to create an
                  enabling environment that supports good health and equity in
                  our society.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
