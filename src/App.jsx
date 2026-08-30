import { useState } from "react";
import "./App.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import { Divider, Col, Row, Select, Space, DatePicker } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const noonReserve = [
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
];
const pmReserve = [
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
];
const nightReserve = [
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
];

function App() {
  const [tab, setTab] = useState("booking");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [reservedTime, setReservedTime] = useState("");
  return (
    <div>
      <header>
        <div className="navbar">
          <h2>松風鍋物</h2>
          <button>中文</button>
        </div>
        <div className="Divider">
          <Divider />
        </div>
      </header>
      <main>
        <div className="hero">
          <div>
            <img src={img3} alt="image" />
          </div>
          <div className="tab-bar">
            <a
              className={tab === "booking" ? "active" : ""}
              onClick={() => {
                setTab("booking");
              }}
              href="#!"
            >
              我要訂位
            </a>
            <a
              className={tab === "order" ? "active" : ""}
              onClick={() => {
                setTab("order");
              }}
              href="#!"
            >
              點餐
            </a>
          </div>
        </div>
        <div className="Divider">
          <Divider />
        </div>
        <div>
          <div>
            <div>松風鍋物</div>
            <div>台南市安平區中華西路</div>
          </div>
          <div>
            <div>電話 06-000000</div>
            <div>地圖 查看地圖</div>
          </div>
        </div>
        <div className="Divider">
          <Divider />
        </div>
        {tab === "booking" && (
          <>
            <div>
              <p>訂位指南</p>
              <p>營業時間：AM 11:00- AM 02:00</p>
              <p>（最後收客時間 AM 01:00 ）</p>

              <p>＃開放30天內預約訂位</p>
              <p>✅店內禁止攜帶寵物，敬請見諒</p>
              <p>✅用餐時間90分鐘</p>
              <p>
                ✅
                線上預約提供1-6人訂位，若超過6人訂位請於營業時間內撥打門市專線進行訂位
              </p>
            </div>
            <div className="Divider">
              <Divider />
            </div>
            <div>
              <Row>
                <Col xs={16}>用餐人數</Col>
                <Col xs={8}>用餐日期</Col>
              </Row>
              <div>
                <Row>
                  <Col xs={8}>
                    <Select
                      defaultValue="大人"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={[
                        { value: "adult1", label: "一位大人" },
                        { value: "adult2", label: "二位大人" },
                        { value: "adult3", label: "三位大人" },
                        { value: "adult4", label: "四位大人", disabled: false },
                        { value: "adult5", label: "五位大人" },
                        { value: "adult6", label: "六位大人" },
                      ]}
                    />
                  </Col>
                  <Col xs={8}>
                    <Select
                      defaultValue="小孩"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={[
                        { value: "kid1", label: "一位小孩" },
                        { value: "kid2", label: "二位小孩" },
                        { value: "kid3", label: "三位小孩" },
                        { value: "kid4", label: "四位小孩", disabled: false },
                        { value: "kid5", label: "五位小孩" },
                        { value: "kid6", label: "六位小孩" },
                      ]}
                    />
                  </Col>
                  <Col xs={8}>
                    <DatePicker style={{ width: "90%" }} />
                  </Col>
                </Row>
              </div>
              <div className="Row">
                <div>用餐時段</div>
                <div>
                  <Divider>中午</Divider>
                </div>
                <div>
                  <Row gutter={[20, 20]}>
                    {noonReserve.map((time) => (
                      <Col key={time} xs={4}>
                        <button
                          className={reservedTime === time ? "active" : ""}
                          onClick={() => setReservedTime(time)}
                        >
                          {time}
                        </button>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div>
                  <Divider>下午</Divider>
                </div>
                <div>
                  <Row gutter={[20, 20]}>
                    {pmReserve.map((time) => (
                      <Col key={time} xs={4}>
                        <button>{time}</button>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div>
                  <Divider>晚上</Divider>
                </div>
                <div>
                  <Row gutter={[20, 20]}>
                    {nightReserve.map((time) => (
                      <Col key={time} xs={4}>
                        <button>{time}</button>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <div>
                <h4>定位以外需求請撥打</h4>
                <p>電話 06-000000</p>
              </div>
              <div className="Divider">
                <Divider />
              </div>
              <div>
                <h4>餐廳資訊</h4>
                <div className="branch-info">
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7346.008728452863!2d120.186491!3d22.986867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767437b90013%3A0x65868f7e8821835e!2z6LyV5LqV5r6k6Y2L54mpIOWPsOWNl-W6lw!5e0!3m2!1szh-TW!2sus!4v1787563780523!5m2!1szh-TW!2sus"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                  <div>
                    <div>
                      <div>位置</div>
                      <p>台南市安平區中華西路</p>
                    </div>
                    <div>
                      <div>電話</div>
                      <p>06-000000</p>
                    </div>
                    <div>
                      <div>營業時間</div>
                      <p>11:00~21:00</p>
                    </div>
                    <div>
                      <div>料理</div>
                      <p>XX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Divider">
                <Divider />
              </div>
            </div>
          </>
        )}
        <div>
          <div>
            <h4>菜單</h4>
          </div>
          <div className="branch-menu">
            <img className="menu-img" src={img2} alt="menu" />
            <img className="menu-img" src={img1} alt="menu" />
          </div>
        </div>
        <div className="Divider">
          <Divider />
        </div>
        {tab === "order" && (
          <>
            <div>
              <div>火鍋</div>
              <div>
                <div>品項</div>
                <div>品項</div>
              </div>
            </div>
            <div>
              <div>壽喜燒火鍋</div>
              <div>
                <div>品項</div>
                <div>品項</div>
              </div>
            </div>
            <div>
              <div>麻辣火鍋</div>
              <div>
                <div>品項</div>
                <div>品項</div>
              </div>
            </div>
            <div className="Divider">
              <Divider />
            </div>
          </>
        )}
      </main>
      <footer>
        <section>
          <p>版權:© 2026 松風鍋物 All Rights Reserved.</p>
          <p>電話 06-000000、地址 台南市安平區中華西路</p>
          <span>
            <FacebookFilled />
          </span>
          <span>
            <InstagramFilled />
          </span>
        </section>
      </footer>
    </div>
  );
}

export default App;
