import styled from "styled-components"
import { Grid, Col } from "lil-grid"
import colors from "utils/colors"

const Container = styled.section`
  max-width: 86rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`

const StyledMarketing = styled.main`
  .hero {
    overflow: hidden;
    background: ${colors.ui_900};
    color: ${colors.ui_300};
    .hero__grid {
      min-height: calc(100vh - 5rem);
      padding-top: 2rem;
      padding-bottom: 2rem;
      align-items: center;
    }
    h1 {
      color: ${colors.purple_500};
      font-size: 10rem;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 2rem;
    }
    .hero__package-container {
      position: relative;
      img {
        display: block;
        position: absolute;
        right: -15rem;
        transform: translateY(-50%);
        width: 50vw;
        min-width: 60rem;
        filter: drop-shadow(0 4rem 2rem rgba(0, 0, 0, 0.5));
      }
    }
    .hero__input {
      display: flex;
      margin-top: 2rem;
      border-radius: 4px;
      background: ${colors.ui_100};
      margin-right: 4rem;
      padding: 1rem;
      input,
      button {
        all: unset;
        position: relative;
      }
      input {
        cursor: text;
        margin: 0 1rem;
        flex: 1;
        color: ${colors.ui_900};
      }
      button {
        cursor: pointer;
        background: ${colors.green_500};
        color: ${colors.ui_900};
        padding: 1rem 2rem;
        border-radius: 4px;
        overflow: hidden;
        transition: 200ms;
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
  }
  .pitch-cards {
    margin-top: 10rem;
    margin-bottom: 10rem;
    grid-row-gap: 5rem;
  }
  .hero__disclosure {
    margin-top: 2rem;
    color: ${colors.ui_500};
  }
`

export default function Marketing() {
  return (
    <StyledMarketing>
      <section className="hero">
        <Container>
          <Grid className="hero__grid">
            <Col span={[8]}>
              <h2>Highway</h2>
              <h1>Get It Your Way</h1>
              <p>Flowers & vapor delivered to your door, on your schedule.</p>
              <form className="hero__input">
                <input type="email" placeholder="name@email.com" />
                <button type="submit">
                  <span>Join the waitlist.</span>
                </button>
              </form>
              <p className="hero__disclosure">Deliveries start January 2020</p>
            </Col>
            <Col span={[4]} className="hero__package-container">
              <img src="/package.png" alt="subscription package" />
            </Col>
          </Grid>
        </Container>
      </section>
      <Container as={Grid} className="pitch-cards">
        <Col span={[12, 5]}>
          <h3>Flowers & Vapor</h3>
          <p className="small">
            Choose from flowers or vapor and always be able to change your order up to
            delivery. Switch it up whenever you want.
          </p>
        </Col>
        <Col span={[0, 2]} />
        <Col span={[12, 5]}>
          <h3>Flexible Delivery</h3>
          <p className="small">
            Choose a time that works for you and we'll deliver it straight into your hands
            You'll need an illinois license to accept delivery.
          </p>
        </Col>
        <Col span={[12, 5]}>
          <h3>Extras Included</h3>
          <p className="small">
            Curated goodies from the best chefs and botanists in the city. Choose from
            your favorites or let us suggest a treat.
          </p>
        </Col>
        <Col span={[0, 2]} />
        <Col span={[12, 5]}>
          <h3>15% Off</h3>
          <p className="small">
            Subscription equal discounts, you'll get an average 15% off products you order
            through Highway and they'll be delivered to you for free.
          </p>
        </Col>
      </Container>
    </StyledMarketing>
  )
}
