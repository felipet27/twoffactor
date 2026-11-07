"use client";

export function TallerHablemosBtn({ style }: { style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-contact"))}
      style={{
        background: "#8C5524",
        color: "#FFFFFF",
        border: 0,
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: 16,
        padding: "0 22px",
        minHeight: 48,
        borderRadius: 8,
        display: "inline-flex",
        alignItems: "center",
        ...style,
      }}
    >
      Hablemos
    </button>
  );
}
