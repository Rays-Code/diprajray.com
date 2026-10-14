"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .ge-btn { transition: transform 0.15s, background-color 0.15s; }
          .ge-btn:hover { transform: scale(1.02); }
          .ge-btn-secondary:hover { background-color: rgba(255,255,255,0.1) !important; }
        `}</style>
      </head>
      <body style={{ margin: 0, backgroundColor: "#000" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "96px 24px",
            textAlign: "center",
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            color: "#fff",
          }}
        >
          {/* Blue glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 500,
              height: 500,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              backgroundColor: "rgba(46,55,254,0.25)",
              filter: "blur(140px)",
              pointerEvents: "none",
            }}
          />

          {/* Status pill */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "#000",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
              }}
            />
            Error 500
            <span
              style={{
                width: 1,
                height: 12,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Server error
            </span>
          </div>

          {/* Big 500 */}
          <p
            style={{
              position: "relative",
              margin: 0,
              fontSize: "clamp(120px, 22vw, 240px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              userSelect: "none",
              background:
                "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.1))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            500
          </p>

          {/* Headline */}
          <h1
            style={{
              position: "relative",
              margin: 0,
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            Something{" "}
            <span
              style={{
                display: "inline-block",
                padding: "4px 20px",
                borderRadius: 9999,
                backgroundColor: "#2E37FE",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              went wrong
            </span>
          </h1>

          <p
            style={{
              position: "relative",
              margin: 0,
              maxWidth: 480,
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            An unexpected error occurred on my end. Please try again, or head
            back home and I&apos;ll get it sorted.
          </p>

          {/* Buttons */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 8,
            }}
          >
            <button
              className="ge-btn"
              onClick={reset}
              style={{
                backgroundColor: "#2E37FE",
                color: "#fff",
                border: "none",
                borderRadius: 9999,
                padding: "12px 32px",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again ↻
            </button>
            <a href="/" style={{ textDecoration: "none" }}>
              <button
                className="ge-btn ge-btn-secondary"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 9999,
                  padding: "12px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Back to Home ↗
              </button>
            </a>
          </div>

          {/* Error reference */}
          {error.digest && (
            <p
              style={{
                position: "relative",
                margin: "16px 0 0",
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}