import "./App.css";
import logo from "./assets/logo.png";
import people from "./assets/happytable.jpg";
import people2 from "./assets/people2.jpg";
import fish from "./assets/fish.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import facebook from "./assets/FACEBOOK (1).jpg";
import insta from "./assets/INST.jpg";
import menu from "./assets/menu.jpg";
import item2 from "./assets/d.jpg";
import item3 from "./assets/item2.jpeg";
import item4 from "./assets/item4.jpeg";
import call from "./assets/CALL (1).png";
import support from "./assets/call.jpg";
import boat from "./assets/BOAT.jpg";
import boat2 from "./assets/BOAT2.jpg";

function App() {
  const MenuItem = ({ title }) => {
    return (
      <div
        style={{
          fontSize: 16,
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        {title}
      </div>
    );
  };
  return (
    <div
      className="App"
      style={{ height: "100vh", width: "100vw", backgroundColor: "#000" }}
    >
      {/* header */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ height: 80, width: 80, margin: 20 }} />
        <div
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            fontFamily: "cursive",
          }}
        >
          Gold Beach
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            height: 50,
            alignItems: "center",
            justifyContent: "flex-end",
            columnGap: 35,
            marginRight: 40,
            cursor: "pointer",
          }}
        >
          <MenuItem title="HOME" />
          <MenuItem title="ABOUT" />
          <MenuItem title="MENU" />
          <MenuItem title="CONTACTS" />
        </div>
      </div>
      {/* header end */}

      {/* body */}
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          // marginTop: 80,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            marginTop: 80,
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: 120 }}>
            <div style={{ fontWeight: "bold", fontSize: 60, color: "#fff" }}>
              Experience a memorable taste
            </div>
            <div style={{ fontWeight: "bold", fontSize: 40, color: "#fff" }}>
              In open water
            </div>

            <div
              style={{
                fontWeight: "400",
                fontSize: 20,
                color: "#fff",
                maxWidth: 600,
                marginTop: 30,
              }}
            >
              So why not treat yourself to some mouthwatering seafood today?
              Visit us and experience the taste of the ocean in every bite.
            </div>

            <div
              style={{
                height: 70,
                width: 400,
                borderRadius: 10,
                display: "flex",
                // backgroundColor: "#e6b515",
                marginTop: 50,
                alignItems: "center",
                // justifyContent: "center",
                color: "#000",
                // fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <input
                style={{
                  display: "flex",
                  height: 45,
                  width: 250,
                  borderRadius: 8,
                  fontWeight: "bold",
                }}
                placeholder="Insert your Email"
              />
              <div
                style={{
                  height: 50,
                  width: 150,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#e6b515",
                  // marginTop: 50,
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                BOOK A TABLE
              </div>
            </div>
          </div>

          <div style={{ height: 450, width: 700, marginRight: 120 }}>
            <SimpleImageSlider
              width={700}
              height={450}
              images={[fish, people, people2, boat, boat2]}
              showBullets={true}
              showNavs={true}
              loop
              autoPlay
              autoPlayDelay={4}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <img
            height="70"
            width="70"
            style={{
              marginLeft: 30,
              marginTop: "30",
              position: "fixed",
              marginRight: 50,
            }}
            src={support}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 2,
            marginTop: 90,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#e6b515",
              width: "90%",
              height: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: 50,
            flexDirection: "column",
            backgroundColor: "#000",
            alignItems: "center",
          }}
          id="items"
        >
          {/* row  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            {/* item1 */}
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={item2} />
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              Gold Beach Restaurant intends to offer a special discount for
              customers who book through the website.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#e6b515",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Get it Now
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6b515",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>
          {/* item 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              Great customer service doesn't mean the customer is always right,
              it means the customer is always honored.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#e6b515",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                More Info
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={item3} />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6b515",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>

          {/* item3  */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={menu} />
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              Our menu features a wide selection of mouth-watering dishes,
              including succulent grilled shrimp, juicy crab legs, buttery
              lobster tail, and much more. And for those looking for a lighter
              option, we offer a variety of delicious salads and seafood soups
              that are just as satisfying.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#e6b515",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                More
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6b515",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>
          {/* item 4 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              Our restaurant is proud to offer its special customers the special
              service of the sea basket restaurant, and on the days set in the
              restaurant calendar, they can benefit from the restaurant's drinks
              and desserts for free.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#e6b515",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                More
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50",
              }}
            >
              <img height="400" width="500" src={item4} />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6b515",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              color: "#fff",
              marginBottom: 50,
            }}
          >
            <div>Address: No.12, Bandar street ,Hormoz , IRAN</div>
            <div>Email: gold.beach.restaurant@mail.com</div>
            <div>Tell: +989122616435</div>
            <div>SMS: +989122616435</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <div>
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={call}
                />
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={facebook}
                />
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={insta}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
      {/* body end */}
    </div>
  );
}

export default App;
