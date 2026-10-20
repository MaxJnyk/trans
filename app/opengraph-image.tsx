import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "linear-gradient(rgba(255,212,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Hazard stripe top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "repeating-linear-gradient(90deg, #ffd400 0px, #ffd400 20px, #0d0d0d 20px, #0d0d0d 40px)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#ffd400",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            С 2009 года
          </div>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 900,
              color: "#f6f5f1",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Транс Строй
          </div>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 900,
              color: "#ffd400",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            СПб
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#a3a09a",
              marginTop: "16px",
            }}
          >
            Строительство · Благоустройство · Перевозки негабарита по РФ
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #333",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#666",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            СПб и ЛО · По всей РФ
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#666",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            trans-stroy-spb.ru
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
