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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#ffd400",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            /01 · Направление
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "#f6f5f1",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Строительство
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "#a3a09a",
              marginTop: "12px",
            }}
          >
            Благоустройство · Инженерные сети · ГНБ · Земляные работы
          </div>
        </div>

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
              display: "flex",
              fontSize: "18px",
              fontWeight: 700,
              color: "#f6f5f1",
              textTransform: "uppercase",
            }}
          >
            Транс Строй <span style={{ color: "#ffd400", marginLeft: "6px" }}>СПб</span>
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#666",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            СПб и Ленинградская область
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
