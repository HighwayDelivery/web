import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Grid, Col } from "lil-grid";
import colors from "utils/colors";
import cookies from "next-cookies";
import firebase from "firebase-client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "react-feather";

const Container = styled.section`
  max-width: 84rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const StyledMarketing = styled.main`
  .hero {
    overflow: hidden;
    background: ${colors.ui_900};
    color: ${colors.ui_300};
    .front {
      position: relative;
      z-index: 3;
    }
    .hero__grid {
      min-height: calc(100vh - 5rem);
      padding-top: 2rem;
      padding-bottom: 2rem;
      align-items: center;
    }
    h1 {
      color: ${colors.purple_300};
      font-weight: 800;
      line-height: 1;
      margin-bottom: 2rem;
      @media (min-width: 40rem) {
        font-size: 10rem;
      }
    }
    .hero__package-container {
      position: relative;
      grid-row: 1;
    }
    .hero__package-container picture,
    .hero__package-container img {
      display: block;
      position: absolute;
      right: 0;
      transform: translateY(-66%);
      width: 100vw;
      max-width: 60rem;
      filter: drop-shadow(-4rem -1rem 2rem rgba(0, 0, 0, 0.4));
    }
    .hero__input {
      display: flex;
      margin-top: 2rem;
      border-radius: 4px;
      background: ${colors.ui_700};
      color: ${colors.ui_300};
      padding: 1rem;
      flex-direction: column;
      input,
      button {
        all: unset;
        position: relative;
      }
      input {
        cursor: text;
        margin: 0 1rem;
        flex: 1;
        color: ${colors.ui_300};
        margin-bottom: 2rem;
        &::placeholder {
          color: ${colors.ui_500};
        }
      }
      button {
        cursor: pointer;
        background: ${colors.green_500};
        color: ${colors.ui_900};
        padding: 1rem 2rem;
        border-radius: 4px;
        overflow: hidden;
        transition: 200ms;
        text-align: center;
        span {
          position: relative;
          z-index: 2;
        }
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${colors.green_700};
          transform: translateX(100%);
          transition: 200ms;
        }
        &:hover {
          color: ${colors.ui_100};
          &::after {
            transform: translateX(0);
          }
        }
      }
    }
    .hero__waitlist {
      position: relative;
      z-index: 2;
      margin-top: 2rem;
      margin-right: 4rem;
      h2 {
        font-weight: 800;
        color: ${colors.green_500};
      }
    }
    .hero__disclosure {
      margin-top: 2rem;
      color: ${colors.ui_500};
    }
    @media (min-width: 40rem) {
      .hero__package-container picture,
      .hero__package-container img {
        right: -5rem;
      }
      .hero__input {
        margin-right: 4rem;
        flex-direction: row;
      }
      .hero__input input {
        margin-bottom: 0;
      }
    }
    @media (min-width: 60rem) {
      .hero__package-container {
        grid-row: initial;
      }
      .hero__package-container picture,
      .hero__package-container img {
        right: -7.5rem;
        transform: translateY(-50%);
      }
      .hero__explainer {
        margin-right: 20rem;
      }
    }
  }
  .pitch-cards {
    margin-top: 10rem;
    margin-bottom: 10rem;
    grid-row-gap: 5rem;
  }
  footer {
    background: ${colors.purple_700};
    color: ${colors.ui_100};
    padding: 2rem 0;
    font-weight: 900;
    a {
      color: ${colors.green_300};
      text-decoration: none;
    }
  }
`;

async function getInitialProps(ctx) {
  const { waitListEmail } = cookies(ctx);
  if (!waitListEmail) return { waitList: null };
  const db = ctx.req
    ? ctx.req.firebaseServer.firestore()
    : firebase.firestore();
  const ref = db
    .collection("waitlist")
    .where("email", "==", waitListEmail)
    .limit(1);
  let waitList = null;
  try {
    const {
      docs: [doc]
    } = await ref.get();
    if (doc.exists) waitList = doc.data();
  } catch (err) {
    console.log(err);
  }

  return { waitList };
}

export default function Marketing(props) {
  const [waitList, setWaitList] = useState(props.waitList);
  const [email, setEmail] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const db = firebase.firestore();
    const waitlistRef = db.collection("waitlist");
    try {
      const {
        docs: [doc]
      } = await waitlistRef.where("email", "==", email).get();
      if (doc) setWaitList(doc.data());
      else {
        const { size: waitlistSize } = await waitlistRef.get();
        await db.collection("waitlist").add({
          email,
          street_address: "2024 N California Ave",
          place: waitlistSize
        });
        setWaitList({
          email,
          street_address: "2024 N California Ave",
          place: waitlistSize + 1
        });
      }
      document.cookie = `waitListEmail=${email}`;
    } catch (err) {
      console.log(err);
    }
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  };
  const picture = {
    hidden: { opacity: 0, scale: 1.1, x: 72 },
    show: { opacity: 1, scale: 1, x: 0 }
  };
  return (
    <StyledMarketing>
      <Head>
        <title>Curated Cannabis | Highway Delivery</title>
        <meta
          name="description"
          content="Cannabis subscription boxes. Get curated cannabis each month. Customize your box and enjoy our exclusive strains and creations along the way."
        />
        <meta property="og:url" content="https://highway.delivery" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Curated Cannabis" />
        <meta
          property="og:description"
          content="Cannabis subscription boxes. Get curated cannabis each month. Customize your box and enjoy our exclusive strains and creations along the way."
        />
        <meta
          property="og:image"
          content="https://highway.delivery/images/package.png"
        />
      </Head>
      <section className="hero">
        <Container
          as={motion.section}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Grid className="hero__grid">
            <Col span={[12, 12, 8]}>
              <h2>Highway</h2>
              <h1>
                <span className="front">Cannabis,</span> Curated
              </h1>
              <p className="hero__explainer front">
                Try a curated set of flowers and vapor each month.
              </p>
              {!waitList ? (
                <form className="hero__input" onSubmit={handleSubmit}>
                  <input
                    aria-label="waitlist email"
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button type="submit">
                    <span>Join the waitlist.</span>
                  </button>
                </form>
              ) : (
                <section className="hero__waitlist">
                  <h2># {waitList.place}</h2>
                  <p className="front">
                    You're on the waitlist. We'll let you know when your invite
                    to sign up is ready.
                  </p>
                  <section
                    css={`
                      display: flex;
                      margin: 1rem 0;
                      a {
                        margin-right: 2rem;
                        color: ${colors.green_500};
                        &:hover {
                          color: ${colors.green_700};
                        }
                      }
                    `}
                  >
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://highway.delivery">
                      <Facebook />
                    </a>
                    <a href="https://twitter.com/home?status=https://highway.delivery">
                      <Twitter />
                    </a>
                    <a href="https://www.instagram.com/highway.delivery/">
                      <Instagram />
                    </a>
                  </section>
                </section>
              )}
              <p className="hero__disclosure">Deliveries start January 2020</p>
            </Col>
            <Col span={[12, 12, 4]} className="hero__package-container">
              <motion.picture variants={picture}>
                <source type="image/webp" srcSet="/images/package.webp" />
                <img alt="subscription package" src="/images/package.png" />
              </motion.picture>
            </Col>
          </Grid>
        </Container>
      </section>
      <Container as={Grid} className="pitch-cards">
        <Col span={[12, 5]}>
          <h3>Flowers & Vapor</h3>
          <p className="small">
            Choose from flowers or vapor and always be able to change your order
            up to delivery. Switch it up whenever you want.
          </p>
        </Col>
        <Col span={[0, 2]} />
        <Col span={[12, 5]}>
          <h3>Flexible Delivery</h3>
          <p className="small">
            Choose a time that works for you and we'll deliver it straight into
            your hands You'll need an illinois license to accept delivery.
          </p>
        </Col>
        <Col span={[12, 5]}>
          <h3>Extras Included</h3>
          <p className="small">
            Curated goodies from the best chefs and botanists in the city.
            Choose from your favorites or let us suggest a treat.
          </p>
        </Col>
        <Col span={[0, 2]} />
        <Col span={[12, 5]}>
          <h3>15% Off</h3>
          <p className="small">
            Subscription equal discounts, you'll get an average 15% off products
            you order through Highway and they'll be delivered to you for free.
          </p>
        </Col>
      </Container>
      <footer>
        <Container>
          <p className="small">
            Made by <a href="https://dreadful.design">Dreadful Design.</a> All
            rights reserved. &trade;
          </p>
        </Container>
      </footer>
    </StyledMarketing>
  );
}

Marketing.getInitialProps = getInitialProps;
